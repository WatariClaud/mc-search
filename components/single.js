import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import fetch from 'axios';

export default function Single({searchQuery}) {
    const [ single, setSingle ] = useState({});
    const fetchSingle = async() => {
        let request = await fetch('https://api.mixcloud.com/' + searchQuery);
        let response = request.data;
        setSingle(response);
    };
    const goTo = (url) => {
        Linking.openURL(url);
    };
    useEffect(() => {
        fetchSingle();
    }, [searchQuery]);
    return (
        single.key ? <TouchableOpacity style={styles.item} onPress={() => goTo(single.url)}>
            {
                single.pictures
                ?
                    <Image source={{ uri: single.pictures.medium }} style = {styles.image}/>
                : null
            }
            {
                single.name
                ?
                    <Text style = {{ fontSize: 22, marginVertical: 7 }}>{single.name}</Text>
                : null
            }
            {
                single.biog
                ?
                <Text style = {{ color: '#666' }}>{single.biog .length > 50 ?
                    single.biog.split(" ").splice(0, 50).join(" ") + '....\n'
                    :
                    single.biog + '\n'}</Text>
                : null
            }
            {
                single.city && single.country ?
                    <Text>Located in: {single.city}, {single.country} {'\n'}</Text>
                : null
            }
            <Text style = {{ color: '#666' }}>{single.follower_count} followers, {single.following_count} followers{'\n'}</Text>
            {
                single.is_pro
                ?
                <Text style = {{ color: 'green' }}>Pro {'\n'}</Text>
                :
                <Text style = {{ color: 'red' }}>Not Pro {'\n'}</Text>

            }
            <Text style = {{ color: '#999' }}>Signed up on: {single.created_time.split('T')[0]}</Text>
        </TouchableOpacity> : null
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 9,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 7,
        marginVertical: 10,
        marginHorizontal: 15
    },
    image: {
        width: 100,
        height: 100,
    },
    span: {
        color: '#888',
    }
  });