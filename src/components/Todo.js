import {List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import React from 'react'
import {db} from '../firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Todo.css';
const Todo = ({arr}) => {

    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
                </ListItemAvatar>
            </ListItem>
            <DeleteForeverIcon fontSize="large" onClick={() => db.collection('todos').doc(arr.id).delete()}/>
        </List>
    )
}
export default Todo
