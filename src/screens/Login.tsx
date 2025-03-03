import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, Icon, Input, Pressable, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
type loginProps = {
    nameApp: string;
    version: number;
};
export default function Login({ nameApp, version }: any) {
    const [show, setShow] = useState(false);
    console.log(nameApp, version);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleClick() {
        console.log(email);
        console.log(password);
    }
    function handleChangeText(text: string) {
        setEmail(text);
    }
    function handleChangePassword(mk: string) {
        setPassword(mk)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={email} onChangeText={handleChangeText} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder="Type something here..." style={styles.input} value={password} onChangeText={handleChangePassword} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleClick}>
                <Text>Login</Text>
            </TouchableOpacity>
            <Button onPress={() => console.log("hello world")}>Click Me</Button>
            <Stack space={4} w="100%" alignItems="center">
                <Input variant="rounded" placeholder="Round" w="50%" />
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>} placeholder="Password" />
            </Stack>;
        </View>
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