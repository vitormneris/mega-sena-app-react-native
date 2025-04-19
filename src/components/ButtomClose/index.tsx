import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const ButtomClose = (props: any) => {

  return (
    <TouchableOpacity onPress={() => {props.setState(!props.state)}} style={styles.bottom}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}