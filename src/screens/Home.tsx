import {View, Text, TextInput, TouchableOpacity} from "react-native";

export default function Home() {
    type Student = {
        name: string,
        age: number,
        grade: number,
        email: string,
        gender: string,
        username?: string
    
    }
    const student: Student = {
        name: "Dang Nhat Minh",
        age: 17,
        grade: 11,
        email: "minh.26.88.tonthattung@gmail.com",
        gender: "Male"
    }
    const uptodateStudent ={
        ...student,
        username: "Mint!",
        email: "dangnhatminh2008@gmail.com"
    }
    console.log(uptodateStudent);
    return (
        <View>
            <Text>Hello Mint</Text>
        </View>


    );
}
