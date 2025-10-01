import { ScrollView, Text } from 'react-native';
// Este archivo va en app/(tabs)/ del primer ejercicio
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 80, flexGrow:1}}>
        <Text style={{textAlign:"center", fontSize: 20, marginTop:200, color:"lightgreen", fontWeight:700}}>Esta es una pestaña nueva.</Text>
        <Text style={{textAlign:"center", fontSize: 20, color:"lightgreen", fontWeight:700}}>:D</Text>
    </ScrollView>
  );
}

