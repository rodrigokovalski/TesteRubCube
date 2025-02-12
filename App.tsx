import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { InfoType, CharacterType } from './types/charactersTypes';
import { Button, ScrollView, TextInput, View } from 'react-native';
import Header from './components/Header';
import Character from './components/Character';
import { styles } from './styles/global';

function Home(): React.JSX.Element {
	const [characteres, setCharacteres] = useState<CharacterType[]>([]);
	const [page, setPage] = useState(1);
	const [info, setInfo] = useState<InfoType | null>(null);
	const [query, setQuery] = useState('');

	const getCharacteres = async (pageNumber: number) => {
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${query}`);
			const json = await response.json();
			setCharacteres(json.results);
			setInfo(json.info)
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getCharacteres(page);
	}, [page, characteres]);


	return (
		<SafeAreaProvider>
      		<SafeAreaView style={styles.container}>
				<Header title='Rick And Morty Wik'></Header>
				<TextInput
					placeholder="Digite o nome do personagem..."
					value={query}
					onChangeText={setQuery}
					style={styles.busca}
				/>
				<ScrollView>
					<View style={styles.body}>
						{characteres && characteres.map(char => (
							<Character key={char.id} character={char}></Character>
						))}
					</View>
				</ScrollView>
				<View>
					<Button title='Previous' onPress={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={!info?.prev} />
					<Button title='Next' onPress={() => setPage((prev) => prev + 1)} disabled={!info?.next} />
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export default Home;
