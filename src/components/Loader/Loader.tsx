import React from 'react';
import { Chase } from 'react-native-animated-spinkit';
import { Container } from './styles';

const Loader = () => {
    return (
        <Container>
            <Chase size={70} color="#28191a" />
        </Container>
    )
}

export default Loader;