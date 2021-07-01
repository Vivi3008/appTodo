import React from 'react';

import { Wrapper, Input, AddButton, Text } from './styles';

const Input = () => {
    return (
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
    );
}

export default Input;