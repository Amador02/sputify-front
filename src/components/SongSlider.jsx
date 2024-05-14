
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MusicCard } from '.';

const songSlider = ({ setPlayerState, playerState, setActiveSong, activeSong, canciones }) => {
    const SliderArrow = ({ className, style, onClick, position }) => {
        const arrowStyle =
            position === 'next'
                ? { ...style, scale: '2', right: '16px', top: 'calc(calc(50%) - 11px)' }
                : { ...style, scale: '2', left: '16px', top: 'calc(calc(50%) - 11px)', zIndex: '1' };

        return <div className={className} style={arrowStyle} onClick={onClick} />;
    };
    const settings = {
      dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
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
        nextArrow: <SliderArrow position="next" />,
        prevArrow: <SliderArrow position="prev" />,
    }
    return (
        <div className='overflow-hidden sm:min-w-[48rem] sm:max-w-[48rem] max-h-[21rem] min-h-[21rem] h-max lg:min-w-[62rem] lg:max-w-[62rem] min-w-[34rem] max-w-[34rem] xl:min-w-[76rem] p-10 w-fit'>
            <Slider {...settings}>
                {canciones.map((cancion) => {
                    return (
                        <MusicCard setPlayerState={setPlayerState} playerState={playerState} key={cancion.songid} cancion={cancion} setActiveSong={setActiveSong} activeSong={activeSong} />
                    )
                })
                }
            </Slider>
        </div>
    )
}
export default songSlider;