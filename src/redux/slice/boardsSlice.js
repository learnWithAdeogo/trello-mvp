import {createSlice} from '@reduxjs/toolkit'
import initialData from '../../initial-data.json';

export const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
        boards: initialData.boards
    },
    reducers: {
        moveListToPositionInBoard: (state, action) => {
            const listId = action.payload.listId;
            const previousListIndex = action.payload.previousListIndex;
            const newListIndex = action.payload.newListIndex;
            const boardId = action.payload.boardId;
            const listIdsForBoard = Array.from(state.boards[boardId].listIds);

            listIdsForBoard.splice(previousListIndex, 1);
            listIdsForBoard.splice(newListIndex, 0, listId);
            state.boards[boardId].listIds = listIdsForBoard;
        },
        addListToBoard: (state, action) => {
            const listId = action.payload.listId;
            const boardId = action.payload.boardId;
            const listIdsForBoard = Array.from(state.boards[boardId].listIds);

            listIdsForBoard.push(listId);

            state.boards[boardId].listIds = listIdsForBoard
        }
    },
})

export const {moveListToPositionInBoard, addListToBoard} = boardsSlice.actions

export default boardsSlice.reducer
