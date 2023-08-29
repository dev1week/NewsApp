import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { HeaderIcon } from "../components/Header/HeaderButton";
import { Spacer } from "../components/Spacer";
import { useNavigation, useRoute } from "@react-navigation/native";
import WebView from 'react-native-webview';

export const LinkDetailScreen = ()=>{
    const routes = useRoute(); 
    const navigation = useNavigation();
    const onPressBack = useCallback(()=>{
        navigation.goBack(); 
        console.log(routes.params.item.link);
    }, [])

    return(
        <View style={{flex:1}}>
            <Header>
                <Header.Group>
                    <Header.Icon iconName='arrow-back'onPress={onPressBack}></Header.Icon>
                    <Spacer space={12} horizontal ></Spacer>
                    <Header.Title title= 'LINK DETAIL'></Header.Title>
                </Header.Group>
            </Header>
            <WebView
                style={{flex:1}}
                source={{uri:routes.params.item.link}}
            />
        </View>

    )
}