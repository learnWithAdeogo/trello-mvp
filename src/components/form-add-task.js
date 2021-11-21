import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Button from "./button";


const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 8px;
`;

const PaperInput = styled.div`
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
    padding: 8px;
    overflow: hidden;
    position: relative;
    margin-bottom: 4px;
    height: auto; 
`;

const ContentInput = styled.textarea`
      width: 100%;
      box-sizing: border-box;
      -webkit-appearance: none;
      display: block;
      border-radius: 3px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      border: none;
      background: transparent;
      box-shadow: none;
      resize: none;
      max-height: 162px;
      min-height: 54px;
      word-wrap: break-word;
      padding: 0;
      &:hover,
      &:focus {
        border: none;
        background: transparent;
        box-shadow: none;
      }
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

const FormAddTask = (props) => {
    const [content, setContent] = useState('');
    const inputRef = useRef();
    const formRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    useEffect(() => {
        const handleClickOutside = event => {
            if (formRef && formRef.current && !formRef.current.contains(event.target)) {
                props.onClose();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [props.onClose, formRef]);

    const onContentChange = (event) => {
        setContent(event.target.value);
        resizeInput();
    }

    const resizeInput = () => {
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }

    function clearForm() {
        setContent('');
        props.onClose();
    }

    const onClose = () => {
        clearForm();
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(content);
        inputRef.current.focus();
        clearForm();
    }

    const handleKeyDown = event => {
        if (event.which === 27) {
            onClose();
        }

        if (event.which === 13){
            event.preventDefault();
            props.onSubmit(content);
            clearForm();
        }
    }

    return (
        <Form {...props} ref={formRef} onSubmit={onSubmit}>
            <PaperInput>
                <ContentInput
                    ref={inputRef}
                    placeholder={'Enter a title for this card...'}
                    value={content}
                    onChange={onContentChange}
                    onBlur={resizeInput}
                    onKeyDown={handleKeyDown}
                />
            </PaperInput>
            <Action>
                <Button type={'submit'} variant={'Green'}>Add Card</Button>
                <ButtonClose type={'button'} icon={'Close'} onClick={onClose}/>
            </Action>
        </Form>
    );
};

export default FormAddTask;