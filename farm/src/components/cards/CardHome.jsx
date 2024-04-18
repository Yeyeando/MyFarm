import cards from "./card-home";

function CardsHome(){
    return(
        
        <>
        {
            cards.map((card) => (
                <div className="home-animal-card">
                    <div className="home-image-card">
                        <img src={`${card.src}`} alt="logo" />
                    </div>
                    <div className="home-footer-card">
                        <p>{card.description.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}</p>
                    </div>
                </div>
            ))
        }
        </>
    )
}
export default CardsHome;