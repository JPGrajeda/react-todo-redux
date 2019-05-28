// los reducers son los unicos que hacen los cambios en el estado global

// se importa los actionType
import { UPDATE_VALUE, SAVE_TODO, DELETE_VALUE } from "../actions/actionTypes";

const INITIAL_STATE = {
    value: "",
    todos: []
};

export default (state = INITIAL_STATE, action) => {
    // copia del estado para que el virtual dom de react sepa que hay cambios
    let todos = JSON.parse(JSON.stringify(state.todos));

    switch (action.type) {

        case UPDATE_VALUE:
            return{
                ...state,
                value: action.payload
            };

        case SAVE_TODO:
            // console.log('reducers: ',todos);
            todos.push({
                check: false , 
                description: state.value
            })

            return{
                ...state,
                todos
            };

        case DELETE_VALUE:
            return{
                ...state,
                todos
            };

        default:
            return state;
    }

};