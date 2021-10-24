import styled from 'styled-components';
import OurBestCard from '../our-best-card/our-best-card';

const BlockWrapper = styled.div`
    max-width: 862px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width: 460px) {
        justify-content: center;
    }
`;


const CardWrapper = ({date}) => {
    const cards = date.map(({coffeName, coffePrice, img}) => {
        return <OurBestCard coffeName={coffeName} coffePrice={coffePrice} img={img}/>
    })

    return (
        <BlockWrapper>
            {cards}
        </BlockWrapper>
    )
}

export default CardWrapper;