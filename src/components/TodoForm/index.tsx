import React, { useEffect, useState } from 'react'
import { FormInput, FormLabel, FormButton, FormH1 } from './TodoElements';
import axios from 'axios';


const TodoForm: React.FC<any> = ({ taskObj, setLoading, updateTask }) => {
    const [task, setTask] = useState<string>('');
    const [actionType, setActionType] = useState<boolean>(false);


    const handleChange = (e: any) => {
        setTask(e.target.value);
    }

    useEffect(() => {
        console.log('useEffect is triggered', task);
        setTask(taskObj.title);
        if (taskObj.title !== '') {
            setActionType(true);
        }
    }, [taskObj]);

    const addTask = (e: any) => {
        if (!task) {

        }
        else {
            return new Promise((resolve, reject) => {
                try {
                    axios.post('https://jsonplaceholder.typicode.com/todos', {
                        title: task,
                        completed: false
                    }).then(r => {
                        console.log('Adding WORKING', r);
                        setTask('');
                        alert("Task Added!");
                        setLoading(true);
                        resolve(r.data);
                    });

                }
                catch (err) {
                }
            });
        }
    }
    const editTask = (e: any) => {
        if (!task) {

        }
        else {
            return new Promise((resolve, reject) => {
                try {
                    axios.put('https://jsonplaceholder.typicode.com/todos/' + taskObj.id, {
                        title: task,
                        completed: false
                    }).then(r => {
                        console.log('Adding WORKING', r);
                        setTask('');
                        alert("Task Edited!");
                        // setLoading(true);
                        updateTask(r.data);
                        setActionType(false);
                        resolve(r.data);
                    });

                }
                catch (err) {
                }
            });
        }
    }

    const cancelEdit = () => {
        setTask('');
        setActionType(false);
    }
    return (
        <>
            <FormH1>Add Todo List</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' placeholder='Title' required value={task}
                onChange={handleChange} />
            {
                actionType ?
                    <>
                        <FormButton type='submit' value='Edit' onClick={editTask}>Edit</FormButton>
                        <FormButton type='submit' value='Edit' style={{ 'marginTop': '10px' }} onClick={cancelEdit}>Cancel</FormButton>
                    </>
                    :
                    <FormButton type='submit' value='Add' onClick={addTask}>Add</FormButton>
            }

        </>
    )
}

export default TodoForm
