import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav `
background : #000;
height : 50px;
display : flex;
justify-content : center;
align-items : center;
font-size : 1rem;
position : sticky;
top : 0;
z-index : 10;

@media screen and (max-width : 960px){
    transition : 0.8s all ease;
}
`

export const NavBarContainer = styled.div `
display : flex;
justify-content : space-between;
height : 50px;
width : 100%;
z-index : 1;
padding : 0 24px;
max-width : 1100px;
`
export const NavbarLogo = styled(LinkR) `
color : red;
justify-self : flex-start;
cursor :pointer;
font-size : 1.5 rem ;
display : flex;
align-items : center;
margin-left : 24px;
font-weight : bold;
text-decoration: none;
`

export const MobileIcon = styled.div `
display : none;

@media screen and (max-width : 768px){
    display : block;
    position : absolute;
    top : 0;
    right : 0;
    transform : translate(-100%,40%);
    font-size: 1.5rem;
    cursor: pointer;
    color : #fff;
}
`

export const NavElements = styled.ul  `
display : flex;
align-items: center;
list-style : none;
text-align : center;
margin-right : -22px;
/* border : 1px solid red; */

@media screen and (max-width : 768px){
    display : none;
}
`

export const NavItems = styled.li`
height: 50px;
`

export const NavLinks = styled(LinkR)`
color : #fff;
display : flex;
align-items : center;
padding : 0 2rem;
height : 100%;
cursor : pointer;
text-decoration: none;

&:active {
    border-bottom : 3px solid #01bf71;
}
&:hover {
    border-bottom : 3px solid #01bf71;
}
`
export const NavBtn = styled.nav`
display : flex;
align-items : center;

@media screen and (max-width : 768px){
    display : none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space : nowrap;
padding : 10px 22px;
color : #010606;
font-size : 15

px;
outline : none;
border : none;
cursor: pointer;
transition : all 0.2  ease-in-out;
text-decoration: none;

&:hover{
    transition : all 0.2  ease-in-out;
    background : #fff;
    color : #010606;
}
`
;
