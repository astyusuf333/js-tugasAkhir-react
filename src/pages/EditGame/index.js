import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { InputData } from '../../components';
import Firebase from '../../config/Firebase';

export default class EditGame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             akun: (''),
             id: (''),
             char: (''),
             level: (''),
             deskripsi: ('')
        };
    }

    componentDidMount(){
        Firebase.database()
            .ref('game/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
              let data = querySnapShot.val() ?  querySnapShot.val() : {};
              let gameItem = {...data};

              this.setState({
                  akun : gameItem.akun,
                  id : gameItem.id,
                  char : gameItem.char,
                  level : gameItem.level,
                  deskripsi : gameItem.deskripsi
              })

            })
     }

    onChangeText = (namaState, value) => {
        this.setState({
            [namaState] : value
        });
    }

    onSubmit = () => {
        if(this.state.akun && this.state.id && this.state.char && this.state.level && this.state.deskripsi){
            const gameReferensi = Firebase.database().ref('game/' + this.props.route.params.id);
            const game = {
                akun : this.state.akun,
                id : this.state.id,
                char : this.state.char,
                level : this.state.level,
                deskripsi : this.state.deskripsi
            }

            gameReferensi
                .update(game)
                .then((data) => {
                    Alert.alert('Succes', 'Data berhasil terupdate');
                    this.props.navigation.replace('Home');
                })
                .catch((error) => {
                    console.log("Error : ", error);
                })
            
        }else{
            Alert.alert('Error', 'Silakan isi Data dengan Benar');
        }
    };
    


    render() {
        return (
            <View style={styles.pages}>
                <InputData label="Nama Akun" placeholder="Masukkan Nama Akun" onChangeText={this.onChangeText} value={this.state.akun} namaState="akun"/>
                <InputData label="No Id" placeholder="Masukkan Id Akun" keyboardType="number-pad" onChangeText={this.onChangeText} value={this.state.id} namaState="id"/>
                <InputData label="Nama Char" placeholder="Masukkan Nama Char" onChangeText={this.onChangeText} value={this.state.char} namaState="char"/>
                <InputData label="Level" placeholder="Masukkan Level Char" keyboardType="number-pad" onChangeText={this.onChangeText} value={this.state.level} namaState="level"/>
                <InputData label="Deskripsi Akun" placeholder="Masukkan Deskripsi Akun" isTextArea={true} onChangeText={this.onChangeText} value={this.state.deskripsi} namaState="deskripsi"/>
                <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
                    <Text style={styles.textTombol}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pages :{
        flex : 1,
        padding : 30
    },
    tombol :{
        backgroundColor: 'black',
        padding : 10,
        borderRadius : 5,
        marginTop : 10
    },
    textTombol :{
        color: 'white',
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 16
    }
    
});
 