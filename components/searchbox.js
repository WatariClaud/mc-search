import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from './search-input';
import SearchButton from './search-button';
// import Recents from './recents';

export default function SearchBox({navigation}) {
    const [ user, setUser ] = useState('');
    return (
        <View style = {styles.top}>
        <View style={styles.container}>
            <SearchBar changeText={text => setUser(text)}/>
            <SearchButton name={user} navigation = {navigation}/>
            <StatusBar style="auto" />
        </View>
        <View>
            {/* <Recents/>  will add later*/}
            {/* add dummy text here for ui */}
            <Text style = {styles.text}>
                You can search for users from the MixCloud API using this application.
            </Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 15,
      marginVertical: 10,
      justifyContent: "flex-start",
      flexDirection: "row",
      borderColor: '#888',
      borderWidth: 1,
      borderRadius: 11,
      width: 330,
      height: 50
    },
    top: {
      marginTop: 100,
      fontSize: '22',
    },
    text: {
        marginTop: 150,
        textAlign: 'center',
        padding: 40,
        fontSize: 22,
        color: 'orange',
        fontWeight: '800'
    }
  });