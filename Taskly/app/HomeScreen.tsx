import { Text, View, StyleSheet } from "react-native";
import FilterHomescreen from "./FilterHomescreen";
import AddTask from "./AddTask";
import Task from "./Task";

function HomeScreen() {
  const date = new Date();
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

  // Array of tasks
  const tasks = [
    { Title: "Task", Type: "task", Time: null, Finished: false },
    { Title: "Event", Type: "event", Time: "12:45", Finished: true },
    { Title: "Important", Type: "important", Time: null, Finished: false },
];


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dayName}</Text>
      <View style={styles.line} />
      <FilterHomescreen />
      <Task tasks={tasks} />
      <AddTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 30,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 50,
    color: "#000000",
  },
  line: {
    marginTop: 10, 
    height: 2, 
    width: "90%", 
    backgroundColor: "#DAD7D7",
  },
});

export default HomeScreen;
