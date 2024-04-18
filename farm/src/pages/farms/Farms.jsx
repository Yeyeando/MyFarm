import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Map from "../../components/map/Map";
import "./Farms.css"
function Farms(){
    return(
        <>
            <Header/>
            <div className="farms-flex">
                <h1>Lugares donde nos asentamos y podemos ayudarte</h1>
                <Map/>
            </div>
            <Footer/>
        </>
    )
}
export default Farms