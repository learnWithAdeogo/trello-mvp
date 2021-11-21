import styled from "styled-components";

const Column = styled.div`
    min-width: 272px;
    max-width: 272px;
    height: 100%;
    margin: 0 4px;
    display: inline-block;
    vertical-align: top;
    &:first-child {
        margin-left: 8px;
    }
    &:last-child {
        margin-right: 8px;
    }
`;

export default Column;