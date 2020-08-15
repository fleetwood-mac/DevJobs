import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, GestureResponderEvent } from 'react-native';
import axios from 'axios';
import UserImg from '../../../assets/17004.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

type ImageButtonProps = {
    source: {
        uri: string,
    },
    onPress?: ((event: GestureResponderEvent) => void),
    theme: 'black' | 'white';
}

const ImageButton = ({ source, onPress, theme }: ImageButtonProps) => {
    const styles = StyleSheet.create({
        container: {
            width: 40,
            height: 40,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:15,
            backgroundColor: theme
        },
        image: {
            width: 28,
            height: 28,
        }
    });
    
    const [uri, setUri] = useState<string>('');
    
    useEffect(() =>  {
        const getRedirectUri = async () => {
            const response = await axios(source.uri);
            console.log(response.request.responseURL)
            setUri(response.request.responseURL);
        }

        //getRedirectUri();
    }, []);

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={UserImg} style={styles.image}/>
            </View>
        </TouchableOpacity>
    );
}

export default ImageButton