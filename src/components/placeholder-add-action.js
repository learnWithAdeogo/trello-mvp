import React from 'react';
import styled from "styled-components";
import Icon from "./icon";

const Paragraph = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    white-space: normal;
`;

const ActionPlaceholder = styled.div`
    display: flex;
    align-items: center;
    padding: 7px;
    
    ${Paragraph} {
        margin: 0;
    }
    
    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;


const PlaceholderAddAction = ({actionContent, ...props}) => {
    return (
        <ActionPlaceholder {...props}>
            <Icon name={'Plus'}/>
            <Paragraph>{actionContent}</Paragraph>
        </ActionPlaceholder>
    );
};

export default PlaceholderAddAction;