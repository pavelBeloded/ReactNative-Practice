import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class ContactList extends Component {
    contacts = [
        {"id": 2, "first": "Carson", "last": "Gross", "phone": "123-456-7890", "email": "carson@example.com"},
        {"id": 3, "first": "Emily", "last": "Smith", "phone": "987-654-3210", "email": "emily.smith@example.com"},
        {"id": 5, "first": "Michael", "last": "Johnson", "phone": "555-123-4567", "email": "michael.j@example.com"},
        {"id": 6, "first": "Sophia", "last": "Williams", "phone": "555-987-6543", "email": "sophia.w@example.com"},
        {"id": 7, "first": "James", "last": "Brown", "phone": "444-222-3333", "email": "james.b@example.com"},
        {"id": 8, "first": "Olivia", "last": "Jones", "phone": "333-444-5555", "email": "olivia.j@example.com"},
        {"id": 9, "first": "Liam", "last": "Davis", "phone": "222-333-4444", "email": "liam.d@example.com"},
        {"id": 10, "first": "Isabella", "last": "Miller", "phone": "111-222-3333", "email": "isabella.m@example.com"}

    ]
    
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Contact List </Text>
        <ScrollView
        style={styles.container}
        horizontal={true}
        >
            {this.contacts.map(({id, first, last, phone, email})=>(
                <View key={id} style={[styles.userCard, styles.cardElevated]}>
                    <Text style={styles.userName}>{first + " " + last}</Text>
                    <Text style={styles.userPhone}>{phone}</Text>
                    <Text style={styles.userEmail}>{email}</Text>
                </View>
            ))}
        </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container:{
        marginBottom: 10,
    },
    userCard:{
        width: 250,
        padding: 10,
        backgroundColor: '#d9d9d9',
        borderRadius: 6,
        marginRight: 10,
        
    },
    cardElevated:{
        elevation: 4,
        shadowOffset: {
            width : 1,
            height: 1,
        },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    userName : {
        fontSize: 22,
        fontWeight: 500,
        marginBottom: 5,
    },
    userPhone : {
        fontSize: 16,
        fontWeight: 300,
    },
    userEmail: {
        fontSize: 16,
        fontWeight: 300,
    },
})
