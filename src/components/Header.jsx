import { Spotify, Person } from '../assets/svgs';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <div className='bg-[#080e16] p-1 flex flex-row items-center justify-center'>
            <div className='h-10 w-fit flex flex-row items-end grow'>
                <NavLink to="/" className='p-0 h-10 '>
                    <img className='pl-5 w-full h-full pr-5 ' src={Spotify} alt="spotify" />
                </NavLink>
            </div>
            <NavLink to="/login" className='w-100 h-max border-4 bg-white relative mx-auto rounded-full overflow-hidden'>
                <img className='w-10 h-full' src={Person} alt="spotify" />
            </NavLink>
        </div>
    );
}