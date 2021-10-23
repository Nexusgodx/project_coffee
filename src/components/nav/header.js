import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import navLogo from '../../resources/img/beans-main-logo.png';

const ListItem = styled.li`
    list-style-type: none;
`;
const NavLink = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 12px;
`;

const LinksWrapper = styled.ul`
    padding: 0;
    margin: 0;
`;

const Header = () => {
    return (
        <Row as='header'>
            <Col as='nav' xl={4} >
                <LinksWrapper className='d-flex justify-content-between align-items-end w-100'>
                    <ListItem className='d-flex align-items-end'>
                        <img src={navLogo} alt='логотип'/>
                        <NavLink href='#'>Coffee house</NavLink>
                    </ListItem>
                    <ListItem><NavLink href='#'>Our coffee</NavLink></ListItem>
                    <ListItem><NavLink href='#'>For your pleasure</NavLink></ListItem>
                </LinksWrapper>
            </Col>
        </Row>
    )
}

export default Header;