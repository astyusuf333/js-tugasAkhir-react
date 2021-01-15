import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import TambahAkun from '../pages/TambahAkun';
import DetailGame from '../pages/DetailGame';
import EditGame from '../pages/EditGame';

const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="TambahAkun" component={TambahAkun} options={{title : 'Tambah Akun Game'}}/>
        <Stack.Screen name="DetailGame" component={DetailGame} options={{title : 'Detail Informasi Game'}}/>
        <Stack.Screen name="EditGame" component={EditGame} options={{title : 'Edit Data Game'}}/>
      </Stack.Navigator>
    );
}

export default Router
