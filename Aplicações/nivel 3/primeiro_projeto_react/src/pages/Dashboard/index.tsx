import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59992334?s=460&u=63c6ba8a7b70781fce6c4bbdf6831df5ec450ebd&v=4"
            alt="maths"
          />
          <div>
            <strong>maths032/apontamento-horas-php</strong>
            <p>Primeiro projeto feito 100% por mim.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59992334?s=460&u=63c6ba8a7b70781fce6c4bbdf6831df5ec450ebd&v=4"
            alt="maths"
          />
          <div>
            <strong>maths032/apontamento-horas-php</strong>
            <p>Primeiro projeto feito 100% por mim.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59992334?s=460&u=63c6ba8a7b70781fce6c4bbdf6831df5ec450ebd&v=4"
            alt="maths"
          />
          <div>
            <strong>maths032/apontamento-horas-php</strong>
            <p>Primeiro projeto feito 100% por mim.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59992334?s=460&u=63c6ba8a7b70781fce6c4bbdf6831df5ec450ebd&v=4"
            alt="maths"
          />
          <div>
            <strong>maths032/apontamento-horas-php</strong>
            <p>Primeiro projeto feito 100% por mim.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
