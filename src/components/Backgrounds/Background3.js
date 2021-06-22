import { Box, makeStyles } from "@material-ui/core"
import BackgroundContent from '../Reusable/BackgroundContent'
import background from '../../assets/images/bg-image-12.jpg'
const useStyles= makeStyles({
    back:{
        background:`url(${background})`,
        height:'100vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'relative'
    }
    
})
const Background3 = () =>{
    const classes=useStyles()
    return(
        <Box>
            <Box className={classes.back}>
                <BackgroundContent title="Contact Us" button="Back To Home" link="/"/>
            </Box>
        </Box>
    )
}


export default Background3

