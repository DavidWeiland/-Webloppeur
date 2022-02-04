import { StyledLink } from '../Styles/StyledLink'
import { MainContainer } from '../Styles/MainContainer'
import styled from 'styled-components'
import colors from '../Styles/colors'
import Profile from '../Assets/Images/Avatar.png'
import Presentation from '../Components/Presentation'
import MyWork from '../Components/MyWork'

export default function Home() {
  return (
    <MainContainer>
      <StyledTitle>Developer of JavaScript and React apps</StyledTitle>
      <StyledText>My job : translate your ideas into dynamic and responsive web apps</StyledText>
      <ImageContainer />
      <Presentation />
      <StyledSubTitle>My work</StyledSubTitle>
      <StyledText>Here are projects I've worked. Want to see more ? <StyledLink to="" >
        Visit my Github Page.</StyledLink>
      </StyledText>
      <MyWork />
    </MainContainer>
  )
}

const ImageContainer = styled.div`
margin:50px;
height:200px;
width:200px;
border:2px solid ${colors.primary};
border-radius:100%;
background: url(${Profile}) center center / 100% auto no-repeat;
`

const StyledTitle = styled.h1`
margin:0;
text-align:center;
color:${colors.dark};
font-size:40px;
max-width:90%;
font-weight:700;
`

const StyledSubTitle = styled.h2`
margin-top:100px;
max-width:80%;
text-align:center;
color:${colors.dark};
font-size:30px;
font-weight:700;
`

const StyledText = styled.span`
margin-top:0;
max-width:80%;
text-align:center;
color:${colors.dark};
font-size:25px;
font-weight:400;
`