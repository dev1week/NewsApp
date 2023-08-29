import React from "react";
import {Header} from "../components/Header/Header"
import { View, Text } from "react-native";

export const LinkListScreen=()=>{
    return(
        <View style={{flex:1}}> 
            <Header>
                <Header.Group>
                    <Header.Title title='LINK LIST'> </Header.Title>
                </Header.Group>
            </Header>
        </View>
    )
}
