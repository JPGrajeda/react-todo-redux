// los reducers son los unicos que hacen los cambios en el estado global

// se importa los actionType
import { UPDATE_VALUE, SAVE_TODO } from "../actions/actionTypes";

const INITIAL_STATE = {
    value: "",
    todos: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UPDATE_VALUE:
            return{
                ...state,
                value: action.payload
            };

        case SAVE_TODO:

            const todos = state.todos;
            todos.push({check: false , description: state.value})

            return{
                ...state,
                todos
            };

        default:
            return state;
    }

};