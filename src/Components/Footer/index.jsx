import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../Styles/colors'

export default function Header() {
    return (
        <FMainContainer>
            <SocialContainer>
                <StyledA
                    href="https://fr.linkedin.com/in/david-weiland-3218a1182"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SocialI className="fab fa-linkedin" />
                </StyledA>
                <StyledA
                    href="https://github.com/DavidWeiland"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SocialI className="fab fa-github-square" />
                </StyledA>
                <StyledA
                    href="https://www.facebook.com/david.weiland.31508"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SocialI className="fab fa-facebook-square" />
                </StyledA>
                <StyledA
                    href="https://twitter.com/david_weiland"
                    target="_blank"
                    rel="noreferrer"
                >
                    <SocialI className="fab fa-twitter-square" />
                </StyledA>
            </SocialContainer>
            <Container>
                <StyledLink to="/">Webloppeur</StyledLink>
                <span>77440 Congis-sur-Thérouanne</span>
                <ContactContainer>
                    <i className="fas fa-phone" />
                    <StyledA href="tel:+33662505175">06 62 50 51 75</StyledA>
                </ContactContainer>
                <ContactContainer>
                    <i className="fas fa-envelope" />
                    <StyledA href="mailto:weiland.david@icloud.com">
                        weiland.david@icloud.com
                    </StyledA>
                </ContactContainer>
            </Container>
            <span>2022 - webloppeur</span>
        </FMainContainer>
    )
}

const FMainContainer = styled.div`
    display: flex;
    margin-top: 50px;
    padding: 25px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.primary};
    color: ${colors.secondary};
`

const SocialContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${colors.secondary};
    padding-bottom: 20px;
    margin: 20px;
`
const SocialI = styled.i`
    font-size: 40px;
    margin-left: 30px;
    margin-right: 30px;
    color: ${colors.secondary};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`
const StyledLink = styled(Link)`
    font-size: 25px;
    font-weight: 700;
    color: ${colors.secondary};
    margin: 15px;
`
const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
const StyledA = styled.a`
    color: ${colors.secondary};
    margin-left: 10px;
`
