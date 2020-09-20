import React, { useCallback, useRef } from 'react'

import logoImg from '../../assets/logo.svg';
import {FiLogIn, FiLock, FiMail} from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationError'
import { Container, Content, Background } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FormHandles } from '@unform/core';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSumbit = useCallback( async (data: object) => {



    try{
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({

        email: Yup.string().required('E-mail é obrigatorio').email('Digite um e-mail valido'),
        password: Yup.string().required('Senha é obrigatoria')
      })

      await schema.validate(data, {
        abortEarly: false,
      });

    }catch (error){

      const errors = getValidationErrors(error)

      formRef.current?.setErrors(errors)
    }

  }, [])

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="gobarber logo"/>

        <Form ref={formRef} onSubmit={handleSumbit}>
        <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-Mail"/>
          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">Entrar</Button>
          <a href="#a">Esqueci minha senha</a>
        </Form>

        <a href="#a">
          <FiLogIn/>
          Criar Conta
          </a>

      </Content>

      <Background />
    </Container>
  );
}
export default SignIn
