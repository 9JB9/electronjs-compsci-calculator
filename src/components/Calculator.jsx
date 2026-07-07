//this will be a component made of other components for simplicity sake 
//but this will just be the main component, mostly for html and css styling ease of understanding
import { useState, useEffect } from "react"
import { useNavContext } from "../contexts/NavContext"
import "../css/Calculator.css"
function Calculator () {

    const {type, typeSetter} = useNavContext()
    const [equation, setEquation] = useState("0")
    const handleTypedContent = (val) => {
        let validCheck = false
        if (type === "basic"){ //!!!!come bac here to deal with negatives!!!!!
            if ((val >= '0' && val <= '9') || (val === '/' || val === '*' || val === '+' || val === '-')){
                validCheck = true
            }

            if (validCheck){
                setEquation (equation + val)
                console.log(equation)
            }
        }
    }
    return (
        <>
            <div className="calc-content">
                {/*the input screen will go right here */}
                <div className="calc-input-screen">
                    <input type = "text" value = {equation} onChange = {(e) => handleTypedContent(e.target.value)}></input>
                </div>
                <div className="calc-board">

                </div>
            </div>
        </>
    )
}

export default Calculator