import { Link } from 'react-router-dom';

const BackgroundContent=(props)=>{
    return(
        <div>
            <div className="overlay overlay-color"></div>
            <div className="content-center">
                <h1 className="digitalTitle text-center">{props.title}</h1>
                <div className="w-65 text-center">
                    <p className="background1-p paragraphs7">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</p>
                    <Link to={props.link}><button className="default-button contact-button hvr-float mt-5 paragraphs2">{props.button}</button></Link>
                </div>
            </div>
        </div>
    )
}

export default BackgroundContent