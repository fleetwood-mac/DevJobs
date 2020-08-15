import { View, Image, Text } from "react-native"
import React from 'react';
import { Job } from "../../model/job";

type JobCardProps = {
    job: Job
}

const JobCardSmall = ({ job }: JobCardProps) =>
{
    let {description,company} = job;
    return(
        <View style={{width:'100%',height:50,backgroundColor:"white",borderRadius:10,padding:12,paddingLeft:14,display:'flex',flexDirection:'column',marginBottom:10}}>
      
            <View style={{display:'flex',justifyContent:'flex-end',flex:1}}>
                <View style={{height:30,display:'flex',flexDirection:'row',marginLeft:-5}}>
                    {/* <Image source={image} style={{width:35,height:35,marginRight:10}}/> */}
                    <View style={{display:'flex',flexDirection:'column',paddingVertical:4}}>
                        <Text style={{color:"black", fontFamily:'Roboto_500Medium',fontSize:12, marginBottom:1}}>{description}</Text>
                        <Text style={{color:"black", fontFamily:'Roboto_100Thin',fontSize:10}}>{company}</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default JobCardSmall