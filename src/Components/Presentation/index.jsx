import styled from 'styled-components'
import colors from '../../Styles/colors'
import datas from '../../data/datas'
import Card from '../Card'

export default function Presentation() {
  return (
    <div>
      <DevicesContainer>
        <DevicesIconXS className='fas fa-mobile-alt' /><DevicesIconL className='fas fa-laptop' /><DevicesIconXL className='fas fa-desktop' /><DevicesIconS className='fas fa-tablet-alt' />
      </DevicesContainer>
      <BGContainer />
      <ComponentContainer>
        <StyledTitle>
          Hi, I'm David. Welcome on my page.
        </StyledTitle>
        <Text>
          Convinced that being present on the web has become essential - which is even more true with the current health crisis - I offer my knowledge in the development of frontend or backend javascript applications.
        </Text>
        <GeneralSkillsContainer>
          <SkillsContainer>
            <SkillsIcon className='fas fa-code' />
            <SkillsTitle>frontend</SkillsTitle>
            <SkillsText>I'm ready to work on frontend services</SkillsText>
            <SkillsSubTitle>Regularly, I'm using :</SkillsSubTitle>
            {datas.map(({ index, title, level, picture, stand }) => (
              (stand==="frontend") ?
              <Card
                key={`${title}-${index}`}
                title={title}
                level={level}
                picture={picture}
                stand={stand}
              /> : null
            ))}
          </SkillsContainer>
          <SkillsContainer>
            <SkillsIcon className='fas fa-server' />
            <SkillsTitle>backend</SkillsTitle>
            <SkillsText>During my apprenticeship, I set up API Rest as a backend service</SkillsText>
            <SkillsSubTitle>I've already used :</SkillsSubTitle>
            {datas.map(({ index, title, level, picture, stand }) => (
              (stand==="backend") ?
              <Card
                key={`${title}-${index}`}
                title={title}
                level={level}
                picture={picture}
                stand={stand}
              /> : null
            ))}
          </SkillsContainer>
          <SkillsContainer>
            <SkillsIcon className='fas fa-terminal' />
            <SkillsTitle>workspace</SkillsTitle>
            <SkillsText>I use the most common tools for better compatibility</SkillsText>
            <SkillsSubTitle>my working environment includes :</SkillsSubTitle>
            {datas.map(({ index, title, level, picture, stand }) => (
              (stand==="env") ?
              <Card
                key={`${title}-${index}`}
                title={title}
                level={level}
                picture={picture}
                stand={stand}
              /> : null
            ))}
          </SkillsContainer>
        </GeneralSkillsContainer>
      </ComponentContainer>
    </div>
  )
}

const DevicesContainer = styled.div`
  margin-top:100px;
  margin-bottom:-2px;
  color: ${colors.primary};
  display:flex;
  justify-content:center;
  align-items:flex-end
`
const DevicesIconXL = styled.i`
  font-size:250px
`
const DevicesIconL = styled.i`
  font-size:200px
`
const DevicesIconS = styled.i`
  font-size:150px
`
const DevicesIconXS = styled.i`
  font-size:100px
`

const BGContainer = styled.div`
  margin-top:0px;
  height:500px;
  background-color: ${colors.primary};
`

const ComponentContainer = styled.div`
  margin-top:-400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center
`

const StyledTitle = styled.h1`
text-align:center;
color:${colors.light};
font-size:30px;
max-width:90%;
font-weight:700;
`

const Text = styled.span`
margin-top:0;
max-width:60%;
text-align:center;
color:${colors.light};
font-size:20px;
font-weight:400;
`

const GeneralSkillsContainer = styled.div`
  width: 70%;
  margin-top:100px;
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: center;
  align-items:flex-start
`

const SkillsContainer = styled.div`
  width: 30%;
  height:700px;
  margin: 1%;
  padding: 5%;
  background-color:${colors.light};
  border-radius:15px;
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center
`

const SkillsIcon = styled.i`
  font-size: 60px;
  color:${colors.primary}
`

const SkillsTitle = styled.h2`
  font-size: 30px;
  color:${colors.dark}
`

const SkillsText = styled.span`
  font-size: 20px;
  color:${colors.dark};
  margin-bottom:20px;
`
const SkillsSubTitle = styled.h3`
  font-size: 20px;
  color:${colors.dark}
`