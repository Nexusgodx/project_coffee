import styled from 'styled-components';
import underlineImg from '../../resources/img/Beans-logo-black.svg';

const MainSubtitleEl = styled.h2`
    font-weight: 400;
    font-size: 24px;
    color: #000;
    text-align: center;
`;

const Underline = styled.img`
    margin-top: 20px;
`;

const MainSubtitle = ({text, underline = false}) => {
    const underlineBlock = underline ? <Underline alt='подчеркивание' src={underlineImg}/> : '';

    return (
        <>
            <MainSubtitleEl>
                {text}
            </MainSubtitleEl>
            {underlineBlock}
        </>
    )
}

export default MainSubtitle;