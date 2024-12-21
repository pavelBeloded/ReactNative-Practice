import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>
          Trending image</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s'}}
          style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Card example</Text>
            <Text style={styles.cardSubtitle}>Lorem ipsum dolor sit.</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti ipsa libero dignissimos placeat est enim nihil quo quisquam velit!</Text>
            <Text style={styles.cardFooter}>20 min away</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default FancyCard

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
},
  card:{
    flex: 1,
    height:350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
      backgroundColor: '#fff',
      elevation: 3,
      shadowOffset : {
        height: 1,
        width: 1,
      }
  },
  cardImage : {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody : {
    paddingHorizontal: 10,
  },
  cardTitle : {
    fontSize: 18,
    fontWeight: '500',
  },
  cardSubtitle:{
    fontSize: 14,
    fontWeight: '300',
  },
  cardDescription : {
    marginTop: 10,
    fontSize: 12,
    marginBottom: 16,
    flexShrink:1,
  },
  cardFooter : {

  }

})