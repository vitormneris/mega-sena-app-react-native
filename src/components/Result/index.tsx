import { Text, View } from "react-native";
import { styles } from "./style";
import { ShowNumbers } from "../ShowNumbers";
import { ButtomClose } from "../ButtomClose";

export const Result = (props: any) => {

  const compareList = (list1: number[], list2: number[]): string => {
    let count = list1.filter((item) => list2.includes(item)).length;
    
    switch(count) {
      case 0:
        return "Não marcou pontos, tente novamente!"
      case 1:
      case 2:
      case 3:
        return `Marcou ${count} ponto(s), tente novamente!`
      case 4:
        return "Parabéns, você marcou 4 pontos - quadra"
      case 5:
        return "Parabéns, você marcou 5 pontos - quina"
      case 6:
        return "Uau, meus parabéns, você marcou 6 pontos - sena "
      default:
        return "Houve um erro"
    }
  };

  return (
      <View style={styles.layout}>
        <View style={styles.container}>
            <Text style={styles.title}>RESULTADO</Text>
            <ShowNumbers
            title="Seu jogo"
            valuesChose={props.valuesChose} 
            backgroundColor="#0000ff55" 
            />
            <ShowNumbers 
            title="Números sorteados"
            valuesChose={props.drawnNumbers}
            backgroundColor="#ff000055" 
            />

            <Text style={styles.text}>{compareList(props.valuesChose, props.drawnNumbers)}</Text>

            <ButtomClose
                text="FECHAR" 
                state={props.state}
                setState={props.setState}
            />
        </View>
      </View>
  );
}