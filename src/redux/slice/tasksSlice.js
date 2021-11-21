import {createSlice} from "@reduxjs/toolkit";
import initialData from '../../initial-data.json';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: initialData.tasks
    },
    reducers: {
        addTask: (state, action) => {
            const taskId = action.payload.taskId;
            const content = action.payload.content;
            state.tasks[taskId] = {
                id: taskId,
                content
            }
        }
    }
});

export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer;