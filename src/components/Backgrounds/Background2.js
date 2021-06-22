import { Box, makeStyles } from "@material-ui/core"
import BackgroundContent from '../Reusable/BackgroundContent'
import background from '../../assets/images/bg-image-17.jpg'
const useStyles= makeStyles({
    back:{
        background:`url(${background})`,
        height:'100vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'relative'
    }
    
})
const Background2 = () =>{
    const classes=useStyles()
    return(
        <Box>
            <Box className={classes.back}>
                <BackgroundContent title="Axios World." button="Wanna Chat ?" link="/chat"/>
            </Box>
        </Box>
    )
}


export default Background2

