import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
    // Tạo useState để theo dõi giá trị input của các TẽtInput khi click vào Sign Up thì sẽ console.log ra tất cả giá trị đã fill.
    function handleClick() {
        console.log(FName);
        console.log(UName);
        console.log(email);
        console.log(pass);
        console.log(conPass);
    }
    const [FName, setFName] = useState("");
    function onChangeFName(text: string) {
        setFName(text);
    }
    const[UName, setUName] = useState("");
    function onChangeUName(text: string) {
        setUName(text);
    }
    const[email, setEmail] = useState("");
    function onChangeEmail(text: string) {
        setEmail(text);
    }
    const[pass, setPassword] = useState("");
    function onChangePass(text: string) {
        setPassword(text);
    }
    const[conPass,setConPass] = useState("");
    function onChangeConPass(text: string) {
        setConPass(text);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View>
                <Text>Full Name</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={FName} onChangeText={onChangeFName}/>
            </View>
            <View>
                <Text>Username</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={UName} onChangeText={onChangeUName}/>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={email} onChangeText={onChangeEmail}/>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={pass} onChangeText={onChangePass}/>
            </View>
            <View>
                <Text>Confirm Password</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={conPass} onChangeText={onChangeConPass}/>
            </View>
            <TouchableOpacity style={styles.button} onPress = {handleClick}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: "center"
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: "#9BDF46",
        padding: 10,
        borderRadius: 10
    }
})