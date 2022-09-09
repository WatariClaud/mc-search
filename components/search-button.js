import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

export default function SearchButton({navigation, name}) {
    const getResults = async(searchQuery) => {
        if(!searchQuery) return alert('Cannot parse empty query');
        return navigation.navigate('Search Results', { searchQuery });
    }
    return (
        <TouchableOpacity
        onPress={() => getResults(name)}
        style={styles.button}>
        <Feather
            name="search"
            size={20}
            color="#888"
        />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        color: '#888',
        fontSize: 18,
        padding: 13,
        borderColor: '#888',
        position: 'absolute',
        right: 0, 
    },
  });