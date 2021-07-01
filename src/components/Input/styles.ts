import styled, { css } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native';


export const Wrapper = styled.View`
    width: 300px;
    height: 40px;
    margin-top: 80px;
    flex-direction: row;
    justify-content: space-around;
`

export const Input = styled.TextInput`
    height: 100%;
    width: 200px;
    padding: 8px;
    background-color: white;
    border: 1px solid #28191A; 
    border-radius: 8px;
`
export const AddButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 70px;
    padding: 5px;
    background-color: #65454F;
    border-radius: 8px;
`
export const Text = styled.Text`
    font-size: 18px;
    color: white;
`