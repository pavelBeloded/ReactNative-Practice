import ActionCards from "@/components/ActionCards";
import ContactList from "@/components/ContactList";
import ElevatatedCards from "@/components/ElevatatedCards";
import FancyCard from "@/components/FancyCard";
import FlatCards from "@/components/FlatCards";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (

    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatatedCards/>
        <FancyCard/>
        <FancyCard/>
        <ActionCards/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
}
