import { View, Text, Image, StyleSheet,  } from "react-native";

export default function() {
    return (
        <View>
            <Image source={{uri:""}}/>
            
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    heading: {
        fontSize: 30,
        fontWeight: 300,
    },
    
})

