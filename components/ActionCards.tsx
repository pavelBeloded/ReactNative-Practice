import React, { Component } from 'react'
import { Linking, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class ActionCards extends Component {

    openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ActionCards</Text>
        <View style={[styles.card, styles.ElevatatedCards]}>
            <Image
            source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-GyDNnD1MUqqKNulvTFQmRdS4Kj-VtsT-A&s'}}
            style={styles.cardImage}
            ></Image>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                What's new in JS
            </Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>JavaScript's latest update, ECMAScript 2023 (ES14), released in June 2023, brings several exciting features to enhance coding efficiency and capabilities. Here's a quick overview of what's new</Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.link}
                onPress={()=>{this.openWebsite('https://daily.dev/blog/javascript-latest-version-whats-new')}}
                >
                    <Text style={styles.linkText}>Read more</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}
                onPress={()=>{this.openWebsite('https://www.instagram.com/dddedmoroz/')}}
                >
                    <Text style={styles.linkText}>Follow me</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },

    ElevatatedCards: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset : {
          height: 1,
          width: 1,
        }
    },

    card : {
        flex: 1,
        height:350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },

    headerContainer :{
        paddingHorizontal: 10,
    },

    headerText: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 5,
    },

    cardImage: {
        height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    },

    bodyContainer:{
        paddingHorizontal: 10,
        marginTop: 5,
    },

    footerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    link : {
        backgroundColor: '#f59042',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 6,
    },
    
    linkText:{
        color: '#11021c',
    }
})

