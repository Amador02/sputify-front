import { useNavigate } from 'react-router-dom';
import Boton from '../login/Botton';
const consulta = ({ setModal, setModalContent }) => {
    const nav = useNavigate();
    return (
        <div className='grow w-full h-full flex flex-col items-center justify-center gap-4'>
            <div className='bg-white flex flex-col items-center p-5 gap-4 rounded-2xl border-black border-4'>
                <label className='text-lg text-black font-bold text-center'>Consultas</label>
                <Boton text='Consultar genero mas canciones' onClick={() => {
                    const genero = 'POP'
                    setModal(true)
                    setModalContent(<label className='text-black'>
                        {`El genero con más canciones es: ${genero}`}
                    </label>)
                }} svg={
                    <svg
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#fff"
                        className='mr-2'
                        width='24px'
                    >
                        <g transform="translate(-204, -3599.000000)" fill="#fff">
                            <path
                                d="M224,3601.05129 L224,3610.55901 C224,3612.90979 222.17612,3614.95492 219.888035,3614.89646 C217.266519,3614.82877 215.248971,3612.1662 216.234285,3609.31593 C216.777356,3607.74464 218.297755,3606.71797 219.920978,3606.69233 C220.695653,3606.68105 220.976173,3606.88208 222.003416,3607.24105 L222.003416,3604.12822 C222.003416,3603.56207 221.556181,3603.10258 221.005124,3603.10258 L213.018786,3603.10258 C212.467729,3603.10258 212.020494,3603.56207 212.020494,3604.12822 L212.020494,3614.65851 C212.020494,3617.02057 210.179644,3619.07289 207.881575,3618.99801 C205.681339,3618.92622 203.914362,3617.02775 204.00321,3614.73031 C204.090061,3612.51594 205.989811,3610.84209 208.147121,3610.79081 C209.166377,3610.76619 209.352059,3610.92619 210.02391,3611.34363 L210.02391,3601.05129 C210.02391,3599.91795 210.91838,3599 212.020494,3599 L222.003416,3599 C223.106529,3599 224,3599.91795 224,3601.05129"
                            >
                            </path>
                        </g>
                    </svg>
                } />
                <Boton text='Consultar artista mas popular' onClick={() => {
                    const artista = 'Carlos Vives'
                    // TODO base
                    setModal(true)
                    setModalContent(
                        <label className='text-black'>
                            {`El artista mas popular es: ${artista}`}
                        </label>
                    )
                }} svg={
                    <svg className='mr-2' width='24px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            id="Vector"
                            d="M20.0005 7L14.1543 12.9375C14.0493 13.0441 13.9962 13.0976 13.9492 13.1396C13.1899 13.8193 12.0416 13.8193 11.2822 13.1396C11.2352 13.0976 11.1817 13.0442 11.0767 12.9375C10.9716 12.8308 10.9191 12.7774 10.8721 12.7354C10.1127 12.0557 8.96397 12.0557 8.20461 12.7354C8.15771 12.7773 8.10532 12.8305 8.00078 12.9367L4 17M20.0005 7L20 13M20.0005 7H14"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                } />
            </div>
        </div>
    );
}
export default consulta;