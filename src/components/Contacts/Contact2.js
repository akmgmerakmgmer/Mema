import { Box, makeStyles, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom';
import background from '../../assets/images/pattern-1.png'
const useStyles= makeStyles({
    back:{
        background:`url(${background})`,
        height:'70vh',
        backgroundPosition:'center',
        backgroundSize:'contain',
        position:'relative'
    }
    
})
const Contact2=(props)=>{
    const classes = useStyles()
    return(
        <Box className={classes.back}>
            <div className="main-spacing content-center text-white text-center contact2-background">
                <Typography variant="body1" component="span">Ready To Do This</Typography>
                <Typography component={props.component} className="mt-3 work">Let's get to work</Typography>
                <Link to="/chat"><button className="mt-4">Chat With Us</button></Link>
            </div>
        </Box>
    )
}

export default Contact2