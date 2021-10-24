import Promo from "../promo/promo";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";

import SolimoCoffeImg from '../../resources/img/Solimo-Coffee-Beans-2-kg.png';
import PrestoCoffeImg from '../../resources/img/Presto-Coffee-Beans-1-kg.png';
import AROMISTICOCoffeImg from '../../resources/img/AROMISTICO-Coffee-1-kg.png';

const App = () => {
    const DateCard = [
        {coffeName: 'Solimo Coffee Beans 2 kg', coffePrice: '10.73', img: SolimoCoffeImg},
        {coffeName: 'Presto Coffee Beans 1 kg', coffePrice: '15.99', img: PrestoCoffeImg},
        {coffeName: 'AROMISTICO Coffee 1 kg', coffePrice: '6.99', img: AROMISTICOCoffeImg}
    ]

    return (
        <>
            <Promo/>
            <AboutUs/>
            <OurBest date={DateCard}/>
        </>
    )
}


export default App;