export default function () {
    let color = "rgba(255,255,255)"
    return (
        <div zind className="h-fit absolute top-[50%] -translate-y-[50%] bottom-0 flex flex-col items-center justify-center">
            <ul>
                <li>
                    <a href="/">
                        <span className="nav-icon">
                            <svg width="32px" height="32px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill={color}><path d="M12.5921,3.49787 C13.4147,2.83801 14.5853,2.83801 15.4079,3.49787 L23.1579,9.71462 C23.6902,10.1417 24,10.7872 24,11.4697 L24,22.75 C24,23.9926 22.9926,25 21.75,25 L19.25,25 C18.0074,25 17,23.9926 17,22.75 L17,16.25 C17,15.8358 16.6642,15.5 16.25,15.5 L11.75,15.5 C11.3358,15.5 11,15.8358 11,16.25 L11,22.75 C11,23.9926 9.99264,25 8.75,25 L6.25,25 C5.00736,25 4,23.9926 4,22.75 L4,11.4697 C4,10.7872 4.30976,10.1417 4.84212,9.71462 L12.5921,3.49787 Z" > </path></svg>
                        </span>
                        <span className="nav-text">
                            Inicio
                        </span></a></li>
                <li><a href="songs">
                    <span className="nav-icon">
                        <svg fill={color} width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,13a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"></path></g></svg>
                    </span>
                    Canciones</a></li>

                <li><a href="artists">
                    <span className="nav-icon">
                        <svg fill={color} width="32px" height="32px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" id="karaoke">
                            <path d="M12.1,2.952A2.988,2.988,0,0,0,6.99,4.917l3.142,3.142A2.988,2.988,0,0,0,12.1,2.952Zm-7.428,5.3L2.55,10.377a1,1,0,0,0,0,1.414l.707.707a1,1,0,0,0,1.414,0l2.121-2.121L8.914,8.255,6.793,6.134Zm.741,2.087-.707-.707L6.793,7.548l.707.707Z" />
                        </svg>
                    </span>
                    Artistas</a></li>
                <li><a href="feed">
                    <span className="nav-icon">
                        <svg width="32px" height="32px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill={color}><path d="M28.76,3.24C28.25,1.91,26.96,1,25.5,1C23.57,1,22,2.57,22,4.5c0,0.58,0.16,1.15,0.43,1.65l-2.86,2.86   C14.82,7.4,7.06,10.8,3.93,13.93c-3.9,3.9-3.9,10.24,0,14.14C5.88,30.02,8.44,31,11,31s5.12-0.98,7.07-2.92   c3.13-3.13,6.53-10.89,4.91-15.64l2.86-2.86C26.35,9.84,26.92,10,27.5,10c1.93,0,3.5-1.57,3.5-3.5C31,5.04,30.09,3.75,28.76,3.24z" > </path></svg>
                    </span>
                    Alimentar</a></li>
                <li><a href="search">
                    <span>
                        <svg fill={color} width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fill-rule="evenodd" />
                        </svg>
                    </span>
                    Buscar</a></li>
            </ul>
        </div>
    );
}