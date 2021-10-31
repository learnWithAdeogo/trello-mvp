import React from 'react';
import styled from "styled-components";
import Task from "./task";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {useSelector} from "react-redux";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 250px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 150px;
`;


const List = ({id, index}) => {
    const list = useSelector((state) => state.lists.lists[id]);

    return (
        <Draggable draggableId={id} index={index}>
            {provided => <Container ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
                <Title>{list.title}</Title>
                <Droppable droppableId={id} type={'TASK'}>
                    {provided => <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                        {list.taskIds.map((taskId, index) => <Task key={taskId} id={taskId} index={index}/>)}
                        {provided.placeholder}
                    </TaskList>}
                </Droppable>
            </Container>}
        </Draggable>
    );
};

export default List;
