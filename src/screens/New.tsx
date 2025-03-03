import { useState } from "react";
import { View, TextInput, Text, Button, ScrollView, StyleSheet } from "react-native";

export default function New() {
    const[inp, setInp] =  useState("");
    const[todos, setTodos] = useState<string[]>([]);
    const handlePress = () => {
        setTodos([...todos, inp]);
        setInp("");
    };
    function handleDelete(index:number) {
        const data = todos.filter((item, i)=> i !=index);
        setTodos(data);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todolist</Text>
            <View style={styles.form}>
                <TextInput placeholder="New to-do" style={styles.input} value={inp} onChangeText={setInp}/>
                <Button title="Add" onPress={handlePress}/>
            </View>
            <ScrollView style={styles.boxTodo}>
                {
                    todos.map((todos, index)=>(
                        <View style={styles.rowTodo} key={index}>
                    <Text>{todos}</Text>
                    <Button title="Delete" onPress={() => handleDelete(index)} />
                </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column", 
        alignItems: 'flex-start',   
        padding: 20 
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 10
    },
    form: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
        padding: 10,
        borderRadius: 5
    },
    boxTodo: {
        width: "100%",
        height: 500,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10
    },
    rowTodo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "red"
    }
});