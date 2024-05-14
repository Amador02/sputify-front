
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
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SliderArrow position="next" />,
        prevArrow: <SliderArrow position="prev" />,
    }
    return (
        <div className='overflow-hidden max-w-[43rem] w-min'>
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