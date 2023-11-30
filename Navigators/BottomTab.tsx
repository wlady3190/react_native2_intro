import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Welcome from "../screens/Welcome";
import Galeria from "../screens/Galeria";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Form from "../screens/Form";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarLabel: "Bienvenida",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-city"
              size={26}
              color="#456786"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Galeria"
        component={Galeria}
        options={{
          tabBarLabel: "Galeria de imágenes",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="camera-image" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Formulario"
        component={Form}
        options={{
          tabBarLabel: "Formulario",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cellphone-information" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
