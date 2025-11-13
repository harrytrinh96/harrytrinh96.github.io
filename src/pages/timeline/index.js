import "./style.css";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, timelinedata } from "../../content_option";
import React, { useState } from "react";

export const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const timelineRef = React.useRef(null);
  const eventsRef = React.useRef(null);

  // Update slider position based on scroll
  const handleScroll = () => {
    if (eventsRef.current) {
      const scrollLeft = eventsRef.current.scrollLeft;
      const maxScroll = eventsRef.current.scrollWidth - eventsRef.current.clientWidth;
      const percentage = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setSliderPosition(percentage);

      // Determine which event is in view
      const eventCards = eventsRef.current.querySelectorAll('.timeline-event');
      eventCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const containerRect = eventsRef.current.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        if (Math.abs(cardCenter - containerCenter) < rect.width / 2) {
          setActiveEventIndex(index);
        }
      });
    }
  };

  // Handle slider drag
  const handleSliderDrag = (e) => {
    if (!timelineRef.current || !eventsRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    const maxScroll = eventsRef.current.scrollWidth - eventsRef.current.clientWidth;
    const scrollTo = (percentage / 100) * maxScroll;
    
    eventsRef.current.scrollLeft = scrollTo;
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const handleMouseMove = (e) => {
      handleSliderDrag(e);
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
    
    document.body.style.userSelect = 'none'; // Prevent text selection while dragging
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    handleSliderDrag(e);
  };

  // Handle direct click on timeline
  const handleTimelineClick = (e) => {
    if (e.target.classList.contains('timeline-slider-dot')) return;
    handleSliderDrag(e);
  };

  React.useEffect(() => {
    const eventsContainer = eventsRef.current;
    if (eventsContainer) {
      eventsContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      
      return () => eventsContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <HelmetProvider>
      <Container id="timeline" className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Timeline | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="sec_sp">
          <h3 className="color_sec py-4">Events in 2025</h3>          
          <div className="timeline-container">
            <div 
              className="timeline-line" 
              ref={timelineRef}
              onClick={handleTimelineClick}
            >
              <div 
                className="timeline-slider" 
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
              >
                <div className="timeline-slider-dot"></div>
              </div>
            </div>
            
            <div className="timeline-events" ref={eventsRef}>
              {timelinedata.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`timeline-event ${activeEventIndex === index ? 'active-event' : ''}`}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-dot"></div>
                  
                  <div className="timeline-card">
                    <div className="timeline-date">{event.date}</div>
                    <div className="timeline-location">📍 {event.location}</div>
                    <h4 className="timeline-title">{event.title}</h4>
                    <p className="timeline-description">{event.description}</p>
                    
                    <div className="timeline-photos">
                      {event.photos.map((photo, photoIndex) => (
                        <div 
                          key={photoIndex} 
                          className="timeline-photo"
                          onClick={() => setSelectedEvent({...event, photoIndex})}
                        >
                          <img src={photo} alt={`${event.title} - Photo ${photoIndex + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox for full-size photos */}
        {selectedEvent && (
          <div className="timeline-lightbox" onClick={() => setSelectedEvent(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setSelectedEvent(null)}>×</button>
              <img 
                src={selectedEvent.photos[selectedEvent.photoIndex]} 
                alt={selectedEvent.title} 
              />
              <div className="lightbox-info">
                <h4>{selectedEvent.title}</h4>
                <p>{selectedEvent.location}</p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

