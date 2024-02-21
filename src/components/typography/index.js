import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Typography = ({
  text,
  textPosition,
  color,
  fontSize,
  fontFamily,
  width,
  marginLeft = 0,
  style,
  numberOfLines,
  ellipsizeMode,
  textTransform,
  fontWeight,
}) => {
  return (
    <Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={{
        color: color,
        width: width,
        textAlign: textPosition,
        fontSize: fontSize,
        textTransform: textTransform,
        marginLeft: marginLeft,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        ...style,
      }}
    >
      {text}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({});
