import ChartContainer from "../../components/data/Data";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
function Animals() {
    return (
        <>
            <Header />
            <div className="animals-flex">
                < ChartContainer/>
            </div>
            <Footer />
        </>
    )
}
export default Animals;