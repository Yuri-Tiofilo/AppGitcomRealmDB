import React from 'react';
// import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Name, Description, Stats, Stat, StatCount} from './styles';

export default function Repository({data}) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
}
