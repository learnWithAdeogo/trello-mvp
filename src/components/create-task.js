import React, {useState} from 'react';
import styled from "styled-components";
import PlaceholderAddAction from "./placeholder-add-action";
import FormAddTask from "./form-add-task";
import {randomId} from "../utils";
import {useDispatch} from "react-redux";
import {addTask} from "../redux/slice/tasksSlice";
import {addTaskToList} from "../redux/slice/listsSlice";

const Container = styled.div`
    cursor: pointer;
    transition: background 0.3s ease;
`;

const CreateTask = ({listId, ...props}) => {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);

    const onShowForm = _ => {
        setShowForm(true);
    }

    const onHideForm = _ => {
        setShowForm(false);
    }

    const onCreateTask = (content) => {
        if (!content) {
            return;
        }
        const taskId = randomId();
        dispatch(addTask({taskId, content}));
        dispatch(addTaskToList({taskId, listId}));
    }

    return (
        <Container {...props}>
            {!showForm && <PlaceholderAddAction onClick={onShowForm} actionContent={'Add another task'}/>}
            {showForm && <FormAddTask onClose={onHideForm} onSubmit={onCreateTask}/>}
        </Container>
    );
};

export default CreateTask;