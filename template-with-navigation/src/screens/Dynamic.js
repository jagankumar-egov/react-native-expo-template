import React from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
// import { RJSFSchema } from '@rjsf/utils';
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import {  setData, getData } from "../utils";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const log = (type) => console.log.bind(console, type);
const form = await getData("formdata");

console.log( form);
export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Dynamic Screen"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form
          schema={schema}
          formData={form}
          validator={validator}
          onChange={log("changed")}
          onSubmit={(data) => {
            setData("formdata", data?.formData);
            log(data,"submitted");

          }}
          onError={log("errors")}
        />
        {/* This text using ubuntu font */}
        <Text fontWeight="bold">This is the Dynamic screen</Text>
        <Text fontWeight="bold">
          test
        </Text>
      </View>
    </Layout>
  );
}
