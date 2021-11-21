import {configureStore} from '@reduxjs/toolkit';
import listsReducer from './slice/listsSlice';
import boardsReducer from './slice/boardsSlice';
import tasksReducer from './slice/tasksSlice';
import {loadState, saveState} from "../localStorage";

const store = configureStore({
    reducer: {
        lists: listsReducer,
        boards: boardsReducer,
        tasks: tasksReducer
    },
    preloadedState: loadState()
});

store.subscribe(() => {
    saveState(store.getState())
});

export default store;
