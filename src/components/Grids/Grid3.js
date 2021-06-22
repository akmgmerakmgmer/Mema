import GridItems from '../Reusable/GridItems'
import { DesktopMac, Layers, PeopleAlt, RssFeed } from "@material-ui/icons";
import Heading1 from '../Headings/Heading1';
const Grid3 = ()=>{
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
        {
            title:'Python',
            icon:<Layers className="icon"/>
        },
        {
            title:'Machine Learning',
            icon:<DesktopMac className="icon"/>
        },
        {
            title:'AI Development',
            icon:<RssFeed className="icon"/>
        },
        {
            title:'Directing',
            icon:<Layers className="icon"/>
        },
        {
            title:'Filming',
            icon:<DesktopMac className="icon"/>
        },
    ]
    return(
        <div className="second-container py-5">
            <div className="text-center mb-5">
                <Heading1 component="h2" title="Our Main Aspects" paragraph="There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration."/>
            </div>
            <div className="row main-spacing">
                {infos.map((info)=>(
                    <GridItems key={info.title} title={info.title} icon={info.icon} classes="col-md-4 col-sm-6 col-12 mb-3 hvr-float py-4 background"/>
                ))} 
            </div>
        </div>
    )
}

export default Grid3