import Heading1 from '../Headings/Heading1';
import Loading1 from '../Loadings/Loading1'
import DeleteIcon from '@material-ui/icons/Delete';
import {Typography} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import ReplayIcon from '@material-ui/icons/Replay';
const CompletedTodos = (props)=>{
    return(
        <div className="mt-5 completed-todos">
            <div className="text-center">
                <Heading1 component="h3" title="Completed Todos" paragraph="There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration."/>
            </div>
            {props.loading3?<Loading1 className='pt-5'/>:null}
            {props.completedList.map(t=>(
                <div key={t.id}>
                    <div className="todos d-flex justify-content-between align-items-center second-container mt-4 py-3 px-md-4 px-3">
                        <div className="w-75">
                            <Typography variant="body2" component="h2" color="textSecondary">{t.title}</Typography>
                            <Typography variant="h6" component="p">{t.value}</Typography>
                        </div>
                        <div>
                            <Tooltip title="Delete Task">
                                <DeleteIcon color="primary" className="delete mr-md-3 mr-2" onClick={()=>props.deleteCompleted(t.id)}/>
                            </Tooltip>
                            <Tooltip title="Unfinished Task">
                                <ReplayIcon color="primary" className="delete" onClick={()=>props.returnTodo(t.id)}/>
                            </Tooltip>
                        </div>
                    </div>  
                </div>
            ))}
        </div>
    )
}


export default CompletedTodos