import React from 'react';
import {Container, Title, Form, Input, Submit} from './styles';
import Icon from 'react-native-vector-icons';

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procure um Repositório"
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>
    </Container>
  );
}
