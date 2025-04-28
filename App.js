import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import CopaScreen from "./screens/CopaScreen";
import EstadiosScreen from "./screens/EstadiosScreen";
import BrasilScreen from "./screens/BrasilScreen";
import EstatisticasScreen from "./screens/EstatisticasScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          
          <Tab.Screen
            name="Copa"
            component={CopaScreen}
            options={{
              title: "Copa 2022",
              headerTitleAlign: "center",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy" color={color} size={size} />
              ),
            }}
          />

          {/* Aba Estádios */}
          <Tab.Screen
            name="Estádios"
            component={EstadiosScreen}
            options={{
              title: "Estádios",
              headerTitleAlign: "center",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="football" color={color} size={size} />
              ),
            }}
          />

          {/* Aba Brasil */}
          <Tab.Screen
            name="Brasil"
            component={BrasilScreen}
            options={{
              title: "Brasil",
              headerTitleAlign: "center",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="flag" color={color} size={size} />
              ),
            }}
          />

          {/* Aba Estatísticas */}
          <Tab.Screen
            name="Estatísticas"
            component={EstatisticasScreen}
            options={{
              title: "Estatísticas",
              headerTitleAlign: "center",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="stats-chart" color={color} size={size} />
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
