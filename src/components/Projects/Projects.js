import React, { useState, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
  const [loadMoreContent, setLoadMoreContent] = useState(false);
  const [exactChild, setExactChild] = useState(false);
  const showMoreContent = (event, id) => {
    event.stopPropagation();
    if(event.target == event.currentTarget && id){
        event.stopPropagation()
        setExactChild(true); 
        setLoadMoreContent(true);
    }
  }

  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card">
              <ProjectCard
                key={index}
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                title={project.name}
                description={project.description}
                link={project.url}
                showContent = { loadMoreContent }
                showMoreContent = { showMoreContent }
                childContent = {exactChild}
                uniqueId = {project.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default memo(Projects);
