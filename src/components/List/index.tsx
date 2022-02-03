import React, { useEffect, useState } from 'react'
import { Container, ListH1, FormInput, FormLabel, ListWrap, Text, ListContent, Table, Icon, FormButton, ListContainer, Form, FormH1, CloseIcon, Edit, ListElements, ListTitleSection, ListTitle } from './ListElements';
import axios from 'axios';

import TodoForm from '../TodoForm';

const List = () => {
    const [taskList, settaskList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [task, setTask] = useState<object>({ title: '', id: '' });
    // setLoading(true);
    const editTask = (e: any) => {
        console.log('editTask', e);
        setTask(e);
    }

    const updateTask = (e: any) => {
        console.log('updateTask', e);
        taskList.map((t: any) => {
            if (t.id === e.id) {
                t.title = e.title;
            }
        });
        settaskList([...taskList]);
    }

    let todoList = taskList.map((p: any) => {
        return (
            <ListElements id={p.id} key={p.id}>
                <ListTitleSection className='List-header'>
                    <ListTitle>{p.title}</ListTitle>
                </ListTitleSection>
                <Edit onClick={() => editTask(p)}>
                    <CloseIcon></CloseIcon>
                </Edit>
                {/* <p>{p.age} years old</p>
                <p className='List-note'>{p.note}</p> */}
            </ListElements>
        )
    });



    const search = () => {
        return new Promise((resolve, reject) => {
            try {
                // setState((x) => ({ ...x, loading: true }));
                axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(r => {
                    console.log('SEARCH WORKING', r.data);
                    if (r.status === 200 || r.status === 204) {
                        settaskList(r.data);
                        setLoading(false);
                        resolve(r.data);
                    } else {
                    }
                });

            }
            catch (err) {
            }
        });
    }

    useEffect(() => {
        console.log('useEffect is triggered', loading);
        if (loading === true) {
            search();
        }
    }, [loading]);

    return (
        <>
            <Container>
                <ListWrap>
                    <Icon to="/">OPENLAKE</Icon>
                    <ListContent>
                        <Table >
                            <TodoForm taskObj={task} setLoading={setLoading} updateTask={updateTask} />
                            <ListH1>Task List</ListH1>
                            <ListContainer>
                                {
                                    todoList
                                }
                            </ListContainer>
                        </Table>
                    </ListContent>

                </ListWrap>
            </Container>
        </>
    )
}

export default List
