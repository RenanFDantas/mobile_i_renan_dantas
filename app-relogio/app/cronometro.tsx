import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function TimerScreen() {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 80}}>00:00:00</Text>
      <Link href = "/">Ir para a tela inicial</Link>
      <Link href = "/relogio">Ir para relogio</Link>
    </View>
  );
}