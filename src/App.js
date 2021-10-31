import {DragDropContext} from 'react-beautiful-dnd';
import Board from "./board";
import {useDispatch} from "react-redux";
import {addTaskToListAtPosition, removeTaskFromList} from "./redux/slice/listsSlice";
import {moveListToPositionInBoard} from "./redux/slice/boardsSlice";

function App() {
    const dispatch = useDispatch();

    const onDragEnd = result => {
        const {source, destination, draggableId, type} = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        if (type === 'TASK') {
            dispatch(removeTaskFromList({
                listId: source.droppableId,
                taskIdIndex: source.index
            }));
            dispatch(addTaskToListAtPosition({
                listId: destination.droppableId,
                taskId: draggableId,
                newTaskIndex: destination.index
            }));
        }

        if (type === 'LIST') {
            dispatch(moveListToPositionInBoard({
                listId: draggableId,
                previousListIndex: source.index,
                newListIndex: destination.index,
                boardId: destination.droppableId
            }));
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Board id={"board-1"}/>
        </DragDropContext>
    );
}

export default App;
