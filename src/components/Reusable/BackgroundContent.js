import { Link } from 'react-router-dom';

const BackgroundContent=(props)=>{
    return(
        <div>
            <div className="overlay overlay-color"></div>
            <div className="content-center">
                <h1 className="digitalTitle text-center wow fadeInDown title-background">{props.title}</h1>
                <div className="w-65 text-center">
                    <p className="background1-p paragraphs7 wow fadeInLeft" data-wow-delay="0.25">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
                    <Link to={props.link}><button className="default-button contact-button mt-5 paragraphs2">{props.button}</button></Link>
                </div>
            </div>
        </div>
    )
}

export default BackgroundContent