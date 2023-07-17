import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 200px;
`

export const HeroLogo = styled.p`
    display: flex;
    justify-content: center;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const HeroMainTexts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: relative;
    white-space: nowrap;
`

export const HeroBadge = styled.div`
    border: solid;
    border-radius: 50px;
    border-bottom-left-radius: 0px;
    border-color: #07b1ff;
    border-width: 2px;
    padding: 5px 23px;
    color: #007eff;
    text-transform: uppercase;
`

export const HeroTextHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImageControl = styled.div`
    position: relative;
    right: calc(20% - 27vw);
    top: -12vh;
`

export const LessTalk = styled.p`
    font-size: clamp(25px, 2.5vw, 50px);
    color: #1c3c50;
    font-weight: bold;
`

export const MoreConversion = styled.p`
    font-size: clamp(50px, 5.2vw, 100px);
    font-weight: bold;
    background-image: linear-gradient(to right, #2c83fb, #1f76f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const GrayLine = styled.span`
    width: 100%;
    height: 1px;
    background-color: #c8d4dd;
    max-width: 61%;
    margin-bottom: 10px;
`

export const StrategiesText = styled.p`
    color: #1c3c50;
    font-size: 20px;
    font-weight: 500;
`
