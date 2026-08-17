import { View, Text, StyleSheet, Button } from "react-native";

export default function Contato({ navigation }){
    return(
        <View style={css.fundoContato}>
            <Text style={css.textoContato}>Estou no CONTATO</Text>
            <Button 
                title="Ir para Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

const css = StyleSheet.create({
    fundoContato:{
        flex:1,
    },
    textoContato:{
        fontSize:50,
        width:'100%',
        textAlign:'center',
    }
})