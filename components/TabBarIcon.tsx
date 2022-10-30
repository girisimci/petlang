import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GREEN, GRAY, PRIMARY_COLOR, WHITE } from "../assets/styles";
import { TabBarIconT } from "../types";

const TabBarIcon = ({ focused, iconName, text }: TabBarIconT) => {
  const iconFocused = focused ? DARK_GREEN : WHITE;

  return (
    <View style={styles.iconMenu}>
      <Icon name={iconName} size={16} color={iconFocused} />
      <Text style={[styles.tabButtonText, { color: iconFocused }]}>{text}</Text>
    </View>
  );
};

export default TabBarIcon;
