import { Link } from 'react-router-dom'
import colors from './colors'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  font-weight:bold
`