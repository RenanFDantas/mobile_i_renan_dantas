import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 80}}>Tela inicial</Text>
      <Link href = "/relogio">Ir para relogio</Link>
      <Link href = "/cronometro">Ir para cronometro</Link>
    </View>
  );
}
