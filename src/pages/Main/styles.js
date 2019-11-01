import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#9b49c1'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  padding: 0 20px;
`;

export const Form = styled.View``;

export const Input = styled.TextInput``;

export const Submit = styled.TouchableOpacity``;
