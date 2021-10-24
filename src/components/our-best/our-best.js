import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import MainSubtitle from '../main-subtitle/main-subtitle';
import CardWrapper from '../our-best-card-wrapper/our-best-card-wrapper';

import OurBestBg from '../../resources/img/Mask-bg.jpg';


const OurBestSection = styled.section`
    padding: 80px 0 110px 0;
    min-height: 485px;
    background: url(${OurBestBg}) center center/cover no-repeat;
`;

const OurBest = ({date}) => {
    return (
        <OurBestSection>
            <Container>
                <MainSubtitle text={'Our best'}/>
                <CardWrapper date={date}/>
            </Container>
        </OurBestSection>
    )
}

export default OurBest;