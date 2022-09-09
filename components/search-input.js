import { StyleSheet, View, TextInput } from 'react-native';

export default function SearchBar({changeText}) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder= 'Type to search'
                onChangeText={ changeText }
            />
        </View>
    );
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