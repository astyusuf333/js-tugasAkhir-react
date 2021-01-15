import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const CardGame = ({id, gameItem, navigation, removeData}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailGame', {id : id})}>
            <View>
                <Text style={styles.akun}>{gameItem.akun}</Text>
                <Text style={styles.char}>Nickname : {gameItem.char}</Text>
                <Text style={styles.level}>Level : {gameItem.level}</Text>
            </View>
            <View style={styles.icon}>
                <FontAwesomeIcon icon={faEdit} color={'orange'} size={21} onPress={() => navigation.navigate('EditGame', {id : id})}/>
                <FontAwesomeIcon icon={faTimes} color={'red'} size={21} onPress={() => removeData(id)}/>
            </View>
        </TouchableOpacity>
    )
}

export default CardGame

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        padding : 15,
        backgroundColor : 'white',
        borderRadius : 5,
        marginBottom : 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    akun : {
        fontWeight : 'bold',
        fontSize : 16
    },
    char : {
        fontSize : 12,
        color : 'gray'
    },
    level : {
        fontSize : 12,
        color : 'gray'
    },
    icon : {
        flexDirection : 'row',
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'center'
    }
})
