import React, { useState } from 'react';
import styles from "./styles";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../components/BackButton';
import Item from './components/itens'
import Versao from '../../components/versao'
import { useNavigation } from '@react-navigation/native';
import ModalPerfil from './components/modal'
import ModalUpeMais from '../../components/Nivel_insuficiente';


export function Perfil() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [opcao, setOpcao] = useState(null);
    const [modificado, setModificado] = useState(false);

    const openModal = (opcao) => {
        setOpcao(opcao);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setOpcao(null);
    };

    const handleCloseModal = (modificado) => {
        setModificado(modificado);
    };

    const openModal2 = () => {
        setModalVisible1(true);
    };

    const closeModal2 = () => {
        setModalVisible1(false);
    };

    const handleBackPress = () => {
        if (modificado) {
            navigation.navigate('login');
        } else {
            navigation.goBack();
        }
    };


    return (
        <View style={styles.container}>
            
            <View style={styles.perfil}>
                <TouchableOpacity style={styles.imgBox} onPress={() => openModal2()}>
                    <Image source={require("../../Assets/imagem_usuario.png")} style={styles.imgBoxImage} resizeMode="cover" />
                </TouchableOpacity>
                <Text style={styles.Level}>Nível 01</Text>
                <Text style={styles.category}>Auxiliar de Cozinha</Text>
            </View>
            
            <TouchableOpacity style={styles.superiorEsquerdo}>
                <BackButton top={30} left={15} onPress={handleBackPress}/>
            </TouchableOpacity>

            <View style={styles.retanguloContainer}>
                <TouchableOpacity onPress={() => openModal("Meus Dados")}>
                    <Item espaço1={24} espaço2={4} imagem={require("./assets/dados.png")} texto="Meus Dados"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openModal("Notificações")}>
                    <Item espaço1={20} espaço2={3} imagem={require("./assets/notificacao.png")} texto="Notificações"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openModal("Central de Ajuda")}>
                    <Item espaço1={15} espaço2={0} imagem={require("./assets/ajuda.png")} texto="Central de Ajuda"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openModal("Termo de Uso")}>
                    <Item espaço1={8} espaço2={5} imagem={require("./assets/termo.png")} texto="Termo de Uso"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openModal("Sobre o App")}>
                    <Item espaço1={25} espaço2={11} imagem={require("./assets/sobre.png")} texto="Sobre o App"/>
                </TouchableOpacity>
            </View>

            <ModalPerfil visible={modalVisible} opcao={opcao} closeModal={closeModal} onClose={handleCloseModal}/>
            <ModalUpeMais visible={modalVisible1} closeModal={closeModal2}/>

            <Versao/>

        </View>
    );
}
