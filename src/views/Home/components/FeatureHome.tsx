import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`
const FeatureBackground = styled.div`
  background-image: url(/images/home/home-second.png);
  height: calc(100vw * 2);
  background-repeat: no-repeat;
  background-size: cover;
`

const HeaderSection = styled.div``

const FeatureHome = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <FeatureBackground>
      <HeaderSection>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          maxWidth={1200}
          alignSelf="center"
          margin="auto"
          pt={24}
        >
          <Flex flex={1} flexDirection="row" justifyContent="center" alignItems="center">
            <Flex flex={1} justifyContent="center" alignItems="center">
              <img src="/images/home/menu/marketplace.png" alt="Marketplace" />
            </Flex>
            <Flex flex={1} justifyContent="center" alignItems="center">
              <img src="/images/home/menu/Staking.png" alt="Staking" />
            </Flex>
            <Flex flex={1} justifyContent="center" alignItems="center">
              <img src="/images/home/menu/Whitepaper.png" alt="Whitepaper" />
            </Flex>
            <Flex flex={1} justifyContent="center" alignItems="center">
              <img src="/images/home/menu/play-now.png" alt="Play now" />
            </Flex>
          </Flex>
        </Flex>
      </HeaderSection>
    </FeatureBackground>
  )
}

export default FeatureHome
