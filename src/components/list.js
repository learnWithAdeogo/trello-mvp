import React from 'react';
import styled from "styled-components";
import Task from "./task";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {useSelector} from "react-redux";
import Column from "./column";
import CreateTask from "./create-task";

const Container = styled.div`
    border-radius: 3px;
    background: #E2E4E6;
    display: flex;
    flex-direction: column;
    max-height: 100%;
`;

const Title = styled.div`
    font-weight: 700;
    padding: 8px 12px 6px 16px;
`;

const TasksListsCanvas = styled.div`
  flex-grow: 1;
  min-height: 100px;
  display: flex;
  flex-direction: column;
`;

const TasksListsContainer = styled.div`
    flex: 1;
`;


const List = ({id, index}) => {
    const list = useSelector((state) => state.lists.lists[id]);

    return (
        <Draggable draggableId={id} index={index}>
            {provided =>
                <Column ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Container>
                        <Title>{list.title}</Title>
                        <Droppable droppableId={id} type={'TASK'}>
                            {provided => <TasksListsCanvas ref={provided.innerRef} {...provided.droppableProps}>
                                <TasksListsContainer>
                                    {list.taskIds.map((taskId, index) => <Task key={taskId} id={taskId}
                                                                               index={index}/>)}
                                </TasksListsContainer>
                                {provided.placeholder}
                                <CreateTask listId={id}/>
                            </TasksListsCanvas>}
                        </Droppable>
                    </Container>
                </Column>}
        </Draggable>
    );
};

export default List;
