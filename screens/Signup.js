import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, TouchableOpacity } from "react-native";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import  DateTimePicker from "@react-native-community/datetimepicker";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TestLink,
    TestLinkContent,
} from '../components/styles';
const {brand, darkLight, primary} = Colors;

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const[dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }
    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
           <StatusBar style="dark" />
           <InnerContainer>
              
              <PageTitle>XYZ</PageTitle>
              <SubTitle>Account Sign-up</SubTitle>

              {show && (
                  <DateTimePicker
                   testID="dateTimePicker"
                   value={date}
                   mode="date"
                   is24Hour={true}
                   display='default'
                   onChange={onChange}


                   />
              )}
              <Formik initialValues={{fullName: '', email: '', dateOfBirth: '', password: '',confirmPassword: ''}}
                  onSubmit={(values) => {
                      console.log(values);
                      navigation.navigate("Welcome");
                  }}>

                  {({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>
                      <MyTextInput 
                          label="Full-Name"
                          icon="person"
                          placeholder="Vaibhav Shukla"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('fullName')}
                          onBlur={handleBlur('fullName')}
                          value={values.fullName}
                          
                      />

                        <MyTextInput 
                          label="Email Address"
                          icon="mail"
                          placeholder="andyj@gmail.com"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                          keyboardType="email-address"
                         />

                        <MyTextInput 
                          label="Date-of-Birth"
                          icon="calendar"
                          placeholder="YYYY-MM-DD"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('dateOfBirth')}
                          onBlur={handleBlur('dateOfBirth')}
                          value={dob ? dob.toDateString() : ''}
                          isDate={true}
                          editable={false}
                          showDatePicker={showDatePicker}
                          
                        />

                       <MyTextInput 
                          label="Password"
                          icon="lock"
                          placeholder="**********"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                          secureTextEntry={hidePassword}
                          
                          isPassword={true}
                          hidePassword={hidePassword}
                          setHidePassword={setHidePassword}
                      />

                       <MyTextInput 
                          label="Confirm-Password"
                          icon="lock"
                          placeholder="**********"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('confirmPassword')}
                          onBlur={handleBlur('confirmPassword')}
                          value={values.confirmPassword}
                          secureTextEntry={hidePassword}
                          
                          isPassword={true}
                          hidePassword={hidePassword}
                          setHidePassword={setHidePassword}
                      />  
                      <MsgBox>...</MsgBox>

                      <StyledButton onPress={handleSubmit}>
                          <ButtonText>Sign Up</ButtonText>
                      </StyledButton>
                      <Line />
                      
                      <ExtraView>
                          <ExtraText>Already have an account?</ExtraText>
                          <TestLink onPress={() => navigation.navigate("Login")}>
                              <TestLinkContent>Login</TestLinkContent>
                          </TestLink>
                      </ExtraView>
                  </StyledFormArea>}
                  
              </Formik>
           </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, hidePassword, setHidePassword, isDate, showDatePicker, isPassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : "md-eye"} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );

};

export default Signup;