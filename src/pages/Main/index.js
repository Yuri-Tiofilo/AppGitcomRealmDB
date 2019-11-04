import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Title, Form, Input, Submit, List} from './styles';
import Repository from '~/components/Repository';

export default function Main() {
  const [input, setInput] = useState('');

  function handleAddRepository() {
    console.log('entou');
  }

  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório"
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#ffff" />
        </Submit>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'unform',
            description:
              'ReactJS form library to create uncontrolled form structures with nested fields, validations and much more!',
            stars: 1234,
            forks: 133,
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Repository data={item} />}
      />
    </Container>
  );
}
