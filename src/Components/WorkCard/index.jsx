import styled from 'styled-components'
import colors from '../../Styles/colors'
//import DefaultImage from '../../Assets/Images/logo_Webeloppeur2.png'

export default function WorkCard({ id, title, github_url, homepage, description }) {

  const newTitle = title.split('_')[ 1 ]
  console.log(newTitle)
  console.log(description)
  const startScreenshot = description.split(`![${newTitle}](`)[ 1 ]
  const screenshot = startScreenshot.split(')')[0]
  console.log(screenshot)

  return (
      <StyledDiv>
          <ImageContainer href={homepage} target="_blank" rel="noreferrer">
              <Image src={screenshot} alt="" />
          </ImageContainer>
          <TitleContainer>
              <CardTitle>{newTitle}</CardTitle>
              <GithubLink href={github_url} target="_blank" rel="noreferrer">
                  <i className="fab fa-github" />
              </GithubLink>
          </TitleContainer>
      </StyledDiv>
  )
}

const StyledDiv = styled.div`
    width: 350px;
    height: 280px;
    margin: 2%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.light};
    box-shadow: 50px 50px 50px grey;
`

const ImageContainer = styled.a`
    width: 100%;
    height: 80%;
    border-radius: 15px 15px 0 0;
`

const Image = styled.img`
    box-sizing:border-box;
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px 15px 0 0;
    object-fit:cover;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
    border-radius: 0 0 15px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
`

const CardTitle = styled.h1`
  width:80%;
  font-size: 20px;
  font-weight:700;
  color:${colors.light};
  text-align:center
`

const GithubLink = styled.a`
  font-size: 25px;
  color:${colors.light};
  margin:5px
`