import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITA ME <span className="purple"> APRESENTAR </span> 
            </h1>
            <p className="home-about-body">
              Sou como um viajante no vasto universo da programação, 
              onde cada linha de código é uma história a ser escrita. 
              A paixão por esse intricado mundo me envolveu, e, pelo menos,
              aprendi algo ao longo desse fascinante percurso... 🤷‍♂️
              <br />
              <br />Nesse caminho, conquistei fluência em línguas clássicas como C/C++, JavaScript, TypeScript, Python e PHP 
                    moldando meu próprio dialeto no tecido da computação. Minhas jornadas de desenvolvimento se estendem por terras virtuais, 
                    construindo novas tecnologias e produtos na vastidão da web, assim como explorando os ricos terrenos relacionados à mobilidade.
              <i>
                <b className="purple"> C/C++, JavaScript, TypeScript, Python e PHP </b>
              </i>
              <br />
              <br />
              E nas encruzilhadas digitais, eu teço meu conto com paixão, utilizando ferramentas modernas como &nbsp;
              <i>
                <b className="purple">Node.js </b> e dançando com as elegantes bibliotecas e frameworks de JavaScript, 
                como{" "}
                <b className="purple">
                React.js e Next.js. 
                </b>
              </i>
              <br />
              <br />
                Cada projeto é uma aventura, e cada linha de  
              <b className="purple"> código </b> é um elo na trama dessa narrativa digital que  
              <b className="purple"> estou continuamente construindo. </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE ME EM</h1>
            <p>
              Sinta se à vontade para <span className="purple">falar</span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/joaoneto-git"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=5567991213039"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joaoneto-in/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/joaolneto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
