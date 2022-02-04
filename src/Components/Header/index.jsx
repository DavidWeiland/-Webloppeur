import React from "react";
import { StyledLink } from '../../Styles/StyledLink'
import styled from "styled-components";
import colors from "../../Styles/colors";
import Logo from '../../Assets/Images/logo_Webeloppeur2.png'


export default class Header extends React.Component {
  render() {
    return (
      <HMainContainer>
        <LogoContainer>
          <Image src={Logo} alt="" />
        </LogoContainer>
        <NavContainer>
          <StyledLink to='/' >Home page</StyledLink>
          <StyledLink to='*' >Error page</StyledLink>
        </NavContainer>
      </HMainContainer>
    )
  }
}

const HMainContainer = styled.div`
  display: flex;
  flex:1;
  height: 100px;
  max-width:1440px;
  margin: auto;
  justify-content: space-between;
  align-items:center
`
const LogoContainer = styled.div`
  display: flex;
  flex:1;
  height: 200%;
  margin-top: 20px;
  justify-content: center;
  align-items:center;
  color: ${colors.light}
`
const Image = styled.img`
height:100%;
`

const NavContainer = styled.div`
  display: flex;
  flex:4;
  height: 100%;
  margin: auto;
  justify-content: flex-end;
  align-items:center
`
