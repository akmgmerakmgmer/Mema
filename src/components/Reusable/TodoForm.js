import Loading1 from '../Loadings/Loading1'
import Heading1 from '../Headings/Heading1';
import { TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
const TodoForm = (props)=>{
    return(
        <div>
            <Heading1 component="h2" title="Axios To Do List" paragraph="There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration."/>
            <TextField label="Title*" color="secondary" type="text" className="pt-1 w-50 pr-4" onChange={props.titleInput} value={props.title}/>
            <TextField label="Task*" color="secondary" type="text" className="pt-1 w-50 pr-4" onChange={props.todoInput} value={props.todo}/>
            {props.error!==null?<Alert className="mt-3" variant="filled" severity="error">Error Fetching Your Data</Alert>:''}
            <div className="d-flex">
                {props.titleError==true?<Alert className="mt-3 w-50 mr-4" icon={false} variant="filled" severity="error">Your Title Can't Be Empty</Alert>:<div className="w-50 mr-4"></div>}
                {props.todoError==true?<Alert className="mt-3 w-50 mr-4" icon={false} variant="filled" severity="error">Your Task Can't Be Empty</Alert>:<div className="w-50 mr-4"></div>}
            </div>
            {props.loading?<Loading1 className='pt-5'/>:null}
            <button className="default-button project-button mt-4" onClick={props.post}>Add Todo</button>
            {/*loading2?<Loading1/>:null*/}
        </div>
    )
}

export default TodoForm