import { useState, useEffect } from "react";
import { Header, RouterAdmin } from '../components'

const admin = ({ setLoggedIn }) => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState();
    useEffect(() => {
        const modalElement = document.getElementById('modal')
        if (modalElement) {
            modalElement.style.pointerEvents = modal ? 'auto' : 'none';
            modalElement.style.opacity = modal ? '1' : '0';
        }
    }, [modal])
    return (
        <div className='relative w-svw h-svh flex flex-col' >
            <Header setLoggedIn={setLoggedIn} esUsuario={false} />
            <div id='modal' className='absolute top-0 left-0 w-full h-full bg-black z-20 bg-opacity-60 flex items-center justify-center transition-opacity'>
                <div className='bg-white min-w-56 p-4 rounded-md flex flex-col'>
                    <div className='flex gap-2 items-center text-black'>
                        <label className='grow font-bold text-lg'>Información</label>
                        <button
                            onClick={() => setModal(p => !p)}
                            className="w-fit h-fit group cursor-pointer outline-none rotate-45 hover:-rotate-45 duration-300 self-end"
                        >
                            <svg
                                className="stroke-black fill-none group-hover:stroke-red-500  transition-all group-active:fill-red-200 duration-100"
                                viewBox="0 0 24 24"
                                height="50px"
                                width="50px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeWidth="1.5"
                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                ></path>
                                <path strokeWidth="1.5" d="M8 12H16"></path>
                                <path strokeWidth="1.5" d="M12 16V8"></path>
                            </svg>
                        </button>
                    </div>
                    {modalContent}
                </div>
            </div>
            <RouterAdmin setModalContent={setModalContent} setModal={setModal} />

        </div>
    )
}

export default admin;