import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function FilterHomescreen() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const filters = ["All", "Task", "Event", "Important"];

  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={styles.filterItem}
          onPress={() => setActiveFilter(filter)}
        >
          <Text
            style={[
              styles.text,
              activeFilter === filter && styles.activeText,
            ]}
            onLayout={(event) => {
              if (activeFilter === filter) {
                setIndicatorWidth(event.nativeEvent.layout.width);
              }
            }}
          >
            {filter}
          </Text>
          {activeFilter === filter && (
            <View
              style={[
                styles.activeIndicator,
                { width: indicatorWidth },
              ]}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  filterItem: {
    alignItems: "center",
    marginRight: 20,
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  activeText: {
    fontWeight: "bold",
  },
  activeIndicator: {
    marginTop: 4,
    height: 6,
    backgroundColor: "#000",
    borderRadius: 3,
  },
});

export default FilterHomescreen;