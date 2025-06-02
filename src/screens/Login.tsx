import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jsiConfigureProps } from "react-native-reanimated/lib/typescript/core";
import { AuthContext } from "../contexts/AuthenticationContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        if (!email || !password) {
            Alert.alert("Please fill in all fields");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Password must be at least 6 characters");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            Alert.alert("Please enter a valid email");
            return;
        }

        // handle Sign In
        let users = await AsyncStorage.getItem('user') || "";
        console.log(users);
        users = users ? JSON.parse(users) : [];
        if (!users || users.length === 0) {
            Alert.alert("No user found");
            return;
        };
        const user = users.find((user: any) => user.email == email && user.password == password);
        if (!user) {
            Alert.alert("Invalid email or password");
            return;
        };
        await AsyncStorage.setItem('loggedInUser', JSON.stringify(user));
        Alert.alert('Log in successfully');
        navigation.navigate("Home");
    };
    //handle list of account
    //navigation
    const navigation = useNavigation<any>();
    const handleChangeSignUp = () => {
        navigation.navigate("SignUp");
    }
    return (
        <View style={styles.container}>
            <CustomInput placeholder="Enter your email" value={email} onChangeText={setEmail} />
            <CustomInput placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry={true} />
            <CustomButton text="Login" onPress={handleSubmit} />
            <CustomButton text="Sign Up" onPress={handleChangeSignUp} />
            <View>
                <Text style={styles.title}>Your account</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 5,
        width: "80%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "red",
        alignSelf: "center"
    }
})