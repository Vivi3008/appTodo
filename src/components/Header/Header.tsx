import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Title } from './styles';

export function Header() {
    return (
        <Container>
            <StatusBar style="auto" />
            <Title>To do List</Title>
        </Container>
    );
}

