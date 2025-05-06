import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

function AddTask() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: width * 0.05,
    },
    addButton: {
        width: width * 0.20, 
        height: width * 0.20,
        borderRadius: (width * 0.20) / 2,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    addButtonText: {
        fontSize: width * 0.12,
        paddingBottom: width * 0.02,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default AddTask;