import svg1 from '../../assets/images/svg1.svg'
import svg2 from '../../assets/images/svg2.svg'
import {Typography } from "@material-ui/core"
const Grid5 = ()=>(
    <div className="first-container pt-5 grid5 main-spacing">
        <div className="row pt-lg-4 pt-3">
            <div className="col-lg-6">
                <img src={svg2} alt="Services" className="w-100 h-75"/>
            </div>
            <div className="col-lg-6">
                <Typography variant="h6" component="span" color="primary">Biography</Typography>
                <Typography variant="h4" component="h2" color="primary" className="mt-2">What Is Mema?</Typography>
                <Typography variant="body1" component="p" color="textSecondary" className="mt-lg-3 mt-2">It's a software application that provides real-time analytical systems that manage the flow of product and information throughout the supply chain network. Mema is designed to enhance SCM operations such as supplier sourcing, production planning, inventory planning, transportation planning, demand planning.In basic terms, Mema manages supply chain transactions and activities, flow of data, supplier relationships and any other related activities. Mema runs on the principles of the supply chain which is a very crucial area for any business. It's involved in all processes from the product development stage to the logistics, tapping into activities such as warehousing, transportation, and inventory management. Mema Also Includes the processing of customer requirements, sourcing, and management of suppliers and shipping.</Typography>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6">
                <Typography variant="h4" component="h2" color="primary" className="mt-lg-3 mt-2">Why Mema?</Typography>
                <Typography variant="body1" component="p" color="textSecondary" className="mt-lg-3 mt-2">In Traditional Trading all these operations are managed individually by different teams of people usually working in various departments, this may cause difficulties and confusion in the overall management of the supply chain, which is the problem that Mema seeks to solve. Mema incorporates these functions into one system that can be controlled and managed from a single point.</Typography>
            </div>
            <div className="col-lg-6">
                <img src={svg1} alt="Services" className="w-100 h-75 mt-3 mt-lg-0"/>
            </div>
        </div>
    </div>
)

export default Grid5