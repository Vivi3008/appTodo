import styled, { css } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native';

interface ItemProps {
    check?: boolean;
}


export const Container = styled.View`
    flex:1;
    margin: 0;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: black;
`;

export const Input = styled.TextInput`
    height: 100%;
    width: 200px;
    padding: 8px;
    border: 1px solid #28191A;
    border-radius: 8px;
`

export const Button = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
    activeOpacity: 0.7,
})`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 70px;
    padding: 5px;
    background-color: #65454F;
    border: 1px solid black;
    border-radius: 8px;
`

export const Wrapper = styled.View`
    width: 300px;
    height: 40px;
    flex-direction: row;
    justify-content: space-around;
`

export const Text = styled.Text`
    font-size: 18px;
    color: white;
`
export const Content = styled.View`
    flex: 1;
    margin-top: 30px;
    width: 100%;
`;

export const CheckButton = styled.TouchableOpacity`
    width: auto;
    align-items: center;
    justify-content: center;
    background-color: #C7AD9A;
    padding: 8px;
`;

export const Todo = styled.View`
    flex-direction: row;
    width: 100%;
    height: 30px;
`;

export const ItemCheck = styled.Text<ItemProps>`
    font-size: 18px;
    color: #28191A;
    ${({ check }) => check && css`
    text-decoration : line-through`
    };
`