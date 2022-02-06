import "./hero.css"
import {Link} from 'react-scroll'

const Hero = () => {
    return(
        <div className="hero">
            <h1 className="title">Color Palettes</h1>

            <p className="description">If you're anything like us, and have a hard time coming up with the perfect palette, this is the perfect place to get inspired by beautiful color schemes.</p>

            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_srwniiih.json"  background="transparent"  speed="1"  style={{width: "300px"}, {height: "300px"}}  loop  autoplay></lottie-player>

            <Link activeClass="active" to="palette" spy={true} smooth={false}><button className="rainbow-box">Browse Colors</button></Link>

            
        </div>
    );
};

export default Hero;