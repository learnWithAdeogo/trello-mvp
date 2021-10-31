import React from 'react';
import initialData from "./initial-data.json";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}
`;

const Task = ({id, index}) => {
    const getTask = (id) => {
        return initialData.tasks[id];
    }

    const task = getTask(id);

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
