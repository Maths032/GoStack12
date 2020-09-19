import React from 'react'

import logoImg from '../../assets/logo.svg';
import {FiLogIn, FiLock, FiMail} from 'react-icons/fi';

import { Container, Content, Background } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';

const SigIn: React.FC = () => (
 <Container>
   <Content>
    <img src={logoImg} alt="gobarber logo"/>

    <form>
     <h1>Faça seu logon</h1>

      <Input name="email" icon={FiMail} placeholder="E-Mail"/>
      <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

      <Button type="submit">Entrar</Button>
      <a href="#a">Esqueci minha senha</a>
    </form>

    <a href="#a">
      <FiLogIn/>
      Criar Conta
      </a>

   </Content>

   <Background />
 </Container>
);

export default SigIn
