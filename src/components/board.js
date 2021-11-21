import React from 'react';
import List from "./list";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";
import {useSelector} from "react-redux";
import CreateList from "./create-list";
import Column from "./column";

const Container = styled.div`
  margin-top: 8px;
  height: 100vh;
`;

const Title = styled.span`
    margin-left: 8px;
    padding: 0 16px;
    border-radius: 3px;
    font-weight: 700;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    &:hover,
    &:focus {
        background: rgba(255, 255, 255, 0.4);
    }
    &:active {
        background: rgba(255, 255, 255, 0.6);
        transition: background 0s ease;
    }
    transition: background 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, color 0.3s ease; 
`;

const ListContainer = styled.div`
    display: flex;
    margin-top: 8px;
    overflow-x: auto;
`;

const Board = ({id}) => {
    const board = useSelector((state) => state.boards.boards[id]);

    return (
        <Container>
            <Title>{board.title}</Title>
            <Droppable droppableId={id} direction={'horizontal'} type={"LIST"}>
                {provided => <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
                    {board.listIds.map((listId, index) => <List key={listId} id={listId} index={index}/>)}
                    {provided.placeholder}
                    {/*Right here*/}
                    <Column><CreateList boardId={id}/></Column>
                </ListContainer>}
            </Droppable>
        </Container>
    );
};

export default Board;
