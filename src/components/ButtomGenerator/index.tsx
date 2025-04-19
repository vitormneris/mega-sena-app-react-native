import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const ButtomGenerator = (props: any) => {

  return (
    <TouchableOpacity 
    onPress={() => {props.generate(); props.setState(!props.state)}} 
    style={styles.buttom}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}