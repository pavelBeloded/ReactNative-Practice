import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FlatCards extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingtext}>Flat Cards</Text>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Green</Text>
                    </View>
                </View>
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
    container: {
        flexDirection: 'row',
        padding : 10,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 10,
    },
    cardOne: {
        backgroundColor: 'red'
    },
    cardTwo: {
        backgroundColor: 'blue'
    },
    cardThree: {
        backgroundColor: 'green'
    },
})

