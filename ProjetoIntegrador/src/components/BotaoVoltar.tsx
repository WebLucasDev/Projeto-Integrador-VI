import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { useRouter } from 'expo-router';

const BotaoVoltar = () => {

    /* Função para retornar para a tela anterior */
    const [isEnabled, setIsEnabled] = useState(false);
    const rota = useRouter();
    const voltarTelaAnterior = () => {
        setIsEnabled((previousState) => !previousState);
        if (!isEnabled) {
            rota.back();
        }
    };

    return (

    <TouchableOpacity style={styles.botaoVoltar} onPress={voltarTelaAnterior}>
        <Ionicons name="arrow-back" size={28} color='#FFF'/>
    </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({
    
    botaoVoltar:{
        backgroundColor:'#474747',
        width:'8%',
        right:'40%',
        borderRadius:'4%',
        alignItems:'center'
    }
})

export default BotaoVoltar