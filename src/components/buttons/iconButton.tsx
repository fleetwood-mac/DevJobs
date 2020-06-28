import React from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome, Feather} from '@expo/vector-icons';

// import { Container } from './styles';
type buttonProps = {
    color: 'black' | 'white';
    iconName: string; 
    onPress?: ((event: GestureResponderEvent) => void);
}

const IconButton = ({ iconName, color, onPress }: buttonProps) => {
    const iconColor = () => {
        if(color == 'black') {
            return 'white';
        }

        return 'black';
    }
    
    const styles = StyleSheet.create({
        button: {
            width:40,
            height:40,
            backgroundColor: color,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:10
        }
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Feather name={iconName} size={28} color={iconColor()}/>
            </View>
        </TouchableOpacity>
    );
}

export default IconButton;