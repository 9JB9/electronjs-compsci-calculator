import { createContext, useState, useContext, useEffect } from "react";
const NavContext = createContext()
export const useNavContext = () => useContext(NavContext)

export const NavProvider = ({children}) => {
    const [type, setType] = useState('basic')
    const typesArr = ['basic', 'scientific', 'converter']
    useEffect (() => { //responsible for acquiring the locally stored data
        const storedType = localStorage.getItem('type')
        if (storedType) setType(JSON.parse(storedType))
    }, [])

    useEffect (() => {
        localStorage.setItem(JSON.stringify(type))
    }, [type])

    function typeSetter (newType) {
        if (typesArr.includes(newType)){
            setType(newType)
        }
    }

    const value = {
        type,
        typeSetter
    }
    return (<NavContext.Provider value = {value}>
        {children}
    </NavContext.Provider>)
}