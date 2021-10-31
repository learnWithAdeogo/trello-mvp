import {configureStore} from '@reduxjs/toolkit';
import listsReducer from './slice/listsSlice';
import boardsReducer from './slice/boardsSlice';
import {loadState, saveState} from "../localStorage";

const store = configureStore({
    reducer: {
        lists: listsReducer,
        boards: boardsReducer
    },
    preloadedState: loadState()
});

store.subscribe(() => {
    saveState(store.getState())
});

export default store;
