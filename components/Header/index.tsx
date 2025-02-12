import React from 'react';
import { Text, View } from "react-native";
import { styles } from './styles';

interface HeaderProps {
    title: string,
}

function Header({title}: HeaderProps): React.JSX.Element {
    return (
        <View style={styles.header}>
            <Text  style={styles.title}>{title}</Text>
        </View>
    );
}

export default Header;