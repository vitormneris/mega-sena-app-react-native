import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export const SectionCircle = (props: any) => {
  const items = Array.from({ length: 60 }, (_, index) => index + 1);

  const addItem = (item: Number) => {
      if (props.valuesChose.length >= 6) {
          Alert.alert("Atenção", "Limite de até 6 números atingido!")
      } else if (props.valuesChose.filter((value: Number) => value == item) > 1) {
          Alert.alert("Atenção", "Você já escolheu esse número!")
      } else {
          props.setValuesChose([...props.valuesChose, item])
      }
  }

  const removeItem = (item: number) => {
      props.setValuesChose(props.valuesChose.filter((value: number) => value != item))
  }

  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.sectionCircle}>
          {items.map((item) => (
              <TouchableOpacity 
                key={item}
                style={[styles.circle, {backgroundColor: props.valuesChose.includes(item) ? "#0000ff55" : "#00ff0055"}]}
                onPress={() => { 
                  if (props.valuesChose.includes(item)) {
                    removeItem(item)
                  } else {
                    addItem(item)
                  }
                }}
                >
                  <Text>{item}</Text>
              </TouchableOpacity>
          ))}
      </View>
    </>
  );
}