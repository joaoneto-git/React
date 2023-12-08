import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Oi, pessoal! Sou João Cavalcante, um recém-formado em Engenharia de Software pela UFMS. 
            Durante minha jornada acadêmica, aprendi a construir soluções digitais e agora estou pronto para aplicar esse conhecimento no mundo real. 
            Meu objetivo é ser um "arquiteto de códigos", transformando conceitos em aplicações práticas e inovadoras. 
            Estou empolgado para enfrentar desafios e contribuir para o avanço da tecnologia. Vamos construir algo incrível juntos! 🚀
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Estudando
            </li>
            <li className="about-activity">
              <ImPointRight /> Desenvolvendo sites e apps
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajando
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Busque criar soluções que deixem um impacto significativo no mundo!"{" "}
          </p>
          <footer className="blockquote-footer">João Cavalcante</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
