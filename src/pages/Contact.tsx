import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer'; // Importando o Footer separado

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  margin-top: 70px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
  min-height: 150px;
  width: 100%;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #ffcc00;
  color: #343434;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #ffcc00;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  margin-top: 1rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
  };

  return (
    <>
    <ContactContainer>
      <Title>Entre em Contato</Title>
      <Paragraph>
        Ficaremos felizes em ouvir você! Preencha o formulário abaixo e responderemos o mais rápido possível.
      </Paragraph>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu Nome"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu E-mail"
          required
        />
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Sua Mensagem"
          required
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </ContactContainer>
    <Footer />
    </>
  );
};

export default Contact;
