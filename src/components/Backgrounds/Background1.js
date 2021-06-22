import { Box, makeStyles } from "@material-ui/core"
import BackgroundContent from '../Reusable/BackgroundContent'
import background from '../../assets/images/bg-image-26.jpg'
const useStyles= makeStyles({
    back:{
        background:`url(${background})`,
        height:'80vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'relative'
    }
    
})
const Background1 = () =>{
    const classes=useStyles()
    return(
        <Box className={classes.back}>
            <BackgroundContent title="Creative." button="Chat With Us" link="/chat"/>
        </Box>
    )
}


export default Background1

