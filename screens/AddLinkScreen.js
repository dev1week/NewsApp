import React, { useCallback, useState } from "react";
import { Header } from "../components/Header/Header";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";

import { SingleLineInput } from "../components/SingleLineInput";
export const AddLinkScreen =()=>{
    const navigation = useNavigation(); 
    const [url, setUrl] = useState('');
    const onPressBack = useCallback(()=>{
        navigation.goBack(); 
    },[])

    return(
        <View style={{flex:1}}> 
            <Header>
                <Header.Group>
                    
                    <Header.Icon iconName='arrow-back' onPress={onPressBack}></Header.Icon>
                    <Spacer space={12} horizontal></Spacer>
                    <Header.Title title = "AddLinkScreen"></Header.Title>
                </Header.Group>
            </Header>
            {/* url 입력창 */}
            <View style={{flex:1, alignItems:'center', justifyContent:'center', paddingHorizontal:24}}>
                <SingleLineInput
                    value={url}
                    onChangeText={setUrl}
                    placeholder='https://example.com'
                />
            </View>
        </View>
    )


}

