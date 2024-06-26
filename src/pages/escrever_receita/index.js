import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./style";
import Coin from "../../components/Coin";
import PerfilComponent from "../../components/Perfil";
import Adicionar from "../../components/Button_adicionar";


export function Escrever_Receita() {
    const [search, setSearch] = React.useState('')

    const handleSearch = (text) => {
        setSearch(text);
      }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Coin />
                <PerfilComponent color={"#f2f2ec"} left={-80}/>
            </View>

            <View style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
                <TextInput style={styles.input} value={search} onChangeText={handleSearch} placeholder='Buscar Receita'/>
            </View>

            <View style={styles.receitaLista}>
                <Text style={{fontSize: 12, fontWeight: '700', color: '#3E4411'}}>SUAS RECEITAS</Text>
                <View style={styles.receitaUnid}>
                    <Image source={require('../../Assets/tortaHol.png')}/>
                    <View style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                        <View style={styles.receitaUnidRight}>
                            <View style={styles.orangeCircle}>
                                <Image source={require('../../Assets/littleHeart.png')}/>
                            </View>
                            <Text style={{fontSize: 15, fontWeight: '700', color: '#3E4411'}}>103</Text>
                        </View>
                        <View style={styles.receitaUnidRight}>
                            <View style={styles.orangeCircle}>
                                <View style={styles.comentBox}>
                                    <Image style={{height: 5, width: 8}} source={require('../../Assets/Order.png')}/>
                                </View>
                            </View>
                            <Text style={{fontSize: 15, fontWeight: '700', color: '#3E4411'}}>47</Text>
                        </View>
                    </View>
                </View>
                <Text style={{color: '#DF6127', fontSize: 12, fontWeight: '600', marginTop: -10}}>TORTA HOLANDESA</Text>
                <View style={styles.avaliacaoBox}>
                    <View style={styles.avaliacaoUnit}>
                        <Image source={require('../../Assets/Hat.png')}/>
                        <Text style={{color: '#3E4411', fontSize: 15, fontWeight: '700'}}>4,9</Text>
                    </View>
                    <View style={styles.avaliacaoUnit}>
                        <View style={styles.orangeCircle}>
                            <Image source={require('../../Assets/whiteClock.png')}/>
                        </View>
                        <Text style={{color: '#3E4411', fontSize: 15, fontWeight: '700'}}>1h</Text>
                    </View>
                    <View style={styles.avaliacaoUnit}>
                        <View style={styles.orangeCircle}>
                            <Image source={require('../../Assets/Bag.png')}/>
                        </View>
                        <Text style={{color: '#3E4411', fontSize: 15, fontWeight: '700'}}>7</Text>
                    </View>
                </View>
            </View>

            <Adicionar color={"#DF6127"} />
            
        </View>
    );
}