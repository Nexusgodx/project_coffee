import {Container} from 'react-bootstrap';
import styled from 'styled-components';

import MainSubtitle from '../main-subtitle/main-subtitle';

const AboutSection = styled.main`
    padding: 80px 0 80px 0;
    min-height: 520px;
    background-color: #fff;
`;

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AboutParagraph = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 20.22px;
    margin-bottom: 20px;
`;

const AboutParagraphWrapper = styled.div`
    max-width: 589px;
    margin-top: 40px;
`;


const AboutUs = () => {

    return (
        <AboutSection>
            <Container>
                <AboutWrapper>
                    <MainSubtitle text={'About Us'} underline />
                    <AboutParagraphWrapper>
                        <AboutParagraph>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord   horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </AboutParagraph>
                        <AboutParagraph>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </AboutParagraph>
                    </AboutParagraphWrapper>
                </AboutWrapper>
            </Container>
        </AboutSection>
    )
}


export default AboutUs;