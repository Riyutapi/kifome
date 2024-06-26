import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        height: 50,
        width: 180,
        backgroundColor: 'rgb(222, 96, 38)',
        borderRadius: 40,
        justifyContent: 'center',
        elevation: 5,
        zIndex: 1,
    },
    
    textButton: {
        color:"#fff",
        fontWeight: '800',
        fontSize: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
    }
})

export default styles;