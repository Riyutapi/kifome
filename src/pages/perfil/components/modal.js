import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Linking, Switch } from 'react-native';

export default function ModalPerfil({ visible, opcao, closeModal }) {
    const sobre = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{textAlign: 'justify'}}> O KiFome é o resultado de um projeto inovador desenvolvido por um grupo de estudantes universitários comprometidos com a criação de soluções práticas e sustentáveis para o dia a dia.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>Idealizado por Diego Oliveira Rebouças, Felipe Castelo Hernandes, Isabella Nepomucena dos Santos, Lincon da Silva Ferreira, Ricardo Yudi Takahashi Pimentel, Rita de Cássia dos Santos Lopes e Vitor Hugo Navarro Libano, com menção honrosa para Gustavo Junior dos Santos, este aplicativo culinário surge como uma resposta às necessidades contemporâneas de uma alimentação mais consciente e acessível.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>Partindo da premissa de que a tecnologia pode ser uma aliada na busca por um estilo de vida mais sustentável, o KiFome foi concebido para facilitar a preparação de refeições utilizando apenas os ingredientes disponíveis nas casas dos usuários. Esta abordagem não apenas reduz o desperdício de alimentos, mas também torna a culinária mais inclusiva e econômica.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>A iniciativa dos autores do KiFome vai além de oferecer uma simples coleção de receitas. O aplicativo visa criar uma comunidade engajada em compartilhar experiências, avaliações e dicas culinárias, promovendo uma cultura de colaboração e aprendizado mútuo.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>Com a implementação planejada de uma Inteligência Artificial treinada com as melhores receitas, o KiFome está preparado para revolucionar a maneira como as pessoas cozinham em casa. Os usuários terão acesso a um vasto repertório de pratos de qualidade, além de dicas personalizadas para aprimorar suas habilidades culinárias.</Text>
            <Text style={{paddingTop: 5, textAlign: 'justify'}}>O KiFome é mais do que um aplicativo culinário; é uma ferramenta que combina tradição e inovação, tornando a arte da culinária mais acessível, prazerosa e, acima de tudo, sustentável no século XXI.</Text>
        </ScrollView>
    );

    const termo = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{ fontWeight:'bold' }}> 1. Aceitação dos Termos de Uso:</Text>
            <Text style={{ textAlign: 'justify' }}>Ao acessar ou utilizar o aplicativo KiFome, você concorda em cumprir estes Termos de Uso, bem como todas as políticas e diretrizes incorporadas por referência. Se você não concordar com estes Termos de Uso, não utilize o aplicativo KiFome.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 2. Cadastro e Conta de Usuário:</Text>
            <Text style={{ textAlign: 'justify'}}>Para acessar determinadas funcionalidades do KiFome, você pode ser solicitado a criar uma conta de usuário. Ao se cadastrar, você concorda em fornecer informações precisas, completas e atualizadas, e em manter a confidencialidade de suas credenciais de login.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 3. Uso do Aplicativo:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome destina-se ao uso pessoal e não comercial. Você concorda em usar o aplicativo apenas para os fins permitidos por estes Termos de Uso e todas as leis, regras e regulamentos aplicáveis.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 4. Sistema de Recompensas e Moedas Virtuais:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome oferece um sistema de recompensas e moedas virtuais para incentivar a interação dos usuários. Ao participar do sistema de recompensas, você concorda em seguir as diretrizes estabelecidas pelo aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 5. Grupo Temáticos e Interação:</Text>
            <Text style={{ textAlign: 'justify'}}>Os usuários podem criar e participar de grupos temáticos no KiFome para compartilhar receitas e dicas culinárias. Ao interagir em grupos, você concorda em respeitar as normas de conduta estabelecidas pelo aplicativo e pela comunidade.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 6. Receitas Premium e Monetização:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome oferece receitas premium e opções de assinatura para melhorar a experiência do usuário. Ao acessar conteúdo premium, você concorda em cumprir os termos de pagamento e as políticas de assinatura do aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 7. Feedback e Atualizações:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome valoriza o feedback dos usuários para melhorar continuamente a plataforma. Ao enviar feedback, você concede ao KiFome o direito de usar suas sugestões para aprimorar o aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 8. Propriedade Intelectual:</Text>
            <Text style={{ textAlign: 'justify'}}>Todos os direitos de propriedade intelectual relacionados ao KiFome pertencem aos seus desenvolvedores. Você concorda em respeitar todos os direitos autorais, marcas registradas e outros direitos de propriedade intelectual associados ao aplicativo.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 9. Alterações nos Termos de Uso:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento, sem aviso prévio. O uso contínuo do aplicativo após tais alterações constitui sua aceitação dos Termos de Uso revisados.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 10. Conduta dos Usuários:</Text>
            <Text style={{ textAlign: 'justify'}}>O usuário concorda que não irá publicar conteúdo ofensivo, incluindo, mas não se limitando a, fotos no perfil ou em receitas, comentários, mensagens ou qualquer outra forma de comunicação que seja difamatória, obscena, pornográfica, racialmente, etnicamente ou de outra forma objetável.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 11. Encerramento da Conta:</Text>
            <Text style={{ textAlign: 'justify'}}>O KiFome pode encerrar ou suspender sua conta, ou restringir seu acesso ao aplicativo, se você violar estes Termos de Uso ou se o aplicativo não estiver mais disponível.</Text>
            <Text style={{ fontWeight:'100', fontSize: 2 }}> 12. Venda da Alma:</Text>
            <Text style={{ fontWeight:'100', fontSize: 2, textAlign: 'justify'}}>O usuário ao concordar com esse termo de uso terá a alma sobre a posse dos desevolvedores do aplicativo.</Text>
        </ScrollView>
    );

    const handleEmailClick = () => {
        const email = 'contato@kifome.com.br';
        const url = `mailto:${email}`;
        Linking.openURL(url);
    };

    const central = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <Text style={{ fontWeight:'bold', textAlign: 'center' }}>Perguntas Frequentes (FAQ)</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 1. Como funciona o filtro de receitas?</Text>
            <Text style={{ textAlign: 'justify' }}>O filtro de receitas permite aos usuários encontrar receitas adequadas com base nos ingredientes que já possuem em casa. Os usuários podem adicionar esses ingredientes à sua “geladeira virtual” e o filtro mostrará apenas as receitas que podem ser feitas com eles.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 2. Posso compartilhar minhas próprias receitas no KiFome?</Text>
            <Text style={{ textAlign: 'justify'}}>Sim, os usuários podem compartilhar suas próprias receitas, para fazer isso, basta acessar a função de envio de receitas no aplicativo e preencher as informações necessárias, como os ingredientes, as instruções de preparo e, opcionalmente, adicionar fotos. Depois de enviar a receita, ela será revisada pela equipe do KiFome antes de ser disponibilizada para outros usuários. Compartilhar suas próprias receitas é uma ótima maneira de contribuir para a comunidade do KiFome e ajudar outros usuários a descobrir novos pratos.</Text>
            <Text style={{ fontWeight:'bold' }}> 3. Como funcionam os níveis e recompensas do aplicativo?</Text>
            <Text style={{ textAlign: 'justify'}}>O sistema de níveis e recompensas projetado para incentivar a interação dos usuários e premiar a participação ativa na plataforma. Cada usuário começa no nível 1 e pode progredir através dos níveis ganhando KiFomeCoins e desbloqueando novas funcionalidades. As atividades que podem ajudar os usuários a progredir de nível incluem logins diários, avaliações em receitas, comentários marcados como positivos e outras interações positivas com o aplicativo. Conforme os usuários avançam de nível, eles desbloqueiam benefícios adicionais, como a capacidade de fazer comentários em receitas, personalizar avatares e muito mais.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 4. O que são KiFomeCoins e como posso ganhá-las?</Text>
            <Text style={{ textAlign: 'justify'}}>KiFomeCoins são moedas virtuais utilizadas dentro do aplicativo KiFome. Os usuários podem comprar, mas também ganhar de forma gratuita de várias maneiras, incluindo interações positivas com o aplicativo, como compartilhamento de receitas, avaliações positivas em receitas, atualização de perfil e participação em desafios culinários. Essas moedas podem ser trocadas por benefícios dentro do aplicativo, como desbloquear novas funcionalidades, acessar receitas premium e participar de eventos especiais.</Text>
            <Text style={{ paddingTop: 5, fontWeight:'bold' }}> 5. Posso acessar o KiFome offline?</Text>
            <Text style={{ textAlign: 'justify'}}>Não, é necessário estar sempre conectado à internet para aproveitar todas as funcionalidades, pois os dados são constantemente atualizados por meio de servidores conectados ao banco de dados, garantindo informações precisas e em tempo real.</Text>
            <Text style={{ fontWeight:'bold' }}> 6. Como funcionam os desafios culinários?</Text>
            <Text style={{ textAlign: 'justify'}}>Os desafios culinários do KiFome são atividades temáticas que incentivam os usuários a explorar suas habilidades culinárias e compartilhar suas criações. Em datas especiais os usuários poderam participar desses desafios, postando receitas específicas com alguma temática ou criando pratos com ingredientes específicos. Ao participar, eles podem compartilhar suas receitas no aplicativo e ganhar KiFomeCoins extras ou outros benefícios. Esses desafios promovem a interação, inspiram a criatividade na cozinha e expandem o repertório culinário da comunidade KiFome.</Text>
            <Text style={{ paddingTop: 10, fontWeight:'bold', textAlign: 'center' }}> Possui uma dúvida diferente?{'\n'}Entre em contato com a gente!</Text>
            <Text style={{ paddingTop: 5, textAlign: 'center', color: 'blue' }} onPress={handleEmailClick}>contato@kifome.com.br</Text>
        </ScrollView>
    );

    const [isEnabledMain, setIsEnabledMain] = useState([true, true, true]);
    const [isEnabled, setIsEnabled] = useState([
        [true, true, true],
        [true, true, true],
        [true, true, true]
    ]);
    
    const toggleSwitchMain = groupIndex => () => {
        const nextState = !isEnabledMain[groupIndex];
        setIsEnabledMain(prevState => {
            const newState = [...prevState];
            newState[groupIndex] = nextState;
            return newState;
        });
    
        setIsEnabled(prevState => {
            const newState = prevState.map((group, index) => {
                if (index === groupIndex) {
                    return group.map(() => nextState);
                } else {
                    return group;
                }
            });
            return newState;
        });
    };
    
    const toggleSwitch = (groupIndex, switchIndex) => () => {
        setIsEnabled(prevState => {
            const newState = prevState.map((group, index) => {
                if (index === groupIndex) {
                    return group.map((val, i) => (i === switchIndex ? !val : val));
                } else {
                    return group;
                }
            });
            return newState;
        });
    };
    

    const notificacoes = () => (
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingRight: 10 }}>
            <View style={styles.centralOp}>
                <Text style={{ paddingBottom: 10, fontWeight: 'bold', color: '#DF6127' }}>Sua Receita:</Text>
                <Switch
                    style={{ position: 'absolute', top: 0, right: 11 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabledMain[0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitchMain(0)}
                    value={isEnabledMain[0]}/>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#AFB297' }} />
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Comentários</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Comentários de outros usuários feitos na sua receita.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[0][0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(0, 0)}
                    value={isEnabled[0][0]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Bombando</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se sua receita está recebendo muitas avaliações positivas.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[0][1] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(0,1)}
                    value={isEnabled[0][1]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Alguém que você segue</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se ela interagiu de alguma forma com sua receita.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[0][2] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(0,2)}
                    value={isEnabled[0][2]}/>
                </View>    
            </View>
            <View style={styles.centralOp}>
                <Text style={{ paddingBottom: 10, fontWeight:'bold', color: '#DF6127' }}>Atividade das Pessoas que você está seguindo:</Text>
                <Switch
                        style={{ position: 'absolute', top: 0, right: 11 }}
                        trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                        thumbColor={isEnabledMain[1] ? '#DF6127' : '#AFB297'}
                        ios_backgroundColor="#DF6127"
                        onValueChange={toggleSwitchMain(1)}
                        value={isEnabledMain[1]}/>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#AFB297' }}/>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Receita Nova</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se a pessoa publicou uma nova receita.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[1][0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(1, 0)}
                    value={isEnabled[1][0]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Receita Favoritada</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Receitas de outros usuários que ela favoritou.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[1][1] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(1, 1)}
                    value={isEnabled[1][1]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Comentário</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Comentários feitos em receitas de outros usuários.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[1][2] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(1, 2)}
                    value={isEnabled[1][2]}/>
                </View>
            </View>
            <View style={styles.centralOp}>
                <Text style={{ paddingBottom: 10, fontWeight:'bold', color: '#DF6127' }}>Outros:</Text>
                <Switch
                        style={{ position: 'absolute', top: 0, right: 11 }}
                        trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                        thumbColor={isEnabledMain[2] ? '#DF6127' : '#AFB297'}
                        ios_backgroundColor="#DF6127"
                        onValueChange={toggleSwitchMain(2)}
                        value={isEnabledMain[2]}/>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#AFB297' }}/>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Respostas</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Respostas a seu comentário.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[2][0] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(2, 0)}
                    value={isEnabled[2][0]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Desafios</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Se está acontecendo algum desafio.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[2][1] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(2, 1)}
                    value={isEnabled[2][1]}/>
                </View>
                <View>
                    <Text style={{ paddingBottom: 5, paddingTop: 10, fontWeight:'bold', textAlign: 'justify'}}>Lembretes</Text>
                    <Text style={{ fontSize: 12, textAlign: 'justify'}}>Outros avisos.</Text>
                    <Switch
                    style={{ position: 'absolute', top: -5, right: 0 }}
                    trackColor={{false: 'rgba(175, 178, 151, 0.5)', true: 'rgba(223, 97, 39, 0.5)'}}
                    thumbColor={isEnabled[2][2] ? '#DF6127' : '#AFB297'}
                    ios_backgroundColor="#DF6127"
                    onValueChange={toggleSwitch(2, 2)}
                    value={isEnabled[2][2]}/>
                </View>
            </View>
        </ScrollView>
    );

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <Text style={[styles.fecharText, { color: '#DF6127' }]}>{opcao}</Text>
                   <TouchableOpacity style={styles.fecharButton} onPress={closeModal}>
                        <Text style={styles.fecharText}>X</Text>
                    </TouchableOpacity>
                    {(() => {
                    switch (opcao) {
                        case "Sobre o App":
                            return sobre();
                        case "Termo de Uso":
                            return termo();
                        case "Central de Ajuda":
                            return central();
                        case "Notificações":
                            return notificacoes();
                        default:
                            return <Text>{opcao}</Text>;
                    }
                    })()}
                </View>
            </View>
        </Modal>
    );
} 

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '90%',
        height: '90%',
        padding: 20,
        borderRadius: 10,
    },
    fecharButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
        zIndex: 100,
    },
    fecharText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
    },
    centralOp: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 2,
        padding: 12,
    },
    
});