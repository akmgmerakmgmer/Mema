import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import backgroundImage from '../../assets/images/bg-image-1.jpg'
import image1 from '../../assets/images/icon-01.png'
import image2 from '../../assets/images/icon-02.png'
import image3 from '../../assets/images/icon-03.png'
const useStyles=makeStyles({
    root:{
        backgroundImage:`url(${backgroundImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        paddingBottom:100,
        position:'relative',
    },
    rootContainer:{
        position:'absolute',
        width:'100%',
        height:'100%',
        background:'rgba(0,0,0,0.7)'
    }
})
const Section1 = ()=>{
    const classes = useStyles()
    const gridItems=[
        {
            title:'Business Stratagy',
            icon:image1
        },
        {
            title:'Website Development',
            icon:image2
        },
        {
            title:'Marketing & Reporting',
            icon:image3
        }
    ]
    return(
        <div className={classes.root}>
            <div className={classes.rootContainer}></div>
            <div className="header1">
                <h2 className="wow fadeInDown" data-wow-delay="3s"><span className="digitalTitle">A DIGITAL</span> <br></br><span className="digitalTitle">AGENCY.</span></h2>
                <Grid className="mt-5 wow fadeInUp" container spacing={5} data-wow-delay="3.3s">
                    {gridItems.map((item)=>(
                        <Grid item md={4} sm={6} xs={12} key={item.title}>
                            <img src={item.icon} alt="Main-Features"/>
                            <Typography className="mt-4" variant="h5" component="h3" color="secondary">{item.title}</Typography>
                            <Typography variant="body1" component="p" color="secondary" className="grid-p mt-3 paragraphs1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</Typography>
                        </Grid>
                    ))}
                    
                </Grid>
            </div>
        </div>
    )
}

export default Section1