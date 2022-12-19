import React, { useState } from "react"
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button"

import {
    d_dark_color1, d_color1, d_light_color1, d_more_light_color1,
    d_color2, d_light_color2, d_more_light_color2, d_dark_color2
} from "../../../config/colors_default"
import {
    two_dark_color1, two_color1, two_light_color1, two_more_light_color1,
    two_color2, two_light_color2, two_more_light_color2, two_dark_color2
} from "../../../config/colors_2"
import {
    three_dark_color1, three_color1, three_light_color1, three_more_light_color1,
    three_color2, three_light_color2, three_more_light_color2, three_dark_color2
} from "../../../config/colors_3"

import { font_family } from "../../../config/default"
import Icon from 'react-native-vector-icons/FontAwesome'

import Negocio from "../../services/Negocio"





export default function FindPalheta({ navigation, navigation: { goBack }, route }) {

    const [option, setOption] = useState(1)


    function changeOption(op) {
        setOption(op)
    }

    function save() {
        if (option == 1) {
            Negocio.create({
                nome: route.params.nome,
                dark_color1: d_dark_color1,
                color1: d_color1,
                light_color1: d_light_color1,
                more_light_color1: d_more_light_color1,
                dark_color2: d_color2,
                color2: d_light_color2,
                light_color2: d_more_light_color2,
                more_light_color2: d_dark_color2
            })
                .catch(err => console.log(err))
        } else if (option == 2) {
            Negocio.create({
                nome: route.params.nome,
                dark_color1: two_dark_color1,
                color1: two_color1,
                light_color1: two_light_color1,
                more_light_color1: two_more_light_color1,
                dark_color2: two_color2,
                color2: two_light_color2,
                light_color2: two_more_light_color2,
                more_light_color2: two_dark_color2
            })
                .catch(err => console.log(err))
        } else {
            Negocio.create({
                nome: route.params.nome,
                dark_color1: three_dark_color1,
                color1: three_color1,
                light_color1: three_light_color1,
                more_light_color1: three_more_light_color1,
                dark_color2: three_color2,
                color2: three_light_color2,
                light_color2: three_more_light_color2,
                more_light_color2: three_dark_color2
            })
                .catch(err => console.log(err))
        }


        navigation.navigate("Negocio")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewBack}>
                <View style={styles.buttonBack} onPress={() => { goBack() }}>
                    <Icon name="chevron-left" color="#fff" size={20} onPress={() => { goBack() }} />
                </View>
            </View>
            <View style={styles.viewConteudoTotal}>
                <View style={styles.viewConteudoBack}>
                    <View style={styles.viewConteudo}>
                        <Image
                            style={styles.img}
                            source={require('../../../img/sticks/thinking_cupcake.png')}
                        />
                        <Text style={styles.textInput}>Personalize seu sistema!</Text>
                        <Text style={styles.textInput2}>Selecione as cores que irão dar vida ao seu sistema</Text>
                        <View style={styles.viewPalhetas}>
                            <TouchableOpacity
                                onPress={() => {
                                    changeOption(1)
                                }}
                            >
                                <View style={[styles.palhetaTotal,
                                { borderColor: option == 1 ? d_color2 : "gray" },
                                { borderWidth: option == 1 ? 4 : 1 }]}>
                                    <View style={[styles.palheta, { backgroundColor: d_light_color1 }]} />
                                    <View style={[styles.palheta, { backgroundColor: d_color2, marginLeft: 10, }]} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    changeOption(2)
                                }}
                            >
                                <View style={[styles.palhetaTotal,
                                { borderColor: option == 2 ? d_color2 : "gray" },
                                { borderWidth: option == 2 ? 4 : 1 }]}>
                                    <View style={[styles.palheta, { backgroundColor: two_color1 }]} />
                                    <View style={[styles.palheta, { backgroundColor: two_color2, marginLeft: 10, }]} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    changeOption(3)
                                }}
                            >
                                <View style={[styles.palhetaTotal,
                                { borderColor: option == 3 ? d_color2 : "gray" },
                                { borderWidth: option == 3 ? 4 : 1 }]}>
                                    <View style={[styles.palheta, { backgroundColor: three_color1 }]} />
                                    <View style={[styles.palheta, { backgroundColor: three_color2, marginLeft: 10, }]} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.viewButtons}>

                <AwesomeButton
                    backgroundColor={d_color2}
                    backgroundDarker={d_dark_color2}
                    backgroundShadow="gray"
                    borderRadius={30}
                    width={350}
                    onPressOut={() => save()}
                >
                    <Text style={styles.textButton}>Salvar</Text>
                </AwesomeButton>

            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: d_light_color1
    },
    viewConteudoTotal: {
        width: "80%",
        height: "80%",
        justifyContent: "center",
    },
    viewConteudoBack: {
        backgroundColor: d_color2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    viewConteudo: {
        backgroundColor: d_light_color2,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 30,
        marginBottom: 5,
        borderColor: d_color2,
        borderWidth: 1,
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        marginTop: 40,
    },
    textInput: {
        fontWeight: "bold",
        fontSize: 22,
        fontFamily: font_family,
        color: d_color2,
        paddingTop: 25,
    },
    textInput2: {
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: font_family,
        color: d_color2,
        textAlign:"center"
    },
    viewPalhetas: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 40,
    },
    palhetaTotal: {
        flexDirection: "row",
        width: 200,
        height: 45,
        borderRadius: 10,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center"

    },
    palheta: {
        width: 30,
        height: 30,
        borderWidth: 0.3,
        borderRadius: 10,
    },
    viewButtons: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
    },
    viewBack: {
        justifyContent: "center",
        width: "100%",
        marginTop:40,
    },
    button: {
        backgroundColor: d_color2,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: font_family,
        color: "white",
    },
    buttonBack:{
        height:40,
        width:"15%",
        paddingLeft: 20,
        paddingTop:10
    }
});