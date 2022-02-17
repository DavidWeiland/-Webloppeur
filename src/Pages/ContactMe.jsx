import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import { MainContainer } from '../Styles/MainContainer'
import colors from '../Styles/colors'

export default function ContactMe() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
        form.current.reset()
    }

    return (
        <MainContainer style={{ minHeight: '60vh' }}>
            <StyledTitle>Contact me without delay</StyledTitle>
            <StyledForm ref={form} onSubmit={sendEmail}>
                <StyledLabel>Name</StyledLabel>
                <StyledInput
                    type="text"
                    name="user_name"
                    placeholder="Marina"
                    required
                />
                <StyledLabel>Email</StyledLabel>
                <StyledInput
                    type="email"
                    name="user_email"
                    placeholder="example@example.com"
                    required
                />
                <StyledLabel>Message</StyledLabel>
                <StyledTextarea
                    name="message"
                    placeholder="I love what you do !"
                    rows="5"
                    required
                />
                <StyledSendButton type="submit" value="Send" />
            </StyledForm>
        </MainContainer>
    )
}

const StyledTitle = styled.h1`
    margin: 0;
    text-align: center;
    color: ${colors.dark};
    font-size: 40px;
    max-width: 90%;
    font-weight: 700;
`

const StyledForm = styled.form`
    min-width: 25%;
    max-width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const StyledLabel = styled.label`
    margin-top: 25px;
    color: ${colors.primary};
    font-size: 20px;
    font-weight: 700;
    padding-left: 11px;
`

const StyledInput = styled.input`
    font-size: 20px;
    font-weight: 400;
    height: 15px;
    border-radius: 15px;
    border: 1px solid grey;
    box-shadow: inset 2px 2px 10px #c5c5c5;
    padding: 10px;
`

const StyledTextarea = styled.textarea`
    font-size: 20px;
    font-weight: 400;
    min-height: 30px;
    border-radius: 15px;
    border: 1px solid grey;
    box-shadow: inset 2px 2px 10px #c5c5c5;
    padding: 10px;
`

const StyledSendButton = styled.input`
    margin-top: 25px;
    font-size: 25px;
    font-weight: 700;
    background-color: ${colors.primary};
    color: ${colors.light};
    border: 0;
    border-radius: 15px;
    border: 1px solid grey;
    box-shadow: 5px 5px 15px grey, inset -3px -3px 10px grey,
        inset 3px 3px 10px ${colors.secondary};
    &:active {
        box-shadow: 5px 5px 10px grey, inset -3px -3px 10px grey,
            inset 3px 3px 10px ${colors.secondary};
    }
`
