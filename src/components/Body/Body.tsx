import React, { useState } from 'react';
import { Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import {
    Container,
    Button,
    Input,
    Wrapper,
    Text,
    Content,
    ItemCheck,
    Todo
} from './styles';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

export function Body() {
    const [toggleCheckbox, setToggleCheckbox] = useState(false);
    const [item, setItem] = useState(false);
    const [inputValue, setInputValue] = useState({});
    const [todo, setTodo] = useState([]);

    const handleCheckBox = (value: boolean) => {
        setToggleCheckbox(value);
        setItem(true);
    }

    const handleInput = (event: any) => {
        setInputValue(event.target.value);
    }

    const handleTodo = () => {
        const array = [];

        array.push(inputValue);

        setTodo(array);

    }


    return (
        <Container>
            <Wrapper>
                <Input placeholder={"Type a thing to do"} onChange={handleInput} />
                <Button
                    onPress={() => handleTodo}
                >
                    <Text>Add</Text>
                </Button>
            </Wrapper>

            <Content>

                {todo.map(item => {
                    <Todo>

                        <CheckBox
                            disabled={false}
                            value={toggleCheckbox}
                            onValueChange={value => handleCheckBox(value)}
                        />

                        <ItemCheck
                            check={toggleCheckbox === true ? true : false}
                        >
                            {item}
                        </ItemCheck>
                    </Todo>
                })}

            </Content>
        </Container>
    )
}

