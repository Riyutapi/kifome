import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  Perfil  from '../Perfil';
import Coin from '../Coin';
import Menu from '../Menu';
import styles from "./style";
import But from '../Button';

export default function FirstScreen() {
    return (
      <View style={styles.mainBox}>
        <View style={styles.header}>
        <Perfil/>
        <Coin/>
        </View>
        <View style={styles.mainCircle}>
            <Text style={styles.addIngredient}>Adicione os ingredientes disponiveis em sua geladeira.
            </Text>
            <View style={styles.bigCircle}></View>
            <View style={styles.miniCircle}></View>
        <TouchableOpacity style={styles.addButton} title="Buscar">
                <Text style={styles.addTextButton}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>  
            <But/>
            <Menu/>
        </View>
      </View>
    );
  }
  