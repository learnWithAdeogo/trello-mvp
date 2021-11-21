import React from 'react';
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";
import {useSelector} from "react-redux";

const Container = styled.div`
  border-radius: 4px;
  padding: 8px;
  margin: 0px 8px 8px 8px;
  background: white;
  &:hover {
    background-color: #f4f5f7;
  }
`;

const Task = ({id, index}) => {
    const task = useSelector((state) => state.tasks.tasks[id]);

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => <Container {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef} isDragging={snapshot.isDragging}>
                {task.content}
            </Container>}
        </Draggable>
    );
};

export default Task;
