// Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <div className="container mx-auto my-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Informações de Contato</h2>
        <p><strong>Nome:</strong> João Cavalcante</p>
        <p><strong>E-mail:</strong> joaocavalcante25@gmail.com</p>
        <p href=""><strong>Telefone:</strong> +55 (67) 99121-3039</p>
        <p><strong>LinkedIn:</strong> <a href="linkedin.com/in/joaocavalcante" target="_blank" rel="noopener noreferrer">linkedin.com/in/joaocavalcante</a></p>
        <p><strong>GitHub:</strong> <a href="github.com/joaocavalcante" target="_blank" rel="noopener noreferrer">github.com/joaocavalcante</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Resumo Profissional</h2>
        <p>Sou um Desenvolvedor Full Stack apaixonado por transformar ideias em soluções inovadoras...</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Experiência Profissional</h2>
        <p>[Nome da Empresa] - Cidade, Estado</p>
        <p>Desenvolvedor Full Stack | [Data de Início] - [Data de Término]</p>
        <ul>
          <li>Contribuí para o desenvolvimento de soluções utilizando Laravel, Node.js, Adonis.js, React.js e React Native.</li>
          <li>Participação ativa na arquitetura e implementação de sistemas complexos.</li>
          <li>Colaboração efetiva com equipes multidisciplinares para alcançar objetivos de projeto.</li>
        </ul>
        <p>[Outra Empresa] - Cidade, Estado</p>
        <p>Estagiário em Desenvolvimento | [Data de Início] - [Data de Término]</p>
        <ul>
          <li>Desenvolvimento e manutenção de aplicações utilizando Django, Flask e Spring Boot.</li>
          <li>Integração de APIs e desenvolvimento de funcionalidades front-end em React.</li>
        </ul>
      </section>

      {/* Adicione outras seções conforme necessário */}
    </div>
  );
};

export default Portfolio;
