import React from 'react'

import logoImg from '../../assets/logo.svg';
import {FiLock, FiMail, FiArrowLeft, FiUser} from 'react-icons/fi';

import { Container, Content, Background } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Form } from "@unform/web";

const SingUp: React.FC = () => {
  function handleSumbit(data: object): void {
    console.log(data);

  }
 return (
 <Container>
<Background />
   <Content>
    <img src={logoImg} alt="gobarber logo"/>

    <Form  onSubmit={handleSumbit}>
     <h1>Faça seu cadastro</h1>

     <Input name="name" icon={FiUser} placeholder="Nome"/>
      <Input name="email" icon={FiMail} placeholder="E-Mail"/>
      <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

      <Button type="submit">Cadastrar</Button>

    </Form>

    <a href="#a">
      <FiArrowLeft/>
      Voltar para Logon
      </a>

   </Content>

 </Container>
 )
};

export default SingUp
