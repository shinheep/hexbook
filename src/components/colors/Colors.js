import "./colors.css";
import {useEffect} from 'react';

const Colors = () => {
    
    const makeApiCall = () => {
        return(
            fetch('http://localhost:8000/palettes/')
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        )
    }

    useEffect(()=>{
        makeApiCall()
    }, [])
    
    return(
        <div className="mainColorsContainer">
            <h1 className="title">Palettes</h1>
        
            <div className="colors">

                <div className="colorContainer">
                    <div className="colorBlock1"/>
                    <div className="colorBlock2"/>
                    <div className="colorBlock3"/>
                    <div className="colorBlock4"/>
                </div>

                <div className="colorContainer">
                    <div className="colorBlock5"/>
                    <div className="colorBlock6"/>
                    <div className="colorBlock7"/>
                    <div className="colorBlock8"/>
                </div>

                <div className="colorContainer">
                    <div className="colorBlock9"/>
                    <div className="colorBlock10"/>
                    <div className="colorBlock11"/>
                    <div className="colorBlock12"/>
                </div>

                <div className="colorContainer">
                    <div className="colorBlock13"/>
                    <div className="colorBlock14"/>
                    <div className="colorBlock15"/>
                    <div className="colorBlock16"/>
                </div>
                
                <div className="colorContainer">
                    <div className="colorBlock17"/>
                    <div className="colorBlock18"/>
                    <div className="colorBlock19"/>
                    <div className="colorBlock20"/>
                </div>

                <div className="colorContainer">
                    <div className="colorBlock21"/>
                    <div className="colorBlock22"/>
                    <div className="colorBlock23"/>
                    <div className="colorBlock24"/>
                </div>

                <div className="colorContainer">
                    <div className="colorBlock25"/>
                    <div className="colorBlock26"/>
                    <div className="colorBlock27"/>
                    <div className="colorBlock28"/>
                </div>
            </div>

        </div>
    );
};

export default Colors;