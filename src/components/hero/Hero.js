import "./hero.css"
import {Link} from 'react-scroll'

const Hero = () => {
    return(
        <div className="hero">
            <h1>Palettes</h1>

            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_srwniiih.json"  background="transparent"  speed="1"  style={{width: "300px"}, {height: "300px"}}  loop  autoplay></lottie-player>

            <Link activeClass="active" to="colors" spy={true} smooth={false}><button className="rainbow-box">Browse Colors</button></Link>

            
        </div>
    );
};

export default Hero;