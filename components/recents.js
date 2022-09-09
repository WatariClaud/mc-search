import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Recents() {
  return (
    <View style={styles.container}>
        <Text style = {{ color: '#888' }}>Your recent searches appear here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        height: 200,
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 11,
        padding: 7
    },
  });