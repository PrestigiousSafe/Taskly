import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

type TaskType = {
    Title: string;
    Type: string;
    Time: string | null;
    Finished: boolean;
};

type TaskProps = {
    tasks: TaskType[];
};

function Task({ tasks }: TaskProps) {
    const soretedTasks = [...tasks].sort((a, b) => {
        return Number(a.Finished) - Number(b.Finished);
    });
    
    return (
        <View style={styles.container}>
            {soretedTasks.map((task, index: number) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => (task.Finished = !task.Finished)}
                >
                    <View
                        style={[
                            styles.taskContainer,
                            index !== 0 && styles.taskSpacing,
                        ]}
                    >
                        {/* Line-through for the entire task */}
                        {task.Finished && <View style={styles.taskLineThrough} />}
                        
                        <View style={styles.circle} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{task.Title}</Text>
                        </View>
                        {task.Time && (
                            <Text style={styles.time}>{task.Time}</Text>
                        )}
                        <View style={styles.line} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: width * 0.1,
        marginTop: width * 0.05,
    },
    taskContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    taskSpacing: {
        marginTop: width * 0.05,
    },
    taskLineThrough: {
        position: "absolute",
        top: "40%",
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: "#000000",
        opacity: 0.25,
        zIndex: 1,
    },
    circle: {
        width: width * 0.08,
        height: width * 0.08,
        borderRadius: (width * 0.08) / 2,
        borderWidth: 2,
        borderColor: "#C4C4C4",
        marginRight: width * 0.04,
        marginBottom: width * 0.02,
    },
    textContainer: {
        flex: 1,
        marginBottom: width * 0.02,
    },
    title: {
        fontSize: width * 0.045,
        fontWeight: "500",
        color: "#000",
    },
    time: {
        fontSize: width * 0.035,
        color: "#888",
        textAlign: "right",
        marginBottom: width * 0.02,
    },
    line: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: "#EAEAEA",
    },
});

export default Task;