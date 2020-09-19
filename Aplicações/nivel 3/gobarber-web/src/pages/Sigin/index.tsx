import React from 'react'

import logoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';

import { Container, Content, Background } from './styles'

const SigIn: React.FC = () => (
 <Container>
   <Content>
    <img src={logoImg} alt="gobarber logo"/>

    <form>
      <input placeholder="E-Mail"/>
      <input type="password" placeholder="Senha"/>

      <button type="submit">Entrar</button>
      <a href="#a">Esqueci minha senha</a>
    </form>

    <a href="#a">
      <FiLogIn/>
      Criar Conta
      z</a>

   </Content>

   <Background />
 </Container>
);

export default SigIn
