import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { light_blue } from '../../../../config/colors_default'


export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.logoView}>
                    <Text style={styles.logo}>Doceterapia</Text>
                </View>
                <View style={styles.page}>
                    <Text>123</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerScroll:{
        flex: 1,
        backgroundColor: light_blue,
        width:"100%",
        marginHorizontal: 10,
    },
    logoView: {
        height: 120,
        alignItems: "center",
        justifyContent:"center",
    },
    logo: {
        fontSize: 32,
        color: "#F55790",
        fontFamily:"sans-serif-condensed"
    },
    page: {
        backgroundColor: "#CDE9ED",
        minHeight: 682,
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        alignItems:"center",
        paddingTop:30,
    }
});
