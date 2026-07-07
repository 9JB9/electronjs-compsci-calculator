import { Link } from "react-router-dom"
import "../css/NavBar.css"

function NavBar () {
    
    return (
        <>
            <nav>
                <div className="nav-left">
                    {/* in here we are going to have the logo + the calculator options
                    and history menu */}
                    <Link to = "/">
                        <img src = {null} alt = "logo image"></img>
                    </Link>
                    <button> Basic </button>
                    <button> Scientific </button>
                    <button> Converter</button>
                </div>
                <div className="nav-right">
                    {/* in here we are going to have the settings + dark/light mode toggle
                    + menu */}
                </div>
            </nav>
        </>
    )
}

export default NavBar