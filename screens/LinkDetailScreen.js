import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { HeaderIcon } from "../components/Header/HeaderButton";
import { Spacer } from "../components/Spacer";
import { useNavigation } from "@react-navigation/native";


export const LinkDetailScreen = ()=>{
    const navigation = useNavigation();
    const onPressBack = useCallback(()=>{
        navigation.goBack(); 
    }, [])

    return(
        <View>
            <Header>
                <Header.Group>
                    <Header.Icon iconName='arrow-back'onPress={onPressBack}></Header.Icon>
                    <Spacer space={12} horizontal ></Spacer>
                    <Header.Title title= 'LINK DETAIL'></Header.Title>
                </Header.Group>
            </Header>
        </View>

    )
}