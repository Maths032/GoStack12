import React, {useCallback, useRef, useContext} from 'react'

import logoImg from '../../assets/logo.svg';
import {FiLock, FiMail, FiArrowLeft, FiUser} from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationError'


import AuthContext from '../../context/AuthContext';
import { Container, Content, Background } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from "yup";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
    const {name} = useContext(AuthContext);



  const handleSumbit = useCallback( async (data: object) => {

    try{
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatorio'),
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
<Background />
   <Content>
    <img src={logoImg} alt="gobarber logo"/>

    <Form  ref={formRef} onSubmit={handleSumbit}>
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
