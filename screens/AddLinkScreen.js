import React, { useCallback } from "react";
import { Header } from "../components/Header/Header";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";

export const AddLinkScreen =()=>{
    const navigation = useNavigation(); 
    
    const onPressBack = useCallback(()=>{
        navigation.goBack(); 
    },[])

    return(
        <View> 
            <Header>
                <Header.Group>
                    
                    <Header.Icon iconName='arrow-back' onPress={onPressBack}></Header.Icon>
                    <Spacer space={12} horizontal></Spacer>
                    <Header.Title title = "AddLinkScreen"></Header.Title>
                </Header.Group>
            </Header>
        </View>
    )


}

