import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';
type InputProps = {
    value: string;
    onChangeText: ((text: string) => void);
}

const InputText = ({ value, onChangeText }: InputProps) => {
    const styles = StyleSheet.create({
        input: {
            width: '80%',
            backgroundColor: '#FFF',
            borderRadius: 12,
            padding: 12,
            color: '#666967'
        },
    });
    return (
        <TextInput 
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

export default InputText;