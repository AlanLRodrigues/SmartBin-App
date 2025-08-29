import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CircleProgress from "../components/NivelLixeira";
import { router } from "expo-router";

export default function Trash2() {
  return (
    <SafeAreaView className="flex-1 bg-[#ebfbdc]">
      
      
      <View className="flex-1 justify-center items-center px-4">
        <Text className="font-semibold text-[#336a39] text-5xl font-Roboto-slab text-center">
          LIXEIRA DA COZINHA
        </Text>

        <CircleProgress />

        <Text className=" font-Space-mono">
          Indicador do nivel da ocupação
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/change")}
          className="mt-20 pt-5 pb-5 pl-8 pr-8 rounded-xl items-center bg-[#336a39]"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 8,
          }}
        >
          <Text className="text-white font-Roboto-slab">Volte para escolha</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View className="bg-green-700 py-4 w-full items-center">
        <Text className="text-white">© 2025 SMARTBIN</Text>
      </View>
    </SafeAreaView>
  );
}
