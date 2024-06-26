import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        backgroundColor: '#d1d3c1',
        height: 100 + '%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        top: 5,
        marginHorizontal: 20,
    },
    input: {
        width: 331,
        backgroundColor: '#fff',
        height: 30,
        fontSize: 13,
        fontWeight: '500',
        color: '#AFB297',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 30,
    },
    receitaUnid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginLeft: 65,
    },
    orangeCircle:{
        height:20,
        width: 20,
        backgroundColor: '#DF6127',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    receitaLista:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
        gap: 10,
        width: 100 + '%',
    },
    receitaUnidRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    comentBox: {
        width: 16,
        height: 11,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avaliacaoBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingBottom: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: '#3E4411',
    },
    avaliacaoUnit: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
});

export default styles;