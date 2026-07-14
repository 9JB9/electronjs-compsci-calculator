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
        let numCheck = true

        //function to check if a given character is a number
        const isNum = (x) => {
           const nums = x === "0" || x === "1" || x === '2' || x === '3' || x === '4' || x === '5' || x === '6' || x === '7' || x === '8' || x === '9'
           const ops = x === "+" || x === "-" || x === '*' || x === "/"
           if (type === 'basic') {
                if (nums || ops) {
                    return true
                } 
                else{
                    return false
                }
           }
        }

        //loop to check whether or not the value passed contains any non numerical characters
        for (const c of val){
            if (!isNum(c)) {
                numCheck = false
                break
            }
        }

        //basic type checker
        if (type === "basic"){ //!!!!come bac here to deal with negatives!!!!!
            if ((val >= '0' && val <= '9') || (val === '/' || val === '*' || val === '+' || val === '-')){
                validCheck = true
            }

            if (validCheck && numCheck){
                if (equation === "0"){
                    let cleanedVal = ""
                    for (const c of val){
                        if (c != "0") cleanedVal += c
                    }
                    setEquation(cleanedVal)
                } else {
                    setEquation(val)
                }
                console.log(equation)
                /* the input box is already saving the previous content. so we don't actually need to account for it
                inside of setEquation by concatenating strings. we can just set it to the old one. sadly, this does 
                create a bit of a continuity issue with the actual equation variable, as for some reason it is printing 
                the previous equation in the console.log line, but it is what it is */
            }
            else{
                setEquation (equation)
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