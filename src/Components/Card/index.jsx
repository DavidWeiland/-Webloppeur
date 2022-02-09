import React from 'react'
import styled from 'styled-components'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _setImage(picture) {
    if (picture.split(" ")[ 0 ] === 'fab') {
      return (
        <CardIcon className={picture} />
      )
    }
    return (
      <CardImage src={picture} alt="" />
    )
  }

  render() {
    const { title, picture } = this.props

    return (
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        {this._setImage(picture)}
      </CardContainer>
    )
  }
}

const CardContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`

const CardTitle = styled.h1`
  font-size: 25px;
  font-weight:normal
`

const CardIcon = styled.i`
  font-size: 25px;
  font-weight:normal;
  margin-left:25px
`

const CardImage = styled.img`
  height: 25px;
  margin-left:25px
`