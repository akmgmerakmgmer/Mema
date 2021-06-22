import { Typography,Box } from "@material-ui/core"
import Heading1 from "../Headings/Heading1"
const Bars1 = ()=>{
    const barItems=[
        {
            title:'Time Management',
            class:'progress-bar1'
        },
        {
            title:'Solving Problems',
            class:'progress-bar2'
        },
        {
            title:'Analizing',
            class:'progress-bar3'
        },
        {
            title:'Decision Making',
            class:'progress-bar4'
        },
        {
            title:'Adaptability',
            class:'progress-bar5'
        },
        {
            title:'Design',
            class:'progress-bar6'
        },
        {
            title:'UI / UX',
            class:'progress-bar7'
        },
    ]
    return(
        <div className="first-container text-center py-5 main-spacing bars1">
            <Heading1 component="h2" title="Our Team Features" paragraph="There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration."/>
            {barItems.map((item)=>(
                <div key={item.title} className="mb-4">
                    <Typography variant="body1" component="span" color="textSecondary" className="mb-2 text-left d-block">{item.title}</Typography>
                    <div class="progress">
                        <div class={`progress-bar ${item.class}`} role="progressbar"  aria-valuenow="25" aria-valuemin="50" aria-valuemax="100"></div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Bars1