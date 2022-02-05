import "./colors.css";
import {useEffect, useState} from 'react';
import { palette } from "@mui/system";


const Colors = () => {
    
    const [palettes, setPalettes] = useState()
    
    const makeApiCall = () => {
        return(
            fetch('http://localhost:8000/palettes/')
            .then((response)=>response.json())
            .then((data)=>setPalettes(data))
        )
    }

    useEffect(()=>{
        makeApiCall()
    }, [])

    console.log(palettes)

    const colorPalettes = palettes && palettes.map((palette, index) => {
        return(
             <div className="palette">
                <div className="color" style={{background: `${palette.hex1}`, margin: "0 auto", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px"}} >{palette.hex1}</div>
                <div className="color" style={{background: `${palette.hex2}`, margin: "0 auto"}} >{palette.hex2}</div>
                <div className="color" style={{background: `${palette.hex3}`, margin: "0 auto"}} >{palette.hex3}</div>
                <div className="color" style={{background: `${palette.hex4}`, margin: "0 auto", borderTopRightRadius: "20px", borderBottomRightRadius: "20px"}} >{palette.hex4}</div>
             </div>
        )
    })

    console.log(colorPalettes)
    
    return(
        <div className="mainColorsContainer">
            <h1 className="title">Palettes</h1>

            {colorPalettes}
        
        </div>
    );
};

export default Colors;