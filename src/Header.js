import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
   
`;

const Title = styled.h4`
    color: white;
`;

const Header = () => {
    return (
        <Container>
            <Title>Trello MVP</Title>
        </Container>
    );
};

export default Header;