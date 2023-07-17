'use client'
import Image from 'next/image'

import { ThemeProvider } from 'styled-components'

import Container from '../../components/container/Container'
import assetHeader from '../../public/página elementos/asset-header.png'
import Logo from '../../public/página elementos/logo.png'
import { theme } from '../../themeStyle'
import * as Styles from './styles'

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Styles.Wrapper>
                    <Styles.HeroLogo>
                        <Image
                            src={Logo}
                            width={190}
                            height={40}
                            style={{ objectFit: 'contain' }}
                            alt="logo-leadster"
                        />
                    </Styles.HeroLogo>
                    <Styles.HeroContent>
                        <Styles.HeroMainTexts>
                            <Styles.HeroBadge>
                                <p>
                                    <strong>webinars exclusivos</strong>
                                </p>
                            </Styles.HeroBadge>
                            <Styles.LessTalk>
                                Menos conversinha,
                            </Styles.LessTalk>
                            <Styles.HeroTextHeader>
                                <Styles.MoreConversion>
                                    Mais conversão
                                </Styles.MoreConversion>
                                <Styles.ImageControl>
                                    <Image
                                        src={assetHeader}
                                        width={190}
                                        height={40}
                                        style={{ objectFit: 'contain' }}
                                        alt="logo-leadster"
                                    />
                                </Styles.ImageControl>
                            </Styles.HeroTextHeader>
                        </Styles.HeroMainTexts>
                        <Styles.GrayLine></Styles.GrayLine>
                        <Styles.StrategiesText>
                            Conheça as estratégias que{' '}
                            <strong>mudaram o jogo</strong> e como aplicá-las no
                            seu negócio
                        </Styles.StrategiesText>
                    </Styles.HeroContent>
                </Styles.Wrapper>
            </Container>
        </ThemeProvider>
    )
}
