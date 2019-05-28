import React  from 'react';

// material ui
import TextField from '@material-ui/core/TextField';

// actions
import * as actions from "./redux/actions";

// redux
import { connect } from "react-redux";

const TodoForm = props => {

    const { value, updateValue, saveTodo } = props;

    return(
        <form onSubmit={ e => {
            e.preventDefault();
            saveTodo()
        }}>
            <TextField
                type='text'
                placeholder="Add todo"
                margin="normal"
                value={ value }
                onChange={ e => updateValue(e.target.value) }
            />
        </form>
    );
};

const mapStateToProps = ({ todoReducer }) => {
    const {value} = todoReducer;

    // checar el state global despues de los cambios ya que regresa el state
    // console.log(todoReducer);

    return {value};
}

export default  connect(
    mapStateToProps,
    actions
)(TodoForm);