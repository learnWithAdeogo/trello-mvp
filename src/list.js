import React from 'react';
import styled from "styled-components";
import Task from "./task";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {useSelector} from "react-redux";

const Title = styled.div`
    font-weight: 700;
    padding: 8px 12px 6px 16px;
`;

const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 150px;
`;

const Column = styled.div`
    min-width: 272px;
    max-width: 272px;
    height: 100%;
    margin: 0 4px;
    display: inline-block;
    vertical-align: top;
    border-radius: 3px;
    background: #E2E4E6;
    &:first-child {
        margin-left: 8px;
    }
    &:last-child {
        margin-right: 8px;
    }
`;


const List = ({id, index}) => {
    const list = useSelector((state) => state.lists.lists[id]);

    return (
        <Draggable draggableId={id} index={index}>
            {provided =>
                <Column ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Title>{list.title}</Title>
                    <Droppable droppableId={id} type={'TASK'}>
                        {provided => <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                            {list.taskIds.map((taskId, index) => <Task key={taskId} id={taskId} index={index}/>)}
                            {provided.placeholder}
                        </TaskList>}
                    </Droppable>
                </Column>}
        </Draggable>
    );
};

export default List;
