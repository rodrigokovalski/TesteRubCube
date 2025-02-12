import { Image, Text, View } from "react-native";
import { CharacterType } from "../../types/charactersTypes";
import { styles } from "./styles.ts";

interface CharacterPros {
    character: CharacterType,
}

export default function Character({character}: CharacterPros): React.JSX.Element {
    return (
        <View style={styles.view}>
            <Image
                style={styles.image}
                source={{
                    uri: character.image,
                }}
            />
            <Text style={styles.title}>{character.name}</Text>
        </View>
  );
}