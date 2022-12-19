import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import AwesomeButton from "react-native-really-awesome-button"
import '../../services/Negocio'
import { d_light_color1, d_light_color2, d_color2, d_dark_color2 } from '../../../config/colors_default'
import { font_family } from '../../../config/default'

import Negocio from '../../services/Negocio'

export default function FindNome({ navigation, route }) {

    useEffect(() => {
        verifyUser()
    }, [])

    function verifyUser(){

        Negocio.empty()
        .then(negocios => setHasNegocio(negocios))
        .catch( err => setHasNegocio(err))

        if(hasNegocio){
            console.log(hasNegocio)
        } else {
            console.log("Nao tem!")
        }

        Negocio.all()
        .then(
            negocios => negocios.forEach(element => {
                console.log(element)
            })
        )
        
    }

    const [nome, setNome] = useState("")
    const [hasNome, setHasNome] = useState(false)
    const [hasNegocio, setHasNegocio] = useState(null)

    function modify(nome) {
        setNome(nome)
        if (nome !== "") {
            setHasNome(true)
        } else {
            setHasNome(false)
        }
    }

    function Continue(){
        navigation.navigate("Escolher palheta", {
            nome: nome
        })
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewConteudoTotal}>
                <View style={styles.viewConteudoBack}>
                    <View style={styles.viewConteudo}>
                        <Image
                            style={styles.img}
                            source={require('../../../img/sticks/happy_cupcake.png')}
                        />
                        <Text style={styles.textInput}>Qual o nome do seu negócio?</Text>
                        <View style={styles.inputBack}>
                            <View style={styles.input}>
                                <TextInput placeholder='Ex: Doceterapia' value={nome} onChangeText={val => modify(val)} />
                            </View>
                        </View>
                    </View>
                </View>


            </View>
            {!hasNome
                ?
                <AwesomeButton
                    backgroundColor={d_light_color2}
                    backgroundDarker={"gray"}
                    backgroundShadow="gray"
                    borderRadius={30}
                    width={350}
                    disabled={true}
                >
                    <Text style={styles.textButton}>Continuar</Text>
                </AwesomeButton>
                :
                <AwesomeButton
                    backgroundColor={d_color2}
                    backgroundDarker={d_dark_color2}
                    backgroundShadow="gray"
                    borderRadius={30}
                    width={350}
                    onPressOut={() => Continue()}
                    >
                    <Text style={styles.textButton}>Continuar</Text>
                </AwesomeButton>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: d_light_color1
    },
    viewConteudoTotal: {
        width: "80%",
        height: "83%",
        justifyContent: "center",
    },
    viewConteudoBack: {
        backgroundColor:d_color2,
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
        borderColor:d_color2,
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
        fontSize: 20,
        fontFamily: font_family,
        color:d_color2,
        paddingTop: 25,
    },
    inputBack: {
        height: 50,
        width: "80%",
        backgroundColor: "gray",
        marginTop: 10,
        marginBottom: 50,
        borderRadius: 10,
    },
    input: {
        backgroundColor: "white",
        height: "94%",
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor:d_color2,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: font_family,
        color: "white",
    }
});
