import React, { useEffect, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

interface Todo {
    todo: [string];
}

export function Body() {
    const [toggleCheckbox, setToggleCheckbox] = useState(false);
    const [item, setItem] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [todo, setTodo] = useState([]);

    const handleCheckBox = (value: boolean) => {
        setToggleCheckbox(value);
        setItem(true);
    }

    const handleInput = (value: string) => {
        setInputValue(value);
    }

    const storeData = async (value: any) => {
        setInputValue("");

        try {
            const array: Array<Object> = [];

            array.push(['@key', value]);

            await AsyncStorage.multiSet(array);
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.multiGet(['@key'])
            if (value !== null) {
                setTodo(value);
            }
            console.log(todo);
        } catch (e) {
            // error reading value
            console.log(e)
        }
    }

    const handleTodo = () => {
        /*    const array: Array<string> = [];
   
           array.push(inputValue); */

        storeData(inputValue);
    }

    useEffect(() => {
        getData();
    }, [todo]);



    return (
        <Container>
            <Wrapper>
                <Input placeholder={"Type a thing to do"} value={inputValue} onChangeText={handleInput} />
                <Button
                    onPress={handleTodo}
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
                            {item || "No one to do..."}
                        </ItemCheck>
                    </Todo>
                })}

            </Content>
        </Container>
    )
}

