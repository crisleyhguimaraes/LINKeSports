import { View, Image } from "react-native";
import { GameCard } from "../../components/GameCard";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading }  from  "../../components/Heading";
import { GAMES } from "../../utils/games";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image
      source={logoImg}
      style={styles.logo}
      />

      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."      
      />

      <GameCard 
        data={GAMES [3]}
      />


    </View>
  );
}
