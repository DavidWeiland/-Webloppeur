import {useState} from 'react'
import styled from 'styled-components'
import colors from '../../Styles/colors'
import Modal from '../Modal'
//import image from '../../Assets/Images/logo_Webeloppeur2.png'

export default function WorkCard({ id, title, html_url, languages_url, tags_url, homepage, url }) {
  const [ modal, setModal ] = useState(false)
  
  const modalFunction = () => {
    setModal(!modal)
 }

  const newTitle = title.split('-')[ 1 ]

  if (homepage) {
    return (
      <StyledDiv>
        <CardContainer href={homepage} target='_blank' rel="noreferrer">
          <TitleContainer>
            <CardTitle>{newTitle}</CardTitle>
            {/* a parent a => a adjacent à a <GithubLink href={html_url} target='_blank' rel="noreferrer"><i className='fab fa-github' /></GithubLink> */}
          </TitleContainer>
        </CardContainer>
      </StyledDiv>
    )
  } else {
    return (
      <StyledDiv>
        <CardContainerDiv onClick={() => modalFunction()}>
          <TitleContainer>
            <CardTitle>{newTitle}</CardTitle>
            <GithubLink href={html_url} target='_blank' rel="noreferrer"><i className='fab fa-github' /></GithubLink>
          </TitleContainer>
        </CardContainerDiv>

        <Modal state={modal} config={{}} close={modalFunction}>
          {(newTitle === "Webloppeur") ? <p>You are already on the corresponding project</p> : <p>This project need an API to run, please email-me for more experience</p>}
        </Modal>
      </StyledDiv>
    )
  }
}

const StyledDiv = styled.div`
  width: 250px;
  height:200px;
  margin:1%;
  border:2px solid ${colors.primary};
  border-radius: 15px;
  background: url('https://user-images.githubusercontent.com/70886723/152567729-59e577e1-e223-4fd3-8233-3ebfc245b395.png') top center / 100% auto no-repeat;
`

const CardContainer = styled.a`
  width: 98%;
  height: 98%;
  display:flex;
  align-items:flex-end;
`

const CardContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  align-items:flex-end;
`

const TitleContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const CardTitle = styled.h1`
  width:80%;
  font-size: 20px;
  font-weight:700;
  color:${colors.primary};
  text-align:center
`

const GithubLink = styled.a`
  font-size: 25px;
  color:${colors.primary};
  margin:5px
`