import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ArrowLeft, Cat } from 'lucide-react-native';

export default function Especies({ navigation }) {

    const gatos = [
        {
            nome: 'Persa',
            // imagem: require('../assets/gato_persa.jpg'),
            descricao:
                'O Persa é conhecido por seus pelos longos, rosto característico e comportamento geralmente tranquilo e carinhoso.',
        },

        {
            nome: 'Siamês',
            // imagem: require('../assets/gato_siames.jpg'),
            descricao:
                'O Siamês possui aparência elegante, olhos azuis e costuma ser bastante comunicativo e apegado aos seus tutores.',
        },

        {
            nome: 'Maine Coon',
            // imagem: require('../assets/gato_maine_coon.jpg'),
            descricao:
                'O Maine Coon é uma das maiores raças domésticas de gatos. Possui pelos longos e uma personalidade geralmente amigável.',
        },

        {
            nome: 'Bengal',
            // imagem: require('../assets/gato_bengal.jpg'),
            descricao:
                'O Bengal possui uma pelagem que lembra a de felinos selvagens. É conhecido por ser ativo, curioso e brincalhão.',
        },

        {
            nome: 'Ragdoll',
            // imagem: require('../assets/gato_ragdoll.jpg'),
            descricao:
                'O Ragdoll é conhecido por sua aparência elegante, olhos azuis e comportamento tranquilo e afetuoso.',
        },

        {
            nome: 'British Shorthair',
            // imagem: require('../assets/gato_british.jpg'),
            descricao:
                'O British Shorthair possui corpo robusto, pelagem curta e uma personalidade tranquila e independente.',
        },
    ];

    return (
        <View style={css.fundo}>

            <ScrollView contentContainerStyle={css.container}>

                <Pressable
                    style={css.voltar}
                    onPress={() => navigation.goBack()}
                >
                    <ArrowLeft
                        color="#713F8C"
                        size={24}
                    />

                    <Text style={css.textoVoltar}>
                        Voltar
                    </Text>
                </Pressable>

                <View style={css.cabecalho}>

                    <Cat
                        color="#B666D2"
                        size={45}
                    />

                    <Text style={css.titulo}>
                        Espécies
                    </Text>

                    <Text style={css.subtitulo}>
                        Conheça algumas raças incríveis de gatos!
                    </Text>

                </View>

                <View style={css.lista}>

                    {gatos.map((gato, index) => (

                        <View
                            key={index}
                            style={css.card}
                        >

                            <Image
                                source={gato.imagem}
                                style={css.imagem}
                            />

                            <View style={css.informacoes}>

                                <Text style={css.nome}>
                                    {gato.nome}
                                </Text>

                                <Text style={css.descricao}>
                                    {gato.descricao}
                                </Text>

                            </View>

                        </View>

                    ))}

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

    lista: {
        gap: 18,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 5,
        borderWidth: 2,
        borderColor: '#D8A7E8',
    },

    imagem: {
        width: '100%',
        height: 220,
    },

    informacoes: {
        padding: 18,
    },

    nome: {
        color: '#713F8C',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    descricao: {
        color: '#555',
        fontSize: 15,
        lineHeight: 23,
    },

});
