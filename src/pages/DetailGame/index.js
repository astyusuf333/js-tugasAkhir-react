import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Firebase from '../../config/Firebase'

export default class DetailGame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Game : {}
        }
    }

    componentDidMount(){
        Firebase.database()
            .ref('game/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
              let data = querySnapShot.val() ?  querySnapShot.val() : {};
              let gameItem = {...data};

              this.setState({
                  Game: gameItem
              })

            })
     }
    
    render() {
        const {Game} = this.state;
        return (
            <View style={styles.pages}>
                <Text>Akun Game : </Text>
                <Text style={styles.text}>{Game.akun}</Text>
                <Text>Id Akun : </Text>
                <Text style={styles.text}>{Game.id}</Text>
                <Text>Nickname : </Text>
                <Text style={styles.text}>{Game.char}</Text>
                <Text>Level : </Text>
                <Text style={styles.text}>{Game.level}</Text>
                <Text>Deskripsi Char : </Text>
                <Text style={styles.text}>{Game.deskripsi}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages : {
        padding : 20,
        margin : 30,
        backgroundColor : 'white',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text : {
        fontSize : 16,
        fontWeight : 'bold',
        marginBottom : 10
    }
})
