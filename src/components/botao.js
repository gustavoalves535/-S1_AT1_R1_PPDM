import { Text, View, TouchableOpacity } from 'react-native';
import { styless } from '../styles/stylessButton.js';

export default function botaoComponents() {


  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <TouchableOpacity style={[styless.button, styless.login]} activeOpacity={0.6}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
