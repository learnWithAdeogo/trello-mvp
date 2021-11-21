import React, {useState} from 'react';
import styled from "styled-components";
import Input from "./input";
import Button from "./button";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #E2E4E6;
    height: auto;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px;
    border-radius: 3px;
    transition: height 0.3s ease;
`;

const Action = styled.div`
    margin-top: 4px;
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    grid-gap: 4px;
    justify-items: start;
    justify-content: start;
    align-items: center;
`;

const ButtonClose = styled(Button)`
    color: #838C91;
    background: transparent;
`;

const FormAddList = ({actionContent, onClose, ...props}) => {
    const [title, setTitle] = useState('');

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (Boolean(title)) {
            props.onSubmit(title);
        }
    }

    return (
        <Form {...props} onSubmit={onSubmit}>
            <Input autoFocus placehoder={'Enter list title...'} value={title} onChange={onChangeTitle}/>
            <Action>
                <Button type={'submit'} variant={'Green'}>
                    {actionContent}
                </Button>
                <ButtonClose type={'button'} icon={"Close"} onClick={onClose}/>
            </Action>
        </Form>
    );
};

export default FormAddList;