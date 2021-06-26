import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Header } from './src/components/Header/Header'
import { Container } from './global';
import { Body } from './src/components/Body/Body';

export default function App() {

  return (
    <Container>
      <StatusBar style="auto" />
      <Body />
    </Container>
  );
}

