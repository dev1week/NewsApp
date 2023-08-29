import React, { useCallback } from "react";
import {Header} from "../components/Header/Header"
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../components/Icon";
export const LinkListScreen=()=>{
    const navigation = useNavigation();
    const safeAreaInset = useSafeAreaInsets(); 

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
        {/* 화면목록 */}
            <View style={{flex:1}}>
                <Button onPress={onPressButton}>
                    <Text> Link Detail 이동</Text>
                </Button>
                <Button onPress={onPressAddButton}>
                    <Text> Add Link 이동 </Text>
                </Button>
            </View>
        {/* 추가버튼 */}
            <View style={{position : 'absolute', right:24, bottom:24+safeAreaInset.bottom}}>
                <Button onPress={onPressAddButton}>
                    <View style={{width:52, height:52, borderRadius:26, alignItems:'center', justifyContent:'center', backgroundColor:"black"}}>
                        <Icon name='add' color='white' size={32}/>
                    </View>
                </Button>
            </View>
        </View>
    )
}
