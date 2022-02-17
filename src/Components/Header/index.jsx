import React from "react";
import { Link } from "react-router-dom";
import { StyledLink } from '../../Styles/StyledLink'
import styled from "styled-components";
import colors from "../../Styles/colors";
import Logo from '../../Assets/Images/logo_Webloppeur.png'
import { useLocation } from "react-router-dom";


export default function Header() {
  const { pathname } = useLocation()

  return (
      <HMainContainer>
          <LogoContainer to="/">
              <Image src={Logo} alt="" />
          </LogoContainer>
          <NavContainer>
              {pathname === '/' ? (
                  <StyledLink to="/contact">Contact Me</StyledLink>
              ) : (
                  <StyledLink to="/">Home Page</StyledLink>
              )}
          </NavContainer>
      </HMainContainer>
  )
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
const LogoContainer = styled(Link)`
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
