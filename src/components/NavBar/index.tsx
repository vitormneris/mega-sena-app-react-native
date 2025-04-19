import { Text, View } from "react-native";
import { styles } from "./style";

export const NavBar = () => {
  return (
    <View style={styles.layout}>
        <View style={styles.container}>
          <Text style={styles.text}>Faça sua aposta</Text>
        </View>
    </View>
  );
}