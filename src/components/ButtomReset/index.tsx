import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const ButtomReset = (props: any) => {

  return (
    <TouchableOpacity style={styles.bottom} onPress={() => props.setValuesChose([])}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}