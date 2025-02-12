import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1A1A1D',
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#00FF00',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00FF00',
        textShadowColor: 'rgba(0, 255, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontFamily: 'sans-serif-condensed',
    },
});