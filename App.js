import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-600">
       Native wind is working now 
      </Text>
      <Text className="mt-4 text-gray-600">Lets code!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
