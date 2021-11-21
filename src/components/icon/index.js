import React from 'react';
import styled from "styled-components";
import {ifProp} from "styled-tools";
import {oneOf, string} from "prop-types";

const SvgIcon = styled.span`
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    color: inherit;
    margin-right: ${ifProp('hasText', '4px')};
    
    & > svg {
        font-size: ${ifProp({size: 'medium'}, '24px', '20px')}
        stroke-width: ${ifProp({size: 'medium'}, '2px', '1.5px')}
    }
`;

const Icon = ({name, ...props}) => {
    let Component;
    try {
        Component = require(`./icons/${name}`).default;
    } catch (e) {
        Component = require('./icons/Help').default;
    }

    return (
        <SvgIcon {...props}>
            <Component/>
        </SvgIcon>
    )
};

Icon.propTypes = {
    name: string.isRequired,
    size: oneOf(['medium', 'small'])
}

Icon.defaultTypes = {
    size: 'medium'
}

export default Icon;