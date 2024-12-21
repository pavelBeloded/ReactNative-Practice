import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class ElevatatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingtext}> Elevatated Cards </Text>

        <ScrollView horizontal={true} style={styles.container}>

            <View style = {[styles.card, styles.cardElevated]}>
                <Text style={styles.cardText}>Tap</Text>
            </View>

            <View style = {[styles.card, styles.cardElevated]}>
                <Text style={styles.cardText}>me</Text>
            </View>

            <View style = {[styles.card, styles.cardElevated]}>
                <Text style={styles.cardText}>to</Text>
            </View>

            <View style = {[styles.card, styles.cardElevated]}>
                <Text style={styles.cardText}>more</Text>
            </View>
            
            <View style = {[styles.card, styles.cardElevated]}>
                <Text style={styles.cardText}>info</Text>
            </View>

        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    container : {
        padding: 8,
    },
    
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        marginRight: 8,
    },

    cardElevated:{
        backgroundColor: '#2e2e2e',
        elevation: 4,
        shadowOffset: {
            width : 1,
            height: 1,
        },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },

    cardText : {
        color: "#fff",
    }
})

