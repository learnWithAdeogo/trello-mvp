import {createSlice} from '@reduxjs/toolkit';
import initialData from '../../initial-data.json';

export const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: initialData.lists
    },
    reducers: {
        removeTaskFromList: (state, action) => {
            const taskIdIndex = action.payload.taskIdIndex;
            const listId = action.payload.listId;

            const taskIdsForList = Array.from(state.lists[listId].taskIds);

            taskIdsForList.splice(taskIdIndex, 1);

            state.lists[listId].taskIds = taskIdsForList
        },
        addTaskToListAtPosition: (state, action) => {
            const taskId = action.payload.taskId;
            const newTaskIndex = action.payload.newTaskIndex;
            const listId = action.payload.listId;
            const taskIdsForList = Array.from(state.lists[listId].taskIds);

            taskIdsForList.splice(newTaskIndex, 0, taskId);

            state.lists[listId].taskIds = taskIdsForList;
        },
        addTaskToList: (state, action) => {
            const taskId = action.payload.taskId;
            const listId = action.payload.listId;
            const taskIdsForList = Array.from(state.lists[listId].taskIds);

            taskIdsForList.push(taskId);

            state.lists[listId].taskIds = taskIdsForList;
        },
        addList: (state, action) => {
            const listId = action.payload.listId;
            const listTitle = action.payload.title;
            state.lists[listId] = {
                id: listId,
                title: listTitle,
                taskIds: []
            }
        }
    },
});

export const {removeTaskFromList, addTaskToListAtPosition, addTaskToList, addList} = listsSlice.actions

export default listsSlice.reducer
