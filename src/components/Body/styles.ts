import styled, { css } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native';

interface ItemProps {
    id: number;
    itemTodo?: number;
    check?: boolean;
}

interface ButtonProps extends TouchableOpacityProps {
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

export const CheckButton = styled.TouchableOpacity<ButtonProps>`
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #2F855A;
    ${({ check }) => check && css`
        background-color:#48BB78`
    };
`

export const Wrapper = styled.View`
    width: 300px;
    height: 40px;
    margin-top: 80px;
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

export const Todo = styled.View`
    flex: 1;
    margin: 0px 20px;
    width: 100%;
    height: 50px;
`;

export const ItemTodo = styled.View`
    flex-direction: row;
    margin: 10px 10px;
`;

export const ItemCheck = styled.Text<ItemProps>`
    font-size: 18px;
    margin: 0px 20px 0px 10px;
    color: #28191A;
    text-transform: uppercase;
    ${({ check }) => check && css`
     text-decoration : line-through`
    };
`