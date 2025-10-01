//El contenido de este archivo va en el index que va en app/(tabs) del segundo proyecto.
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const styles = StyleSheet.create({
    titulo: {
      color: "black",
      fontSize: 20,
      backgroundColor: "lightgrey",
      padding: 10,
      marginBottom: 10,
      marginTop: 10
    },
    margen: {
      marginLeft: 10,
      marginRight: 10
    }
  });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 0, marginBottom:20}} contentContainerStyle={{ paddingBottom: 80, flexGrow:1}}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20, margin:10}}>
        Componentes nativos de React Native
      </Text>
      <Text style={styles.titulo}>View</Text>
      <Text style={styles.margen}>Es el contenedor básico.</Text>

      <Text style={styles.titulo}>ScrollView</Text>
      <Text style={styles.margen}>Es un contenedor que permite scrollear.</Text>

      <Text style={styles.titulo}>FlatList</Text>
      <Text style={styles.margen}>Lista optimizada para grandes cantidades de datos. Solo renderiza lo que está en pantalla y va cargando lo demás mientras hacés scroll.</Text>

      <Text style={styles.titulo}>SectionList</Text>
      <Text style={styles.margen}>Lista optimizada con secciones, con un indice agrupado.</Text>

      <Text style={styles.titulo}>SafeAreaView</Text>
      <Text style={styles.margen}>Respeta las áreas seguras de iOS (Bordes de la pantalla).</Text>

      <Text style={styles.titulo}>TextInput</Text>
      <Text style={styles.margen}>Sirve para ingresar texto.</Text>
      <TextInput 
        style={{ borderWidth: 2, borderRadius: 6, margin: 10, padding: 6 }}
        defaultValue="Este es un ejemplo de TextInput.."
      />

      <Text style={styles.titulo}>Image</Text>
      <Text style={styles.margen}>Sirve para mostrar una imagen.</Text>
      <Image 
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} 
        style={{ width: 100, height: 100, margin: 10 }}
      />

      <Text style={styles.titulo}>Button</Text>
      <Text style={styles.margen}>Botón simple.</Text>
      <Button 
        title="Ejemplo de botón"
        onPress={() => setModalVisible(true)}
      />

      <Text style={styles.titulo}>Pressable</Text>
      <Text style={styles.margen}>Detecta interacciones. Recomendado para botones más personalizados.</Text>
      <Pressable 
        style={{backgroundColor: "lightblue", padding: 10, justifyContent:"center", alignItems: "center", margin:10}}
        onPress={() => setModalVisible(true)}>
        <Text>EJEMPLO</Text>
      </Pressable>

      <Text style={styles.titulo}>TouchableOpacity</Text>
      <Text style={styles.margen}>Similar a Pressable, pero tiene un efecto de opacidad al presionar.</Text>
      <TouchableOpacity
        style={{backgroundColor: "lightblue", padding: 10, justifyContent:"center", alignItems: "center", margin:10}}
        onPress={() => setModalVisible(true)}
        >
        <Text>EJEMPLO</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>TouchableHighlight</Text>
      <Text style={styles.margen}>Similar a Pressable, pero tiene un efecto de fondo resaltado al presionar.</Text>
      <TouchableHighlight
        style={{backgroundColor: "lightblue", padding: 10, justifyContent:"center", alignItems: "center", margin:10}}
        underlayColor="blue"
        onPress={() => setModalVisible(true)}
        >
        <Text>EJEMPLO</Text>
      </TouchableHighlight>

      <Text style={styles.titulo}>TouchableWithoutFeedback</Text>
      <Text style={styles.margen}>Detecta interacciones sin cambios visuales. No acepta style.</Text>
      <TouchableWithoutFeedback
      onPress={() => setModalVisible(true)}>
        <Text>EJEMPLO</Text>
      </TouchableWithoutFeedback>

      <Text style={styles.titulo}>Switch</Text>
      <Text style={styles.margen}>Interruptor ON/OFF.</Text>
      <Switch 
        value={isOn}
        onValueChange={setIsOn}
      />

      <Text style={styles.titulo}>ActivityIndicator</Text>
      <Text style={styles.margen}>Circulo de carga.</Text>
      <ActivityIndicator/>

      <Text style={styles.titulo}>Modal</Text>
      <Text style={styles.margen}>Ventana emergente.</Text>
      <Button 
        title="Abrir Modal"
        onPress={() => setModalVisible(true)}
      />
      <Modal transparent={true} visible={modalVisible}>
        <View style={{backgroundColor: "lightgrey", margin:20, padding: 20, borderRadius: 10}}>
          <Text style={{marginBottom:10}}>Ejemplo de modal.</Text>
          <Button 
            title="Cerrar"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>

      <Text style={styles.titulo}>RefreshControl</Text>
      <Text style={styles.margen}>Para "pull to refresh" en las listas con scroll. Va en el ScrollView.</Text>

      <Text style={styles.titulo}>ImageBackground</Text>
      <Text style={styles.margen}>Cambia la imagen de fondo del contenedor.</Text>
      <ImageBackground
      source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
      >
        <Text style={{color:"white", margin:10}}>Texto para mostrar ImageBackground.</Text>
      </ImageBackground>

      <Text style={styles.titulo}>KeyboardAvoidingView</Text>
      <Text style={styles.margen}>Ajusta la UI para que el teclado no tape inputs.</Text>

      <Text style={styles.titulo}>StatusBar</Text>
      <Text style={styles.margen}>Controla la barra de estado (Parte de arriba del telefono).</Text>
      <StatusBar barStyle={"dark-content"} backgroundColor={"lightblue"}></StatusBar>
    </ScrollView>
  );
}
