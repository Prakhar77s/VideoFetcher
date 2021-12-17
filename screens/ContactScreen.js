import React from "react";
import { Button, Text, View, Linking } from "react-native";
import { useTheme } from "@react-navigation/native";
import ContactButtons from "../components/ContactButtons/ContactButtons";

const ContactScreen = () => {
  const { colors } = useTheme();

  return (
    <View>
      <View>
        <ContactButtons
          text={"Email"}
          onPress={() => Linking.openURL("mailto:helpdesk@dekho-ji.com")}
        />
        <ContactButtons
          text={"Whatsapp"}
          onPress={() =>
            Linking.openURL("https://wa.me/917057039679?text=Hello")
          }
        />
        <ContactButtons
          text={"Telegram"}
          onPress={() =>
            Linking.openURL("https://telegram.me/www_dekho_ji_com")
          }
        />
        <ContactButtons
          text={"Facebook"}
          onPress={() =>
            Linking.openURL(
              "https://www.facebook.com/Sikh.Nanakshahi.Jantri.Events/posts"
            )
          }
        />
      </View>
    </View>
  );
};

export default ContactScreen;
