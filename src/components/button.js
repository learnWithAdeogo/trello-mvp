import React from 'react';
import styled, {css} from "styled-components";
import Icon from "./icon";
import {ifNotProp} from "styled-tools";


const sizeStyles = {
    "MEDIUM": css`
        height: 32px;
        font-size: 14px;
        padding: 0 16px;
    `,
    "LARGE": css`
        height: 40px;
        font-size: 16px;
        padding: 0 16px;
    `
}

const variantStyles = {
    "LightGrey": css`
       color: #333333;
       background: #E2E4E6;
       box-shadow: 0 1px 0 0 #D6DADC;
       &:hover,
       &:focus {
         background: #D6DADC;
         box-shadow: 0 1px 0 0 #838C91;
       }
       &:active {
         background: #838C91;
         color: #FFFFFF;
         transition: background 0s ease;
       }
    `,
    "Green": css`
       color: #FFFFFF;
       background: #5AAC44;
       box-shadow: 0 1px 0 0 #519839;
       &:hover,
       &:focus {
         background: #519839;
         box-shadow: 0 1px 0 0 #49852E;
       }
       &:active {
         background: #49852E;
         transition: background 0s ease;
       }
    `
}

const getVariantStyle = ({variant, iconButton}) => {
    if (iconButton) {
        return null;
    }
    return variantStyles[variant];
}

const getSizeStyle = ({size}) => {
    return sizeStyles[size];
}

const getIconButtonStyles = ({iconButton}) => {
    if (!iconButton) {
        return null
    }

    return css`
        min-width: 32px;
        height: 32px;
        padding: ${ifNotProp('hasIconText', 0)};
        justify-content: center;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
        &:hover,
        &:focus {
          background: rgba(255, 255, 255, 0.4);
        }
        &:active {
          background: rgba(255, 255, 255, 0.6);
          transition: background 0s ease;
        }
    `
}

const styles = css`
    border-radius: 3px;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    white-space: nowrap;
    transition: background 0.3s ease, box-shadow 0.3s, opacity  0.3s, color  0.3s;
    
    &[disabled] {
        pointer-events: none;
        color: #A5ACB0;
        background: #F9F9F9;
        box-shadow: none;
        transition: all 50ms ease;
    }
    
    ${getVariantStyle}
    ${getSizeStyle}
    ${getIconButtonStyles}
`;

const StyledButton = styled.button`
    ${styles}
`;


const Button = ({children, icon, iconText, ...props}) => {

    const isIconButton = !children;
    const buttonIcon = icon && (
        <Icon hasText={Boolean(children) || Boolean(iconText)} name={icon}/>
    )

    return (
        <StyledButton
            iconButton={isIconButton}
            hasIconText={Boolean(iconText)}
            {...props}
        >
            {buttonIcon}
            {iconText}
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    variant: 'LightGrey',
    size: 'MEDIUM'
}

export default Button;