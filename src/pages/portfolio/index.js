import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

import React from "react";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container id="publications" className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Publications | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3>📚 Selected Publications </h3>
          </Col>
        </Row>
        <div className="">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="researchBox">
                <div className="publication-content">
                  <h5>{data.title}</h5>
                  <h6 className="authors">{data.authors}</h6>
                  <h6 className="conference">{data.conference}</h6>
                  <div className="publication-links">
                    {data.doi && (
                      <>
                        <a className="pub-link" href={data.doi} target="_blank" rel="noopener noreferrer">
                          DOI
                        </a>
                        {(data.video || data.project) && ' | '}
                      </>
                    )}
                    {data.video && (
                      <>
                        <a className="pub-link" href={data.video} target="_blank" rel="noopener noreferrer">
                          Video
                        </a>
                        {data.project && ' | '}
                      </>
                    )}
                    {data.project && (
                      <a className="pub-link" href={data.project}>
                        Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{marginBottom: '40px', marginTop: '20px'}}>
          For more publications, please visit my{' '}
          <a href="https://scholar.google.com/citations?user=0kVHSxoAAAAJ" target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>
        </p>
      </Container>
    </HelmetProvider>
  );
};

