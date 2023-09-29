import { StatusBar, StyleSheet, SafeAreaView, Text, View, TextInput, Pressable } from "react-native";

export default function HomeScream( {navigation}:any ) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>GRIMOIRE OF THE HEART</Text>
            <StatusBar/>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle}
                placeholder="Digite seu email"
                />

                <TextInput style={styles.inputStyle}
                placeholder="Digite sua senha"
                />

            </View>
            <View style={styles.btnContainer}>
                    <Pressable 
                    style={styles.btnStyle}
                    onPress={ () => navigation.navigate("Second")}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 14
                        }}>Entrar</Text>
                    </Pressable>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    inputContainer: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        textAlign: 'center',
    },
    btnContainer: {

    },
    btnStyle: {
        width: 120,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',      
    }
})