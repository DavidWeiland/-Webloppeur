import {useState} from 'react'
import styled from 'styled-components'
import colors from '../../Styles/colors'
import Modal from '../Modal'

export default function WorkCard({ id, title, html_url, languages_url, tags_url, homepage }) {
  const [ modal, setModal ] = useState(false)
  
  const modalFunction = () => {
    setModal(!modal)
 }

  const newTitle = title.split('-')[ 1 ]

  if (homepage) {
    return (
      <StyledDiv>
        <CardContainer href={homepage} target='_blank' rel="noreferrer">
          <CardTitle>{newTitle}</CardTitle>
          <a href={html_url} target='_blank' rel="noreferrer"><i className='fab fa-github' /></a>
        </CardContainer>
      </StyledDiv>
    )
  } else {
    return (
      <StyledDiv>
        <CardContainerDiv onClick={()=>modalFunction()}>
          <CardTitle>{newTitle}</CardTitle>
          <a href={html_url} target='_blank' rel="noreferrer"><i className='fab fa-github' /></a>
        </CardContainerDiv>

        <Modal state={modal} config={{}} close={modalFunction}>
          <p>This project need an API to run, please email-me for more experience</p>
        </Modal>
      </StyledDiv>
    )
  }
}

const CardContainer = styled.a`
  width: 100%;
  height: 100%;
  border:2px solid ${colors.primary};
  border-radius: 15px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const CardContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  border:2px solid ${colors.primary};
  border-radius: 15px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const StyledDiv = styled.div`
  width: 250px;
  height:200px;
  margin:1%;
`

const CardTitle = styled.h1`
  width:80%;
  font-size: 20px;
  font-weight:normal;
  color:${colors.light};
  background-color:rgba(0, 0, 0, 0.3);
  text-align:center
`
