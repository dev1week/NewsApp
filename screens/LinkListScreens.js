import React, { useCallback } from "react";
import {Header} from "../components/Header/Header"
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../components/Icon";
import { useRecoilValue } from "recoil";
import { atomLinkList } from "../states/atomLinkList";
import { Typography } from "../components/Typography";
import { Spacer } from "../components/Spacer";
export const LinkListScreen=()=>{
    const navigation = useNavigation();
    const safeAreaInset = useSafeAreaInsets(); 

    const data = useRecoilValue(atomLinkList); 
    
    // item : 눌린 목록의 세부사항 
    const onPressListItem = useCallback((item)=>{
        navigation.navigate("LinkDetail", {item})
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
            
            <FlatList 
                style={{flex:1,}}
                data={data.list}
                renderItem={({item})=>{
                    return(
                        <Button onPress={()=>onPressListItem(item)} paddingHorizontal={24} paddingVertical={24}>
                            <View>
                                <Typography fontSize={20}>
                                    {item.link} 
                                </Typography>
                                <Spacer space={4}/>
                                {/* 타이틀이 없을 경우 공백 처리 */}
                                <Typography fontSize={14} color='gray'>
                                    {item.title !== ''? `${item.title.slice(0,20)} |` :''}
                                    {new Date(item.createdAt).toLocaleString()}
                                </Typography>
                            </View>
                        </Button>
                    )
                }}
            />

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
