
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MusicCard } from '.';
import { useRef } from 'react';

const songSlider = ({ setPlayerState, playerState, setActiveSong, activeSong, canciones }) => {
  const SliderArrow = ({ className, style, onClick, position }) => {
    const arrowStyle =
      position === 'next'
        ? { ...style, scale: '2', right: '16px', top: 'calc(calc(50%) - 11px)' }
        : { ...style, scale: '2', left: '16px', top: 'calc(calc(50%) - 11px)', zIndex: '1' };

    return (<div className={className} style={arrowStyle} onClick={onClick} />);
  };
  const slider = useRef();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      }
    ],
    autoplay: true,
    speed: 250,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  }
  return (
    <div className='relative items-center sm:min-w-[48rem] sm:max-w-[48rem] max-h-[24rem] min-h-[24rem] h-max lg:min-w-[62rem] lg:max-w-[62rem] min-w-[34rem] max-w-[34rem] xl:min-w-[76rem] p-10 w-fit flex'>
      <div className='select-none rotate-180 cursor-pointer w-10 min-w-10 border-white border-2 rounded-full relative -top-6 left-10 z-10 hover:scale-125 transition-all' onClick={() => slider.current.slickPrev()}>
        <svg className='' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Slider className='w-full grow' ref={slider} {...settings} arrows={false}>
        {canciones.map((cancion) => {
          return (
            <MusicCard setPlayerState={setPlayerState} playerState={playerState} key={cancion.url} cancion={cancion} setActiveSong={setActiveSong} activeSong={activeSong} />
          )
        })
        }
      </Slider>
      <div className='select-none cursor-pointer w-10 min-w-10 border-white border-2 rounded-full relative -top-6 right-10 z-10 hover:scale-125 transition-all'  onClick={() => slider.current.slickNext()}>
        <svg className='' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    </div>
  )
}
export default songSlider;