import {Typography, Button} from "@material-ui/core"
import Heading1 from "../Headings/Heading1"
import { Link } from 'react-router-dom';
import GridItems from '../Reusable/GridItems'
import { DesktopMac, Layers, PeopleAlt, RssFeed } from "@material-ui/icons";
const Grid2 = ()=>{
    const infos=[
        {
            title:'Website Development',
            icon:<RssFeed className="icon"/>
        },
        {
            title:'Graphic Design',
            icon:<Layers className="icon"/>
        },
        {
            title:'Marketing & Reporting',
            icon:<DesktopMac className="icon"/>
        },
        {
            title:'Mobile Development',
            icon:<PeopleAlt className="icon"/>
        },
    ]
    return(
        <div className="row grid2 second-container py-md-5 py-3">
            <div className="col-lg-4 col-md-12">
                <Heading1 component="h4" title="Services" paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."/>
                <Typography className="d-none d-lg-block" component="p" variant="body1" color="textSecondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</Typography>
                <Link to='/services'><Button className="mt-lg-5 mt-3 px-4 py-2 mb-5" variant="contained" color="primary">Services In Detail</Button></Link> 
            </div>
            <div className="row col-lg-8 col-md-12 text-white">
                {infos.map((info)=>(
                    <GridItems key={info.title} title={info.title} icon={info.icon} classes="col-lg-6 col-md-6 col-sm-12 mb-3 hvr-float py-4 background"/>
                ))}
            </div>
        </div>
    )
}

export default Grid2