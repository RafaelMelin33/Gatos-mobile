import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { Lightbulb, MessageCircleQuestionMark, Cat, Camera } from 'lucide-react-native';

export default function Home({ navigation }) {
    return (
        <View style={css.fundoHome}>
            <ScrollView contentContainerStyle={css.container}>

                <Text style={css.textoHome}>Gatinhos</Text>

                <Image
                    source={require('../assets/gato_preto_branco.jpg')}
                    style={css.img}
                />

                <Text style={css.subtitulo}>
                    Bem-vindo ao Mundo dos Gatos!
                </Text>

                <Text style={css.descricao}>
                    Descubra curiosidades, conheça diferentes raças
                    e veja imagens incríveis do mundo dos gatos!
                </Text>

                <View style={css.areaBotoes}>

                    <Pressable
                        style={css.botao}
                        onPress={() => navigation.navigate("Curiosidades")}
                    >
                        <Lightbulb color={'yellow'} size={30} width={40}/>
                        <Text style={css.textoBotao}>
                            Curiosidades
                        </Text>
                    </Pressable>

                    <Pressable
                        style={css.botao}
                        onPress={() => navigation.navigate("Especies")}
                    >
                        <Cat color={'yellow'} size={30} width={40}/>
                        <Text style={css.textoBotao}>
                            Espécies
                        </Text>
                    </Pressable>

                    <Pressable
                        style={css.botao}
                        onPress={() => navigation.navigate("Galeria")}
                    >
                        <Camera color={'yellow'} size={30} width={40}/>
                        <Text style={css.textoBotao}>
                            Galeria de Imagens
                        </Text>
                    </Pressable>

                </View>

                <View style={css.caixa}>
                    <View style={css.row}>
                        <MessageCircleQuestionMark color={'purple'} size={30} width={40}/>
                        <Text style={css.tituloCaixa}>
                            Você sabia?
                        </Text>
                    </View>

                    <Text style={css.textoCaixa}>
                        Os gatos passam boa parte do dia dormindo.
                        Alguns podem dormir entre 12 e 16 horas por dia!
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const css = StyleSheet.create({
    fundoHome: {
        flex: 1,
        backgroundColor: '#FFFDD0',
    },
    container: {
        alignItems: 'center',
        padding: 20,
        paddingBottom: 40,
    },
    textoHome: {
        fontSize: 45,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        color: '#B666D2',
        marginBottom: 15,
    },
    img: {
        width: 350,
        height: 300,
        borderRadius: 20,
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#713F8C',
        textAlign: 'center',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 17,
        color: '#555',
        textAlign: 'center',
        lineHeight: 25,
        marginBottom: 25,
    },
    areaBotoes: {
        width: '100%',
        gap: 12,
    },
    botao: {
        backgroundColor: '#B666D2',
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    icone: {
        fontSize: 25,
        marginRight: 10,
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    caixa: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 18,
        marginTop: 25,
        borderWidth: 2,
        borderColor: '#D8A7E8',
    },
    tituloCaixa: {
        color: '#713F8C',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    textoCaixa: {
        color: '#555',
        fontSize: 16,
        lineHeight: 23,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
    }
});