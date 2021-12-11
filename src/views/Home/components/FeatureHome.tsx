import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button, Text } from '@pancakeswap/uikit'
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
  height: calc(100vw * 3);
  background-repeat: no-repeat;
  background-size: cover;
`

const HeaderSection = styled.div`
  max-width: 1200px;
  margin: auto;
`
const FooterSection = styled.div`
  background-color: #305d00;
  max-width: 1200px;
  margin: auto;
`

const CustomFontText = styled(Text)`
  font-family: Glue Gun;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }) => fontSize || '24px'};
  line-height: 28px;
  letter-spacing: 0.07em;
  color: white;
  text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000;
`
const ButtonSeemore = styled(Button)`

`
const PartnerWrap = styled.div`
  padding: 8px 32px;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  height: 120px;
`

const FeatureHome = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <FeatureBackground>
      <HeaderSection>
        <Flex justifyContent="center" mt={32}>
          <CustomFontText fontSize="36px">MARKETPLACE</CustomFontText>
        </Flex>
        <Flex justifyContent="center" mt={32} flexDirection="column" alignContent="center" alignItems="center">
          <Text fontSize="24px">DoragonLand players could start trading NFT items on Mirana</Text>
          <Text fontSize="24px">Marketplace to earn enormous financial benefits.</Text>
        </Flex>
        <Flex justifyContent="center" mt={64}>
          <Flex flex={4} justifyContent="flex-end">
            <img src="/images/home/list-horse.png" width="70%" alt="Phoenix" />
          </Flex>
          <Flex flex={4}>
            <img src="/images/home/marketplace-2.png" width="70%" alt="Phoenix" />
          </Flex>
        </Flex>
      </HeaderSection>
      <HeaderSection>
        <Flex justifyContent="center" mt={32}>
          <CustomFontText fontSize="36px">GAME PLAY</CustomFontText>
        </Flex>
        <Flex justifyContent="center" mt={64}>
          <Flex flex={4} justifyContent="flex-end">
            <img src="/images/home/game-play-left.png" width="60%" alt="Phoenix" />
          </Flex>
          <Flex flex={4} flexDirection="column">
            <img src="/images/home/game-play-right.png" width="60%" alt="Phoenix" />
            <CustomFontText>Monster</CustomFontText>
            <Text width="30%" minWidth={300}>
              The mode in which players join battles and competitions to fight against other opponents and climb to the
              top of the leaderboard. Your dragon warriors will fight against others of squads, selected from a dozens
              of unique legends, each with unique abilities to prove the strongest and gain the highest ranking.
            </Text>
          </Flex>
        </Flex>
      </HeaderSection>
      <HeaderSection>
        <Flex justifyContent="center" mt={32}>
          <CustomFontText fontSize="36px">FEATURES</CustomFontText>
        </Flex>
        <Flex justifyContent="center" mt={64}>
          <Flex flex={4} justifyContent="center" flexDirection="column" alignItems="center">
            <img src="/images/home/feature-1.png" width="30%" alt="Phoenix" />
            <CustomFontText>NFT collectibles</CustomFontText>
            <Text width="30%" minWidth={300}>
              DoragonLand is the paradise for dire collectors to possess collectibles and players can receive NFTs while
              mining, farming
            </Text>
            <ButtonSeemore>
              <Text>See more</Text>
            </ButtonSeemore>
          </Flex>
          <Flex flex={4} justifyContent="center" flexDirection="column" alignItems="center">
            <img src="/images/home/feature-2.png" width="30%" alt="Phoenix" />
            <CustomFontText>Marketplace</CustomFontText>
            <Text width="30%" minWidth={300}>
              DoragonLand marketplace provides an efficient place for players to trade NFT items on and earn massive
              financial benefits
            </Text>
            <ButtonSeemore>
              <Text>See more</Text>
            </ButtonSeemore>
          </Flex>
        </Flex>
        <Flex justifyContent="center" mt={64}>
          <Flex flex={4} justifyContent="center" flexDirection="column" alignItems="center">
            <img src="/images/home/feature-3.png" width="30%" alt="Phoenix" />
            <CustomFontText>Staking</CustomFontText>
            <Text width="30%" minWidth={300}>
              Players and investors can start staking their $DOR. $DOR will be staked in the different staking pools for
              a certain period of time
            </Text>
            <ButtonSeemore>
              <Text>See more</Text>
            </ButtonSeemore>
          </Flex>
          <Flex flex={4} justifyContent="center" flexDirection="column" alignItems="center">
            <img src="/images/home/feature-4.png" width="30%" alt="Phoenix" />
            <CustomFontText>Ownership</CustomFontText>
            <Text width="30%" minWidth={300}>
              The game mechanism ensures the true in-game assets ownership for players. DoragonLand is run on Binance
              Smart
            </Text>
            <ButtonSeemore>
              <Text>See more</Text>
            </ButtonSeemore>
          </Flex>
        </Flex>
        <Flex justifyContent="center" mt={64}>
          <Flex justifyContent="flex-end">
            <img src="/images/home/phoenix-footer.png" width="100%" alt="Phoenix" />
          </Flex>
        </Flex>
      </HeaderSection>
      <HeaderSection>
        <Flex justifyContent="center" mt={32}>
          <CustomFontText fontSize="36px">PARTNER</CustomFontText>
        </Flex>
        <Flex justifyContent="center" mt={64} flexDirection="column">
          <Flex justifyContent="center" mt={64}>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-1.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-2.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-3.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-4.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
          </Flex>
          <Flex justifyContent="center" mt={64}>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-5.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-6.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-7.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
            <Flex flex={4} justifyContent="center" alignItems="center">
              <PartnerWrap>
                <img src="/images/home/partner-8.png" width="60%" alt="Phoenix" />
              </PartnerWrap>
            </Flex>
          </Flex>
        </Flex>
      </HeaderSection>
      <FooterSection>
        <Flex justifyContent="center" mt={64}>
          <Flex flex={4} flexDirection="column">
            <Text bold color="#fff">
              Contact us
            </Text>
            <Text color="#fff">Email: info@doragonland.io</Text>
          </Flex>
          <Flex flex={4} justifyContent="flex-end" alignItems="center">
            <img src="/images/home/telegram-logo.png" width="40px" alt="Phoenix" />
            <img src="/images/home/telegram-logo.png" width="40px" alt="Phoenix" />
          </Flex>
        </Flex>
      </FooterSection>
    </FeatureBackground>
  )
}

export default FeatureHome
