import React, { useCallback } from "react";
import {Header} from "../components/Header/Header"
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
export const LinkListScreen=()=>{
    const navigation = useNavigation();

    const onPressButton = useCallback(()=>{
        navigation.navigate("LinkDetail")
    },[])

    const onPressAddButton = useCallback(()=>{
        navigation.navigate("AddLink")
    },[])

    return(
        <View style={{flex:1}}> 
            <Header>
                <Header.Group>
                    <Header.Title title='LINK LIST'> </Header.Title>
                </Header.Group>
            </Header>
            <View style={{flex:1}}>
                <Button onPress={onPressButton}>
                    <Text> Link Detail 이동</Text>
                </Button>
                <Button onPress={onPressAddButton}>
                    <Text> Add Link 이동 </Text>
                </Button>

            </View>
        </View>
    )
}
