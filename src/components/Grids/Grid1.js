
import {Typography } from "@material-ui/core"
const Grid1=(props)=>{
    return(
        <div className="position-relative section2-container text-center">
            <img className="img-responsive img-fluid w-100 h-100" src={props.images} alt="Images"/>
            <div className="position-absolute section2-background text-white w-100 ">
                <div className="section2-content">
                    <Typography color="secondary" component="span">Development</Typography>
                    <Typography className="mt-3 mb-4 font-weight-bold" variant="h6" component="p">Getting tickets to the big show</Typography>
                    <button className="hvr-float">Case Study</button>
                </div>    
            </div>
            <div className="position-absolute section2-hover w-100 h-100">
            </div>
        </div>
    )
}
export default Grid1