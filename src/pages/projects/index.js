import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, projectportfolio } from "../../content_option";

import React, { useState } from "react";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(projectportfolio.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projectportfolio 
    : projectportfolio.filter(project => project.category === selectedCategory);

  // Group projects by year for timeline
  const projectsByYear = filteredProjects.reduce((acc, project) => {
    const year = project.date.split('-')[0]; // Get first year if range
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});

  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3>👨‍💻 Projects & Software Tools</h3>
          </Col>
        </Row>

        {/* Category Filter */}
        <Row className="mb-4">
          <Col>
            <div className="project-filters">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Timeline View */}
        <div className="timeline">
          {sortedYears.map((year, yearIndex) => (
            <div key={yearIndex} className="timeline-year-section">
              <div className="timeline-year">
                <h4>{year}</h4>
              </div>
              <div className="timeline-projects">
                {projectsByYear[year].map((data, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="project-box">
                        <div className="project-header">
                          <h5>{data.title}</h5>
                          <span className="project-category">{data.category}</span>
                        </div>
                        <p className="project-description">{data.description}</p>
                        <div className="project-links">
                          {data.link && (
                            <a className="proj-link" href={data.link}>
                              View Project
                            </a>
                          )}
                          {data.github && (
                            <>
                              {data.link && ' | '}
                              <a className="proj-link" href={data.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                              </a>
                            </>
                          )}
                          {data.website && (
                            <>
                              {(data.link || data.github) && ' | '}
                              <a className="proj-link" href={data.website} target="_blank" rel="noopener noreferrer">
                                Website
                              </a>
                            </>
                          )}
                          {data.video && (
                            <>
                              {(data.link || data.github || data.website) && ' | '}
                              <a className="proj-link" href={data.video} target="_blank" rel="noopener noreferrer">
                                Video
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};

