import { useState, useEffect } from 'react';
import fetch from 'axios';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Single from './single';

export default function Results({navigation, route}) {
    const [ data, setData ] = useState([]);
    const fetchAll = async(searchQuery) => {
        let request = await fetch('https://api.mixcloud.com/search/?q=' + searchQuery + '&type=user');
        let response = request.data.data;
        setData(response);
    };
    const renderSingle = ({item}) => (
        <Single searchQuery = { item.username }/>
    );
    useEffect(() => {
        fetchAll(route.params.searchQuery);
    }, [route]);
    return <SafeAreaView style = {{ marginTop: 30 }}>
        {
        data.length > 0 ?
        <FlatList data={data} renderItem = {renderSingle} keyExtractor = {item => item.username}/>
        : 
        <Text style = {{ margin: 15, fontSize: 22 }}>Checking...</Text>
    }
    </SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "80%", 
    },
    input: {
        color: '#888',
        fontSize: 18,
        padding: 7,
        width: '100%',
        height: 40,
    },
  });