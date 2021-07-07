import React, { lazy,Suspense  } from 'react';
import { useState , useEffect } from 'react'
import axios from 'axios'
import FullPageLoading from '../Loadings/FullPageLoading';
const Todo = lazy(() => import('../Reusable/Todo'));
const TodoForm = lazy(() => import('../Reusable/TodoForm'));
const CompletedTodos = lazy(() => import('../Reusable/CompletedTodos'));
const Grid4 = () =>{
    const [todoList,setTodoList]=useState([])
    const [todo,setTodo]=useState('')
    const [todoError,setTodoError]=useState(false)
    const [updateTodo,setUpdateTodo]=useState('')
    const [updateTodoError,setUpdateTodoError]=useState(false)
    const [todoTitle,setTodoTitle]=useState('')
    const [todoTitleError,setTodoTitleError]=useState(false)
    const [updateTitle,setUpdateTitle]=useState('')
    const [updateTitleError,setUpdateTitleError]=useState(false)
    const [loading,setLoading]=useState(false)
    const [loading2,setLoading2]=useState(false)
    const [loading3,setLoading3]=useState(false)
    const [error,setError]=useState(null)
    const [modalClass,setModalClass]=useState('zminus')
    const [modalId,setModalId]=useState()
    const [completedList,setCompletedData]=useState([])
    useEffect(()=>{
        setLoading2(true)
        axios.get('https://chat-9ebf3-default-rtdb.firebaseio.com/todos.json')
            .then(response=>{
                const fetchedData=[]
                for(let key in response.data){
                    fetchedData.push({...response.data[key],id:key})
                }
                setTodoList(fetchedData)
                setLoading2(false)
            })
            .catch(error=>{
                setLoading2(false)
                setError(error)
            })
            //Completed 
            axios.get('https://chat-9ebf3-default-rtdb.firebaseio.com/completed.json')
            .then(response=>{
                const completedData=[]
                for(let key in response.data){
                    completedData.push({...response.data[key],id:key})
                }
                setCompletedData(completedData)
                setLoading(false)
            })
            .catch(error=>{
                setLoading(false)
                setError(error)
            })
    },[loading,loading3])
    const Post=()=>{
        const todoTasks = {
            value:todo,
            title:todoTitle,
        }
        if(todo.trim()==''){
            setTodoError(true)
        }else{
            setTodoError(false)
        }
        if(todoTitle.trim()==''){
            setTodoTitleError(true)
        }else{
            setTodoTitleError(false)
        }
        if(todo.trim()!='' && todoTitle.trim()!=''){
            setLoading(true)
            axios.post('https://chat-9ebf3-default-rtdb.firebaseio.com/todos.json',todoTasks)
                .then(response=>{
                    setLoading(false)
                })
                .catch(error=>{
                    setLoading(false)
                    setError(error)
                })
                setTodo('') 
                setTodoTitle('') 
        }
        
    }
    const Delete = (id) =>{
        setLoading(true)
        axios.delete(`https://chat-9ebf3-default-rtdb.firebaseio.com/todos/${id}.json`)
            .then(response=>{
                setLoading(false)
            })
            .catch(error=>{
                setLoading(false)
                setError(error)
            })
    }
    const Update=()=>{
        const updatedTodo={
            value:updateTodo,
            title:updateTitle
        }
        if(updateTodo.trim()==''){
            setUpdateTodoError(true)
        }else{
            setUpdateTodoError(false)
        }
        if(updateTitle.trim()==''){
            setUpdateTitleError(true)
        }else{
            setUpdateTitleError(false)
        }
        if(updateTodo.trim()!='' && updateTitle.trim()!=''){
            setModalClass('zminus')
            setLoading(true)
            axios.put(`https://chat-9ebf3-default-rtdb.firebaseio.com/todos/${modalId}.json`,updatedTodo)
                .then(response=>{
                    setLoading(false)
                })
                .catch(error=>{
                    setLoading(false)
                    setError(error)
                })
                setUpdateTitle('')
                setUpdateTodo('')
        }
        
    }
    const CompletedTask=(id)=>{
        setLoading(true)
        const compeletedTask = todoList.find(result=>result.id==id)
        axios.post('https://chat-9ebf3-default-rtdb.firebaseio.com/completed.json',compeletedTask)
            .then(response=>{
                setLoading(false)
            })
            .catch(error=>{
                setLoading(false)
                setError(error)
            })
        Delete(id)
    }
    const DeleteCompleted = (id) =>{
        setLoading3(true)
        axios.delete(`https://chat-9ebf3-default-rtdb.firebaseio.com/completed/${id}.json`)
            .then(response=>{
                setLoading3(false)
            })
            .catch(error=>{
                setLoading3(false)
                setError(error)
            })
    }
    const ReturnTodo=(id)=>{
        setLoading3(true)
        const returnedTask = completedList.find(result=>result.id==id)
        axios.post('https://chat-9ebf3-default-rtdb.firebaseio.com/todos.json',returnedTask)
            .then(response=>{
                setLoading3(false)
            })
            .catch(error=>{
                setLoading3(false)
                setError(error)
            })
        DeleteCompleted(id)
    }
    const modalOpen=(id)=>{
        setModalClass('zindex')
        setModalId(id)
    }
    const modalClose=()=>{
        setModalClass('zminus')
    }
    return(
        <div className="first-container py-5 text-white todo-container">
            <Suspense fallback={FullPageLoading} className="w-100">
                <TodoForm
                titleInput={(e)=>setTodoTitle(e.target.value)}
                title={todoTitle}
                todoInput={(e)=>setTodo(e.target.value)}    
                todo={todo}
                loading={loading}
                post={Post}
                error={error}
                titleError={todoTitleError}
                todoError={todoError}
                />
                <Todo 
                todoList={todoList}
                delete={Delete}
                update={Update}
                modalClass={modalClass}
                modalOpen={modalOpen}
                modalClose={modalClose}
                updatedTitle={(e)=>setUpdateTitle(e.target.value)}
                updatedTodo={(e)=>setUpdateTodo(e.target.value)}
                titleUpdated={updateTitle}
                todoUpdated={updateTodo}
                titleError={updateTitleError}
                todoError={updateTodoError}
                completedTask={CompletedTask}
                />
                <CompletedTodos
                completedList={completedList}
                deleteCompleted={DeleteCompleted}
                loading3={loading3}
                returnTodo={ReturnTodo}
                />
            </Suspense>
        </div>
    )
}

export default Grid4