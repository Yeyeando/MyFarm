import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css";
import CardsHome from "../../components/cards/CardHome";

function Home() {
    return (
        <>
            <Header />
            <div className="home-flex">
                <h1>Valora los animales que puedes tener en tu granja</h1>
            </div>
            <div className="home-list-animals-cards">
                <CardsHome/>
            </div>
            <Footer />
        </>
    )
}
export default Home;