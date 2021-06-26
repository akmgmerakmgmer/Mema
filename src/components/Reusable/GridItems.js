import { Typography } from "@material-ui/core"

const GridItems = (props)=>{
    
    return(
        <div className={props.classes}>
            <div className="opacity mx-md-3 mx-0">
                {props.icon}
                <Typography className="mt-3 font-weight-bold text-white" variant="h6" component="p">{props.title}</Typography>
                <Typography className="mt-2 paragraphs4"  component="p" color="textSecondary">I throw myself down among the tall grass by the stream as I lie close to the earth.</Typography>
            </div>
        </div>   
)
}

export default GridItems