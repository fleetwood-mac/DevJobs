import React from 'react';
import { View, StyleSheet, NativeSyntheticEvent, TextInputEndEditingEventData } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// import { Container } from './styles';
type InputProps = {
    value: string;
    placeholder ?: string;
    onChangeText: ((text: string) => void);
    onEndEditing ?: ((event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void);
}

const InputText = ({ value, onChangeText, onEndEditing, placeholder }: InputProps) => {
    const styles = StyleSheet.create({
        input: {
            width: '80%',
            backgroundColor: '#FFF',
            borderRadius: 12,
            padding: 12,
            color: '#666967',
            shadowColor:"black",
            shadowOpacity:0.3,
            shadowOffset:{width:0,height:2}
        },
    });
    return (
        <TextInput 
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            placeholder= {placeholder}
        />
    );
}

export default InputText;