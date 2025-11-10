import React, { useEffect, useRef } from "react";

const AnimatedCursor = ({ color = "0, 0, 0", outerAlpha = 0.4, innerSize = 8, outerSize = 8, outerScale = 5, innerScale = 0.7 }) => {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  let [coords, setCoords] = React.useState({ x: 0, y: 0 });
  let [isVisible, setIsVisible] = React.useState(true);
  let [isActive, setIsActive] = React.useState(false);
  let [isActiveClickable, setIsActiveClickable] = React.useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current !== null) {
      cursorInnerRef.current.style.top = clientY + "px";
      cursorInnerRef.current.style.left = clientX + "px";
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = React.useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        if (cursorOuterRef.current !== null) {
          cursorOuterRef.current.style.top = coords.y + "px";
          cursorOuterRef.current.style.left = coords.x + "px";
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef, coords]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [animateOuterCursor]);

  const onMouseDown = React.useCallback(() => setIsActive(true), []);
  const onMouseUp = React.useCallback(() => setIsActive(false), []);
  const onMouseEnter = React.useCallback(() => setIsVisible(true), []);
  const onMouseLeave = React.useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    if (isActive) {
      if (cursorInnerRef.current !== null) {
        cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      }
      if (cursorOuterRef.current !== null) {
        cursorOuterRef.current.style.transform = `scale(${outerScale})`;
      }
    } else {
      if (cursorInnerRef.current !== null) {
        cursorInnerRef.current.style.transform = "scale(1)";
      }
      if (cursorOuterRef.current !== null) {
        cursorOuterRef.current.style.transform = "scale(1)";
      }
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable) {
      if (cursorInnerRef.current !== null) {
        cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      }
      if (cursorOuterRef.current !== null) {
        cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
      }
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (isVisible) {
      if (cursorInnerRef.current !== null) {
        cursorInnerRef.current.style.opacity = 1;
      }
      if (cursorOuterRef.current !== null) {
        cursorOuterRef.current.style.opacity = 1;
      }
    } else {
      if (cursorInnerRef.current !== null) {
        cursorInnerRef.current.style.opacity = 0;
      }
      if (cursorOuterRef.current !== null) {
        cursorOuterRef.current.style.opacity = 0;
      }
    }
  }, [isVisible]);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave]);

  useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );
    clickables.forEach((el) => {
      el.style.cursor = "none";
      el.addEventListener("mouseover", () => {
        setIsActive(true);
      });
      el.addEventListener("click", () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseup", () => {
        setIsActive(true);
      });
      el.addEventListener("mouseout", () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  const styles = {
    cursor: {
      zIndex: 999,
      position: "fixed",
      opacity: 1,
      pointerEvents: "none",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
    cursorInner: {
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: `rgba(${color}, 1)`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
    },
    cursorOuter: {
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
  };

  return (
    <React.Fragment>
      <div ref={cursorOuterRef} style={{...styles.cursor, ...styles.cursorOuter}} />
      <div ref={cursorInnerRef} style={{...styles.cursor, ...styles.cursorInner}} />
    </React.Fragment>
  );
};

export default AnimatedCursor;

