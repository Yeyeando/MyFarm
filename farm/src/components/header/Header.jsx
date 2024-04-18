import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/home");
    }

    const navigateGraphics = () => {
        navigate("/animals");
    }
    const navigateFarms = () => {
        navigate("/farms");
    }
    return (

        <>
            <div className="my-header">
                <div className="header-logo"><img src="../../../public/img/granjamiga.png" alt="logo" /></div>
                <div onClick={navigateHome} type="button"><h1>Home</h1></div>
                <div onClick={navigateGraphics} type="button"><h1>Graphics</h1> </div>
                <div onClick={navigateFarms} type="button"> <h1>Farms</h1></div>
            </div>

        </>
    )
}
export default Header;