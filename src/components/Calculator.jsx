//this will be a component made of other components for simplicity sake 
//but this will just be the main component, mostly for html and css styling ease of understanding
import { useState, useEffect } from "react"
import { useNavContext } from "../contexts/NavContext"
import "../css/Calculator.css"
function Calculator () {

    const {type, typeSetter} = useNavContext()
    const [equation, setEquation] = useState("0")
    const handleTypedContent = (realVal) => {
        let validCheck = false
        let numCheck = true
        const val = realVal.replaceAll(" ", "")
        console.log("val:" + val )
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
                validCheck = true //THIS NEEDS FIXING!!!!!
            }
            if (validCheck && numCheck){
                if (equation === "0"){ //equation here is the previous one before being updated with the current input
                    // for (const c of val){
                    //     if (c != "0") cleanedVal += c //cleans leading 0s to make input looking clean
                    // }
                    //the for loop might not be needed, read down below to figure out why.
                    /*
                        this handTypedContent function is called when a character is typed. and every time the entire input box is
                        passed to it. So this equation === '0' check literally only runs once. and it runs only when there are 2 
                        characters. it gets a lil fuzzy if you enter 0 as your second character, but we can handle that later
                    */

                    const lastVal = val[1]
                    let cleanedVal = ""
                    if (lastVal === '+' || lastVal === '-' || lastVal === '/' || lastVal === '*') {
                        cleanedVal = " " + lastVal + " "
                    } else {
                        cleanedVal = lastVal
                    }
                    setEquation(cleanedVal)
                }else {
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

    const calculateResult = () => {
        /* We have to parse the equation var here and break it into a list, to make it easier to access things
            1. we have to make sure that the string being passed through has some blank space between stuff already to make it easier to parse


        */
    }
    
    return (
        <>
            <div className="calc-content">
                {/*the input screen will go right here */}
                <div className="calc-input-screen">
                    <input type = "text" 
                           value = {equation} 
                           onChange = {(e) => handleTypedContent(e.target.value)}
                           onKeyDown={ (e) => {
                            if (e.key === 'Enter') {
                                calculateResult()
                            }
                           }}></input>
                </div>
                <div className="calc-board">

                </div>
            </div>
        </>
    )
}

export default Calculator