import { StyledLink } from '../Styles/StyledLink'
import { MainContainer } from '../Styles/MainContainer'
import styled from 'styled-components'
import colors from '../Styles/colors'

export default function Error() {
  return (
    <MainContainer>
      <StyledTitle>404</StyledTitle>
      <StyledSubTitle>Oh non, pas encore cette page...</StyledSubTitle>
      <UnderSubTitle>Pour rentrer à la maison, c'est par<StyledLink to="/" style={{ fontSize: '25px' }}>ici</StyledLink>.</UnderSubTitle>
    </MainContainer>
  )
}

const StyledTitle = styled.h1`
margin:50px;
color:${colors.dark};
font-size:250px
`

const StyledSubTitle = styled.h2`
text-align:center;
max-width:80%;
color:${colors.dark};
font-size:40px
`

const UnderSubTitle = styled.span`
text-align:center;
max-width:80%;
color:${colors.dark};
font-size:25px
`