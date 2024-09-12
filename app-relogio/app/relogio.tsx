import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ClockScreen() {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 80}}>13:26</Text>
      <Link href = "/">Ir para a tela inicial</Link>
      <Link href = "/cronometro">Ir para cronometro</Link>
    </View>
  );
}