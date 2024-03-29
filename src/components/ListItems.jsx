import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";

const ListItems = (props) => {
  const { dt_txt, min, max } = props;
  const {item, date, temp} = styles
  return (
    <View style={item}>
      <Feather name={"sun"} size={50} color={"black"} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 3,
    backgroundColor: "orange",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});

export default ListItems
