import {Grid, Typography } from "@material-ui/core"
import Heading1 from '../Headings/Heading1'
import Grid1 from '../Grids/Grid1'
import image1 from '../../assets/images/portfolio-2.jpg'
import image2 from '../../assets/images/portfolio-4.jpg'
import image3 from '../../assets/images/portfolio-3.jpg'
import image4 from '../../assets/images/portfolio-4.jpg'
import image5 from '../../assets/images/portfolio-7.jpg'
import image6 from '../../assets/images/portfolio-8.jpg'
const Section2 = ()=>{
    const images=[
        {
            id:1,
            img:image1
        },
        {
            id:2,
            img:image2
        },
        {
            id:3,
            img:image3
        },
        {
            id:4,
            img:image4
        },
        {
            id:5,
            img:image5
        },
        {
            id:6,
            img:image6
        },
    ]
    return(
        <div className="second-container main-spacing py-5 text-center">
            <Heading1 component="h2" title="My Latest Projects" paragraph="There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration."/>
            <Grid container spacing={4}>
                {images.map((image)=>(
                    <Grid key={image.id} item lg={4} md={6} sm={6} xs={12}>
                        <Grid1 images={image.img}/>
                    </Grid>
                ))} 
            </Grid>
        </div>
    )
}

export default Section2