import React from 'react';
import List from "./list";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";
import {useSelector} from "react-redux";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  height: 100vh;
`;

const Title = styled.h2`
    margin-left: 8px;
`;

const ListContainer = styled.div`
    display: flex;
`;

const Board = ({id}) => {
    const board = useSelector((state) => state.boards.boards[id]);

    return (
        <Container>
            <Title>{board.title}</Title>
            <Droppable droppableId={id} direction={'horizontal'}  type={"LIST"}>
                {provided => <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
                    {board.listIds.map((listId, index) => <List key={listId} id={listId} index={index}/>)}
                    {provided.placeholder}
                </ListContainer>}
            </Droppable>
        </Container>
    );
};

export default Board;
