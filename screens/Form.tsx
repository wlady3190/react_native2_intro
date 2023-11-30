// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import ImgText from "../components/ImgText";

// export default function Form() {

//   interface Data {
//     titulo: string;
//     url: string;
//   }
//   interface FormProps {
//     onSubmit: (data: Data) => void;
//   }

//   // const [data, setData] = useState<Data>({ titulo: "", url: "" });

//   // const onChange = (key: keyof Data, value: string) => {
//   //   setData({
//   //     ...data,
//   //     [key]: value,
//   //   });
//   // };

//   // const onSubmit = (event: any) => {
//   //   event.preventDefault();
//   //   console.log(data);

//   // };

//   const Form: React.FC<FormProps> = ({ onSubmit }) => {
//     const [data, setData] = useState<Data>({ titulo: "", url: "" });
//     const [modalVisible, setModalVisible] = useState(false);

//     const onChange = (key: keyof Data, value: string) => {
//       setData({
//         ...data,
//         [key]: value,
//       });
//     };
//   }
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.txtInput}
//         placeholder="Amanecer"
//         placeholderTextColor="white"
//         value={data.titulo}
//         onChange={(valor: any) => onChange("titulo", valor)}
//       />
//       <TextInput
//         style={styles.txtInput}
//         placeholder="https://imagen.com/ejemplo.jpg"
//         placeholderTextColor="white"
//         value={data.url}
//         onChange={(valor: any) => onChange("url", valor)}
//       />
//       <TouchableOpacity style={styles.btn} onPress={onSubmit}>
//         <ImgText />
//         <MaterialCommunityIcons
//           style={styles.icon}
//           name="card-search-outline"
//           size={50}
//           color="white"
//         />
//         <ImgText data={data} />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#0df2c9",
//   },
//   txtInput: {
//     padding: 10,
//     borderWidth: 2,
//     borderColor: "#000",
//     borderRadius: 10,
//     backgroundColor: "#000",
//     color: "#000",
//     marginBottom: 10,
//     width: 200,
//   },
//   btn: {
//     width: 100,
//     height: 50,
//     backgroundColor: "#ccc",
//     borderRadius: 10,
//   },
//   icon: {
//     alignSelf: "center",
//   },
// });

import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
  Alert,
} from "react-native";
import ImgText from "../components/ImgText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Ajusta la importación según tu estructura de archivos

interface FormProps {
  onSubmit: (data: Data) => void;
}

interface Data {
  titulo: string;
  url: string;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<Data>({ titulo: "", url: "" });
  const [modalVisible, setModalVisible] = useState(false);

  const onChange = (key: keyof Data, value: string) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handlePress = () => {
    // onSubmit(data);
    if (data.titulo === '' || data.url === '') {
      Alert.alert('Error',"Ingrese valores");
    } else {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        placeholder="Nombre de la imagen"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        
        value={data.titulo}
        onChangeText={(valor) => onChange("titulo", valor)}
      />
      <TextInput
        style={styles.txtInput}
        placeholder="https://imagen.com/ejemplo.jpg"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={data.url}
        onChangeText={(valor) => onChange("url", valor)}
      />
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <MaterialCommunityIcons
          name="card-search-outline"
          size={50}
          color="white"
        />
        <ImgText
          modalVisible={modalVisible}
          closeModal={closeModal}
          data={data}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txtInput: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    backgroundColor: "#000",
    color: "white",
    marginBottom: 10,
    width: 200,
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Form;
