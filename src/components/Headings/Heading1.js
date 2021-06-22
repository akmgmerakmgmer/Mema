import { Typography } from "@material-ui/core"

const Heading1=(props)=>{
    return(
        <div className="mb-4 text-white">
            <Typography component={props.component} className=" headings-title">{props.title}</Typography>
            <Typography variant="body1" component="p" color="textSecondary" className="mt-1">{props.paragraph}</Typography>
        </div>
    )
}

export default Heading1