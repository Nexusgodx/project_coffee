import styled from 'styled-components';
import infoIcon from '../../resources/img/Beans-logo-white.png';

const PromoInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;

const PromoInfoTitle = styled.h1`
    margin-top: 111px;
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 57.76px;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
`;

const PromoInfoSubtitle = styled.div`
    text-align: center;
    h2{
        margin-top: 35px;
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 24px;
        line-height: 34.66px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h3{
        margin-bottom: 18px;
        font-weight: 700;
        font-size: 24px;
        line-height: 34.66px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const PromoInfoBtn = styled.button`
    padding: 5px 42px 5px 42px;
    border: 1px solid #fff;
    border-radius: 3px;
    background-color: rgba(0,0,0, 0);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
`;


const PromoInfo = () => {
    return (
            <PromoInfoWrapper>
                <PromoInfoTitle>Everything You Love About Coffee</PromoInfoTitle>
                <img alt='линия' src={infoIcon}/>
                <PromoInfoSubtitle>
                    <h2>We makes every day full of energy and taste</h2>
                    <h3>Want to try our beans?</h3>     
                </PromoInfoSubtitle>
                <PromoInfoBtn>More</PromoInfoBtn>
            </PromoInfoWrapper>
    )
}

export default PromoInfo;