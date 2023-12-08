import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Particle";
import DetetiveMirim from "../../Assets/Projects/detetiveMirim.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">trabalhos  </strong>  recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão os projetos que eu trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DetetiveMirim}
              isBlog={false}
              title="Detetive Mirim"
              description="
              Como desenvolvedor full-stack na AGEMS, liderei o desenvolvimento de um aplicativo móvel inovador utilizando React Native e React. O projeto, 
              focado em denúncias sensíveis, empregou Adonis.js no backend, garantindo segurança e eficiência com PostgreSQL para a gestão de dados. 
              Utilizamos Docker para uma implantação consistente. Este trabalho não apenas proporcionou desafios técnicos estimulantes, 
              mas também contribuiu significativamente para a missão da AGEMS em promover um ambiente mais seguro para a comunidade."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
