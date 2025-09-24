import { ScrollView, Text, View } from "react-native";

type Componente = {
  nombre: string;
  descripcion: string;
};

export default function Page() {
  const componentes: Componente[] = [
    { nombre: "View", descripcion: "Contenedor básico para agrupar elementos y aplicar estilos." },
    { nombre: "ScrollView", descripcion: "Contenedor con scroll para contenido que no cabe en pantalla." },
    { nombre: "FlatList", descripcion: "Lista optimizada para muchos elementos." },
    { nombre: "Text", descripcion: "Muestra texto en pantalla." },
    { nombre: "TextInput", descripcion: "Campo de entrada de texto." },
    { nombre: "Image", descripcion: "Muestra imágenes." },
    { nombre: "Button", descripcion: "Botón básico." },
    { nombre: "Pressable", descripcion: "Detecta toques y presiones." },
    { nombre: "Switch", descripcion: "Interruptor ON/OFF." },
    { nombre: "ActivityIndicator", descripcion: "Spinner/loader de carga." },
    { nombre: "Modal", descripcion: "Ventana emergente." },
    { nombre: "KeyboardAvoidingView", descripcion: "Evita que el teclado tape inputs." },
    { nombre: "SafeAreaView", descripcion: "Respeta las áreas seguras de iOS." },
    { nombre: "ImageBackground", descripcion: "Contenedor con imagen de fondo." },
    { nombre: "StatusBar", descripcion: "Controla la barra de estado." }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Componentes nativos de React Native:
      </Text>
      {componentes.map((c, i) => (
        <View key={i} style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{c.nombre}</Text>
          <Text style={{ fontSize: 14, color: "#555" }}>{c.descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
