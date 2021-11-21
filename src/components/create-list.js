import React, {useEffect, useRef, useState} from 'react';
import PlaceholderAddAction from "./placeholder-add-action";
import styled from "styled-components";
import FormAddList from "./form-add-list";
import {useDispatch} from "react-redux";
import {addList} from "../redux/slice/listsSlice";
import {addListToBoard} from "../redux/slice/boardsSlice";
import {randomId} from "../utils";

const Container = styled.div`
    border-radius: 3px;
    cursor: pointer;
    height: auto;
    min-height: 32px;
    padding: 4px;
    display: block;
    color: white;
    background: rgba(0, 0, 0, 0.15);
    transition: background 0.3s ease;
    position: relative;
`;

const CreateList = ({boardId}) => {
    const dispatch = useDispatch();
    const containerRef = useRef();
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!showForm) {
                return;
            }

            if (containerRef && containerRef.current.contains(event.target)) {
                //if the event that triggered the was
                // from a target/element in the container, we do not want to
                // dismiss the form
                return;
            }

            setShowForm(false);
        }

        if (showForm) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [showForm]);

    const onShowForm = () => {
        setShowForm(true);
    }

    const onHideForm = () => {
        setShowForm(false);
    }

    function createList(title) {
        const listId = randomId();
        dispatch(addList({listId, title}));
        dispatch(addListToBoard({listId, boardId}))
    }

    const onSubmit = (title) => {
        onHideForm();
        createList(title);
    }

    return (
        <Container ref={containerRef}>
            {!showForm && <PlaceholderAddAction actionContent={"Add another list"} onClick={onShowForm}/>}
            {showForm && <FormAddList actionContent={'Add List'} onClose={onHideForm} onSubmit={onSubmit}/>}
        </Container>
    );
};

export default CreateList;