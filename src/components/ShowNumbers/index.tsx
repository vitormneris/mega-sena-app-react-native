import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export const ShowNumbers = (props: any) => {

  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.sectionCircle}>
        {props.valuesChose.map((value: Number) => (
            <View 
            key={String(value)} 
            style={[styles.circle, {backgroundColor: props.backgroundColor}]}
            >
                <Text>{String(value)}</Text>
            </View>
        ))}
      </View>
    </>
  );
}