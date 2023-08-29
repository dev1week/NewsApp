import React, { useCallback, useState } from "react";
import { Header } from "../components/Header/Header";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";


import { SingleLineInput } from "../components/SingleLineInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSetRecoilState } from "recoil";
import { atomLinkList } from "../states/atomLinkList";
export const AddLinkScreen =()=>{
    const navigation = useNavigation(); 
    const safeAreaInset = useSafeAreaInsets(); 

    // url 저장 
    const [url, setUrl] = useState('');
    const updateList = useSetRecoilState(atomLinkList);

    const onPressSave = useCallback(()=>{
        console.log("test");
        console.log(url);
        if(url==='')return;

        updateList((prevState)=>{
            const list = [
                {
                    title:'',
                    image:'',
                    link:url,
                    createdAt: new Date().toISOString(), 
                }
            ]
            return {
                //기존 list에 추가 
                list:list.concat(prevState.list)
            }
        })
        setUrl('');
    }, [url])

    // 뒤로가기 
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

            <Button onPress={onPressSave}>
                <View style={{backgroundColor: url===''? 'gray' : 'black'}}> 
                    <View style={{height:52, alignItems: 'center', justifyContent: 'center'}}>
                        <Typography color='white' fontSize={18}>저장하기</Typography>
                    </View>
                    <Spacer space={safeAreaInset.bottom}/>
                </View>
               
            </Button>
        </View>
    )


}

