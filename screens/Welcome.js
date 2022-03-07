import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";

import{
    
    InnerContainer,
    
    PageTitle,
    SubTitle,
    StyledFormArea,
    
    StyledButton,
    ButtonText,
    Colors,

    Line,
   
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from '../components/styles';
const {brand, darkLight, primary} = Colors;

const Welcome = ({navigation}) => {
    
    return (
        <>
           <StatusBar style="light" />
           <InnerContainer>
           <WelcomeImage resizeMode="cover" source={require('../assets/image/10.png')} />
              
              <WelcomeContainer>
              <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
              <SubTitle welcome={true}>Name</SubTitle>
              <SubTitle welcome={true}>Email</SubTitle>

                 <StyledFormArea>
                 <Avatar resizeMode="cover" source={require('../assets/image/3.png')} />
                     
                      <Line />
                      <StyledButton onPress={() => {navigation.navigate("Login")}}>
                          
                          <ButtonText>Log Out</ButtonText>
                      </StyledButton>
                      
                  </StyledFormArea>
                  
              </WelcomeContainer>
           </InnerContainer>
        </>
    );
};



export default Welcome;