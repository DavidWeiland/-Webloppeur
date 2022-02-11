import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../Styles/colors'
import WorkCard from '../WorkCard'

export default function MyWork() {
  
const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/DavidWeiland/repos')
      .then(response => response.ok ? response.json() : console.error('code: ', response.status))
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])

  return (
      <div>
          <ComponentContainer>
              <StyledSubTitle>My work</StyledSubTitle>
              <StyledText>
                  Here are projects I've worked. Want to see more ?{' '}
                  <GithubLink
                      href="https://github.com/DavidWeiland"
                      target="_blank"
                      rel="noreferrer"
                  >
                      Visit my Github Page.
                  </GithubLink>
              </StyledText>
              <GeneralSkillsContainer>
                  {data.map(
                      ({
                          index,
                          id,
                          name,
                          html_url,
                          homepage,
                          url,
                          description,
                          fork,
                      }) =>
                          name.toLowerCase().includes('davidweiland') ||
                          fork ||
                          name.toLowerCase().includes('api') ||
                          !homepage ? null : (
                              <WorkCard
                                  key={`${id}-${index}`}
                                  title={name}
                                  github_url={html_url}
                                  homepage={homepage}
                                  url={url}
                                  description={description}
                              />
                          )
                  )}
              </GeneralSkillsContainer>
          </ComponentContainer>
      </div>
  )
}

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
`

const StyledSubTitle = styled.h2`
    margin-top: 100px;
    max-width: 80%;
    text-align: center;
    color: ${colors.dark};
    font-size: 30px;
    font-weight: 700;
`

const StyledText = styled.span`
    margin-top: 0;
    max-width: 80%;
    text-align: center;
    color: ${colors.dark};
    font-size: 25px;
    font-weight: 400;
`

const GithubLink = styled.a`
    font-size: 25px;
    color: ${colors.primary};
    font-weight: 700;
`

const GeneralSkillsContainer = styled.div`
  margin-top:20px;
  padding: 50px;
  display: flex;
  flex:1;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-items:flex-start;
  background-color: ${colors.light};
`
