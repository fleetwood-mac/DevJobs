import react from 'react';

import { View, Text} from "react-native";

export default function header(props:ParamsHeader)
{
    if(props.hasLogo && props.hasImage)
    {
        return(
            <View>
                
            </View>
        )
    }
        
}

interface ParamsHeader
{
    hasImage ?: boolean;
    hasBackButton ?: boolean;
    hasLogo ?: boolean
}