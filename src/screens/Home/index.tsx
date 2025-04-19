import { useState } from "react";

import { ScrollView, View } from "react-native";

import { styles } from "./style";

import { ToolBar } from "../../components/ToolBar";
import { NavBar } from "../../components/NavBar";
import { SectionCircle } from "../../components/SectionCircle";
import { ShowNumbers } from "../../components/ShowNumbers";
import { ButtomGenerator } from "../../components/ButtomGenerator";

import { RaffleGenerator } from "../../services/RaffleGenerator";
import { Result } from "../../components/Result";
import { ButtomReset } from "../../components/ButtomReset";

export default function Home() {
    const [valuesChose, setValuesChose] = useState<Number[]>([])
    const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false)

    const raffleGenerator: RaffleGenerator = new RaffleGenerator();

    const generateNumbers = () => {
        raffleGenerator.generateNumbers();
        setDrawnNumbers(raffleGenerator.getNumbers());
    };

    return (
        <View style={styles.container}>
            <ToolBar />
            <ScrollView style={styles.scrollview}>
                <View style={styles.align}>
                    <SectionCircle 
                    title="Selecione os 6 números"
                    setValuesChose={setValuesChose} 
                    valuesChose={valuesChose} 
                    />
                    <ShowNumbers
                    title="Números selecionados"
                    valuesChose={valuesChose} 
                    backgroundColor="#0000ff55" 
                    />
                    {valuesChose.length == 6 && 
                        <ButtomGenerator 
                        text="CONFIRMAR APOSTA" 
                        generate={generateNumbers} 
                        state={showResult}
                        setState={setShowResult}
                        />
                    }

                    {valuesChose.length >= 1 && 
                        <ButtomReset
                        text="RESETAR" 
                        setValuesChose={setValuesChose}
                        />
                    }

                    {showResult && 
                    <Result 
                    drawnNumbers={drawnNumbers}
                    valuesChose={valuesChose}
                    state={showResult}
                    setState={setShowResult}
                    />
                    }
                </View>
            </ScrollView>
            <NavBar />
        </View>
    );
}