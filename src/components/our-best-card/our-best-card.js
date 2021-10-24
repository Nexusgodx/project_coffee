import styled from 'styled-components';


const CardBlock = styled.div`
    width: 220px;
    height: 240px;
    background-color: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    padding: 22px 20px;
    margin-top: 40px;
`;

const CardImgBlock = styled.div`
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const CardTitle = styled.h3`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.22px;
    text-align: center;
    color: #000;
`;

const CardPrice = styled.div`
    text-align: right;
    font-weight: 700;
    font-size: 14px;
    line-height: 20.22px;
    color: #000;
    margin-top: 10px;
`;

const OurBestCard = ({img, coffeName, coffePrice}) => {
    return (
        <CardBlock>
            <CardImgBlock>
                <img alt='изображение кофе' src={img}/>
            </CardImgBlock>
            <CardTitle>{coffeName}</CardTitle>
            <CardPrice>{coffePrice}$</CardPrice>
        </CardBlock>
    )
}

export default OurBestCard;