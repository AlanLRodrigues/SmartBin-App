import { router } from "expo-router";
import { FlatList, ImageBackground, View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Change () {
    const data = [
        {
            id: 1,
            nome: "Lixeira da cozinha",
            descricao: "Lixeira inteligente para reduzir o impacto ambiental",
            botao: "Visite",
            rota: "/Lixeira",
            imagem: require("../assets/images/colheita-de-maos-jogando-lixo-no-lixo-na-floresta_23-2147826157.avif"),
        },
    ];

    return (
      <View className="flex-1 bg-[#ebfbdc]">
        <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 18 }}
        renderItem={({ item }) => (
        
        <TouchableOpacity onPress={() => router.push(item.rota)}>
            <View
            className="mb-5 rounded-xl shadow-md"
            style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3, // Android shadow
            }}
        >
          <ImageBackground
            source={item.imagem}
            imageClassName="w-full h-40 justify-center"
            imageStyle={{ borderRadius: 12 }}
            className="h-40 p-4 justify-end rounded-xl relative overflow-hidden"
            >
            
            <View
                className="absolute inset-0 rounded-xl"
                style={{ backgroundColor: "rgba(47, 79, 79, 0.7)" }}
            />

          <Text className="text-xl font-Roboto-slab text-[#C8E6C9]">{item.nome}</Text>

            <Text className="text-sm font-semibold mb-2 text-[rgba(255,255,255,0.9)]">{item.descricao}</Text>
          </ImageBackground>
          </View>
          </TouchableOpacity>
          
        )}
            ItemSeparatorComponent={() => <View className="h-8" />}
          />
            </View>

            <View className="bg-green-700 py-4 absolute bottom-0 w-full items-center">
                <Text className="text-white">© 2025 SMARTBIN</Text>
            </View>
        </View>
    );
}
