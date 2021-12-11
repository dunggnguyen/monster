import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import { Flex, Heading, Button, Text } from '@pancakeswap/uikit'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper'

const SwiperWrap = styled.div`
  display: block;
  width: 100%;
  .swiper {
    width: 300px;
    height: 300px;
    padding: 50px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    position: relative;
    background: url('/images/home/background-slide.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: -60px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    max-width: 600px;
  }
  .swiper-button-next {
    background-image: url('/images/home/slide-next.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 68px;
    width: 68px;
  }

  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev {
    background-image: url('/images/home/slide-back.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 68px;
    width: 68px;
  }

  .swiper-button-prev::after {
    display: none;
  }
`
const SwiperWrapBottom = styled.div`
  display: block;
  width: 100%;
  background-color: #305e00;
  .swiper {
    width: 300px;
    height: 300px;
    padding: 50px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: -60px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    max-width: 600px;
  }
  .swiper-button-next {
    background-image: url('/images/home/slide-next.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 68px;
    width: 68px;
  }

  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev {
    background-image: url('/images/home/slide-back.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 68px;
    width: 68px;
  }

  .swiper-button-prev::after {
    display: none;
  }
`
// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination])

const SlideItemWrap = styled.div`
  width: 25%;
`
const SlideItemWrapBottom = styled.div`
  width: 25%;
`

const slideConfig = [
  {
    id: '01',
    srcPath: '/images/home/horse/Grayhorse_Trans_1.png',
    alt: 'Grayhorse Trans',
  },
  {
    id: '02',
    srcPath: '/images/home/horse/Grayhorse_Trans_1.png',
    alt: 'Grayhorse Trans',
  },
  {
    id: '03',
    srcPath: '/images/home/horse/Grayhorse_Trans_1.png',
    alt: 'Grayhorse Trans',
  },
  {
    id: '04',
    srcPath: '/images/home/horse/Grayhorse_Trans_1.png',
    alt: 'Grayhorse Trans',
  },
]


export default function SwiperCharacter() {
  const [activeIndexSlide, setActiveIndexSlide] = useState(0);
  const onActiveIndexChange = (swiper) => {
    setActiveIndexSlide(swiper.activeIndex - 1 )
    console.log('onActiveIndexChange', activeIndexSlide, slideConfig[activeIndexSlide], swiper)
  }

  return (
    <>
      <SwiperWrap>
        <Swiper
          effect="flip"
          grabCursor
          pagination
          navigation
          loop
          className="mySwiper"
          onActiveIndexChange={onActiveIndexChange}
        >
          {slideConfig.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <SlideItemWrap>
                  <img src={slide.srcPath} width={280} alt={slide.alt} />
                </SlideItemWrap>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </SwiperWrap>
      <SwiperWrapBottom>
        <Swiper effect="flip" grabCursor pagination navigation loop className="mySwiper">
          {slideConfig.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <SlideItemWrapBottom>
                  <Flex>
                    <Flex>
                      <img src={slide.srcPath} width={280} alt={slide.alt} />
                    </Flex>
                    <Flex>
                      <Text>1. LightBlue</Text>
                      <Text>
                        A Crazy Defense Heroes Bronze Chest contains 3 TOWER Game Card NFT’s ranging in rarity from
                        Common to Epic.
                      </Text>
                    </Flex>
                  </Flex>
                </SlideItemWrapBottom>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </SwiperWrapBottom>
    </>
  )
}
