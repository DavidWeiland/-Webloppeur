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
        <Text>
          ... .
        </Text>
        <GeneralSkillsContainer>
          {data.map(({ index, id, name, html_url, languages_url, tags_url, homepage, url }) => (
              (name.toLowerCase().includes("davidweiland") || name.toLowerCase().includes("fork")|| name.toLowerCase().includes("api")) ? null :
              <WorkCard
                key={`${id}-${index}`}
                title={name}
                html_url={html_url}
                languages_url={languages_url}
                tags_url={tags_url}
                homepage={homepage}
                url={url}
              />
            ))}
        </GeneralSkillsContainer>
      </ComponentContainer>
    </div>
  )
}

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center
`

const Text = styled.span`
max-width:90%;
text-align:center;
color:${colors.dark};
font-size:20px;
font-weight:400;
`

const GeneralSkillsContainer = styled.div`
  width: 80%;
  display: flex;
  flex:1;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-items:flex-start
`
