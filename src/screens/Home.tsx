import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
    const navigation = useNavigation<any>();

    const handleBack = () => {
        // navigation.goBack();
        navigation.navigate("Login");
    }

    return (
        <ScrollView>
            <Text>Home</Text>
            <Button title="Return" onPress={handleBack} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    boxUser: {
        backgroundColor: 'gray',
        padding: 30,
        margin: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

// Mock up data về users(là 1 array bên trong có chứa nhiều object).
// Mỗi object chứa thông tin của 1 user gồm các key: fullName, email, password, gender,...
// Render giao diện thông tin user bằng phương thức map.