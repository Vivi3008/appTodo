import React, { useEffect, useState } from 'react';
import { FlatList, Alert, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Loader from '../Loader/Loader';
import {
    Container,
    AddButton,
    Input,
    Wrapper,
    CheckButton,
    Text,
    Content,
    ItemCheck,
    ItemTodo,
    Todo
} from './styles';
import api from '../../services/api';
interface Todo {
    id: number,
    task: string,
    status: boolean,
}

export function Body() {
    const [inputValue, setInputValue] = useState('');
    const [todo, setTodo] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);

    const handleCheckBox = async (id: number, statusParam: boolean) => {
        const status = !statusParam ? { status: true } : { status: false };

        await api.put(`update/${id}`, status)
        setLoading(false);
    }

    const handleDeleteItem = async (id: number) => {
        await api.delete(`delete/${id}`).then(res => {
            res.status === 200 ? Alert.alert('Deletado com sucesso!') :
                Alert.alert('Erro ao deletar!')
        })
        setLoading(false);
    }

    const handleInput = (value: string) => {
        const valueString = value.toString();
        setInputValue(valueString);
    }

    async function fetchData() {
        const { data } = await api.get('/');

        const todoArray: any = [];

        data.forEach(item => {
            todoArray.push({
                id: item.id,
                task: item.task,
                status: item.status,
            })
        })

        setTodo(todoArray);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [todo]);

    const handleTodo = async () => {
        const todo = { todo: inputValue }
        await api.post('insert', todo).then(res => {
            res.status === 200 ? Alert.alert('Task added sucessfull!') :
                Alert.alert('Error to added task!')
        })
    }

    return (
        <Container>
            <Wrapper>
                <Input placeholder={"Type a thing to do"}
                    value={inputValue}
                    onChangeText={handleInput}
                />
                <AddButton
                    onPress={handleTodo}
                >
                    <Text>Add</Text>
                </AddButton>
            </Wrapper>

            {loading ? <Loader /> : (
                <Content>
                    <Todo>
                        <FlatList
                            data={todo}
                            keyExtractor={(item) => String(item.id)}
                            showsVerticalScrollIndicator={true}
                            renderItem={({ item }) => (
                                <ItemTodo>
                                    <CheckButton
                                        onPress={() => handleCheckBox(item.id, item.status)}
                                        check={item.status}
                                    >
                                        {item.status && (
                                            <AntDesign name="check" size={24} color="black" />
                                        )}

                                    </CheckButton>
                                    <ItemCheck
                                        id={item.id}
                                        check={item.status}
                                    >
                                        {item.task}
                                    </ItemCheck>
                                    <TouchableOpacity
                                        onPress={() => handleDeleteItem(item.id)}
                                    >
                                        <AntDesign name="delete" size={20} color="black" />
                                    </TouchableOpacity>
                                </ItemTodo>
                            )}
                        />
                    </Todo>


                </Content>
            )}

        </Container>
    )
}

