import styled from 'styled-components';
import {Container} from 'react-bootstrap';

import mainBg from '../../resources/img/Main-bg.jpg';
import Header from '../nav/header';
import PromoInfo from '../promo-info/promo-info';

const PromoSection = styled.section`
    padding: 30px 0 200px 0;
    background: url(${mainBg}) center center/cover no-repeat;
    min-height: 640px;
`;


const Promo = () => {
    return (
        <PromoSection>
            <Container>
              <Header/>  
              <PromoInfo/>
            </Container>
        </PromoSection>
    )
}

export default Promo;