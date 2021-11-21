import styled from "styled-components";

const Input = styled.input`
    border-radius: 3px;
    padding: 8px 8px;
    outline: none;
    height: 32px;
    font-size: 14px;
    font-weight: 700;
    color: #333333;
    border: 1px solid #D6DADC;
    
    &::placeholder {
        color: #838C91;
    }
    
    &:focus {
        border-color: #298FCA;
    }
`;

export default Input;