
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Typography,TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import CheckIcon from '@material-ui/icons/Check';
import Tooltip from '@material-ui/core/Tooltip';
const Todo =(props)=>{
    return(
        <div>
            {props.todoList.map(t=>(
                <div key={t.id}>
                    <div className="todos d-flex justify-content-between align-items-center second-container mt-4 py-3 px-md-4 px-3">
                        <div className="w-75">
                            <Typography variant="body2" component="h2" color="textSecondary">{t.title}</Typography>
                            <Typography variant="h6" component="p">{t.value}</Typography>
                        </div>
                        <div>
                            <Tooltip title="Delete Task">
                                <DeleteIcon color="primary" className="delete mr-md-3 mr-2" onClick={()=>props.delete(t.id)}/>
                            </Tooltip>
                            <Tooltip title="Edit Task">
                                <EditIcon color="primary" className="delete mr-md-2 mr-1" onClick={()=>props.modalOpen(t.id)}/>
                            </Tooltip>
                            <Tooltip title="Completed Task">
                                <CheckIcon color="primary" className="delete" onClick={()=>props.completedTask(t.id)}/>
                            </Tooltip>
                        </div>
                    </div>  
                    <div className={`content-center ${props.modalClass}`} onClick={props.modalClose}>
                    </div>
                </div>
            ))}
            <div className='d-flex justify-content-center align-items-center'>
                <div className={`update-modal ${props.modalClass}`}>
                    <TextField fullWidth label="New Title*" color="secondary" type="text" className="mb-3" onChange={props.updatedTitle} value={props.titleUpdated}/>
                    {props.titleError?<Alert variant="filled" severity="error">Your Title Can't Be Empty</Alert>:null}
                    <TextField fullWidth label="New Task*" color="secondary" type="text" className="mt-2 mb-3" onChange={props.updatedTodo} value={props.todoUpdated}/>
                    {props.todoError?<Alert variant="filled" severity="error">Your Title Can't Be Empty</Alert>:null}
                    <button className="default-button project-button mt-4" onClick={props.update}>Update Todo</button>
                </div>
            </div>
        </div>
    )
}


export default Todo