import { Text, View } from "react-native";
import { styles } from "./style";

export const ToolBar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Mega Sena</Text>
    </View>
  );
}