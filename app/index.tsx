import { router, useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import * as Font from 'expo-font'
import { FontAwesome } from '@expo/vector-icons'
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";


export default function Home () {
    const navigation = useNavigation();
     const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
    Font.loadAsync({
      RobotoSlab: require('../assets/fonts/RobotoSlab-Bold.ttf'),
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
      JoseFinSansVariablefont: require('../assets/fonts/JosefinSans-VariableFont_wght.ttf')

    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;
        
    
      return(
        <ScrollView>
    <SafeAreaView className="bg-[#ebfbdc] items-center flex-1 justify-center ">
        <View className="p-12">
        <Text className="font-semibold text-green-800 text-5xl items-center">
            Bem vindo a <Text className="font-Roboto-slab text-6xl ">SMARTBIN</Text>
        </Text>

        <View>

      <View className="mt-14 flex-row  items-start space-x-2">
        <FontAwesome color="green" name="leaf" size={23} />
        <Text className=" text-15 font-semibold text-gray-800 ml-2">
          Gerencie seus resíduos díarios de forma inteligente, prática e sustentável
        </Text>
      </View>

      
      <View className="mt-5 flex-row  items-start space-x-2">
        <FontAwesome color="black" name="laptop" size={23} />
        <Text className=" text-15 font-semibold text-base text-gray-800 ml-2">
            Acompanhe, organize e otimize a coleta de lixo com tecnologia em tempo real. </Text>
      </View>

      
      <View className="mt-5 flex-row  items-start space-x-2">
        <FontAwesome color="gray" name="trash" size={23} />
        <Text className=" text-15 font-semibold text-base text-gray-800 ml-2">
          O acúmulo de lixo e a coleta ineficiente geram desperdício e impacto ambiental.
        </Text>
      </View>

      
      <View className="mt-5 flex-row  items-start space-x-2">
        <FontAwesome color="green" name="recycle" size={23} />
        <Text className=" text-15 font-semibold text-base text-gray-800 ml-2">
          A ideia SMARTBIN resolve isso com tecnologia inteligente que organiza e otimiza o gerenciamento dos resíduos.
        </Text>
      </View>

      </View>
        

        <TouchableOpacity onPress={() => router.push("/change")} className="mt-20 pt-5 pb-5 pl-8 pr-8 rounded-xl items-center bg-[#336a39]"
            style={{
            shadowColor: "#000", 
            shadowOffset: { width: 0, height: 4 }, 
            shadowOpacity: 0.3, 
            shadowRadius: 5, 
            elevation: 8, 
            }}
>
        <Text className="text-white font-Roboto-slab">Clique aqui para escolher</Text>
        </TouchableOpacity>
        
        <View className="h-12"/>
        

      </View>
    <View className="bg-green-700 mt-20 py-4 absolute bottom-0 w-full items-center">
        <Text className="text-white">© 2025 SMARTBIN</Text>
      </View>
    </SafeAreaView>
    </ScrollView>

    
      
    )
}