import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Lightbulb, ArrowLeft, Heart } from 'lucide-react-native';

export default function Curiosidades({ navigation }) {
    const curiosidades = [
        {
            titulo: 'Gatos dormem bastante',
            texto: 'Gatos podem dormir entre 12 e 16 horas por dia. Filhotes e gatos idosos podem dormir ainda mais!',
        },
        {
            titulo: 'Eles ronronam por vários motivos',
            texto: 'O ronronar pode indicar conforto e satisfação, mas também pode acontecer quando o gato está assustado ou tentando se acalmar.',
        },
        {
            titulo: 'Os bigodes são muito importantes',
            texto: 'Os bigodes ajudam o gato a perceber o ambiente ao redor e avaliar se consegue passar por determinados espaços.',
        },
        {
            titulo: 'Gatos conseguem saltar alto',
            texto: 'Um gato saudável pode saltar várias vezes a altura do próprio corpo, usando principalmente a força das patas traseiras.',
        },
        {
            titulo: 'A língua dos gatos é diferente',
            texto: 'A língua possui pequenas estruturas ásperas que ajudam o gato a retirar pelos soltos e sujeiras durante a higiene.',
        },
    ];

    return (
        <View style={css.fundo}>
            <ScrollView contentContainerStyle={css.container}>

                <Pressable
                    style={css.voltar}
                    onPress={() => navigation.goBack()}
                >
                    <ArrowLeft color="#713F8C" size={24} />
                    <Text style={css.textoVoltar}>Voltar</Text>
                </Pressable>

                <View style={css.cabecalho}>
                    <Lightbulb color="#FFD700" size={42} />

                    <Text style={css.titulo}>
                        Curiosidades
                    </Text>

                    <Text style={css.subtitulo}>
                        Descubra coisas incríveis sobre os gatos!
                    </Text>
                </View>

                {curiosidades.map((curiosidade, index) => (
                    <View
                        key={index}
                        style={css.card}
                    >
                        <View style={css.tituloCard}>
                            <Heart
                                color="#B666D2"
                                size={22}
                                fill="#B666D2"
                            />

                            <Text style={css.tituloCuriosidade}>
                                {curiosidade.titulo}
                            </Text>
                        </View>

                        <Text style={css.textoCard}>
                            {curiosidade.texto}
                        </Text>
                    </View>
                ))}

                <View style={css.final}>
                    <Text style={css.textoFinal}>
                        Agora você já sabe um pouco mais sobre
                        o fascinante mundo dos gatos!
                    </Text>
                </View>

            </ScrollView>
        </View>
    );
}

const css = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#FFFDD0',
    },

    container: {
        padding: 20,
        paddingBottom: 40,
    },

    voltar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    textoVoltar: {
        color: '#713F8C',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },

    cabecalho: {
        alignItems: 'center',
        marginBottom: 25,
    },

    titulo: {
        color: '#B666D2',
        fontSize: 38,
        fontWeight: 'bold',
        marginTop: 8,
    },

    subtitulo: {
        color: '#555',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 18,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#D8A7E8',
        elevation: 4,
    },

    tituloCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    tituloCuriosidade: {
        flex: 1,
        color: '#713F8C',
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    textoCard: {
        color: '#555',
        fontSize: 15,
        lineHeight: 23,
    },

    final: {
        backgroundColor: '#B666D2',
        borderRadius: 15,
        padding: 18,
        marginTop: 5,
    },

    textoFinal: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 23,
    },
});
