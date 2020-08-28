import React from "react";
import { View, Text } from "react-native";

export default function Header(props) {
  return (
    <View>
      <Text style={{ color: props.color, fontSize: props.size }}>
        {props.text}
      </Text>
    </View>
  );
}

Header.defaultProps = {
  color: "tomato",
  size: 30,
};
