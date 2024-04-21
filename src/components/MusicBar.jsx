
export default function () {
    return (
        <div className="grid grid-cols-3 justify-center items-center h-20 bottom-0 left-0 right-0 bg-black">
            <div className="flex flex-row w-fit h-max ml-5 text-center gap-5">
                <img src={"none"} />
                <div className="items-start text-left">
                    <h1 className="text-xl text-white font-semibold">Storify</h1>
                    <h1 className="text-xs text-neutral-300">Storify</h1>
                </div>
            </div>
            <div className="flex flex-col gap-1 h-[100%] justify-center items-center">
                <div className="flex flex-row gap-5">
                    <div className="container hoverable-icon">
                        <svg width="24px" height="24px" viewBox="0 0 24 24"> <path d="M2.75 20C2.75 20.5523 3.19772 21 3.75 21C4.30228 21 4.75 20.5523 4.75 20L4.75 4C4.75 3.44772 4.30229 3 3.75 3C3.19772 3 2.75 3.44772 2.75 4V20Z"></path> <path d="M20.75 19.0526C20.75 20.4774 19.1383 21.305 17.9803 20.4748L7.51062 12.9682C6.50574 12.2477 6.54467 10.7407 7.5854 10.073L18.0551 3.35665C19.2198 2.60946 20.75 3.44583 20.75 4.82961L20.75 19.0526Z"></path></svg>
                    </div>
                    <div className="flex text-center items-center justify-center ">
                        <label className="container hoverable-icon w-[40px]">
                            <input type="checkbox" />
                            <svg viewBox="0 0 384 512" height="1em" className="play"><path d={playSVG}></path></svg>
                            <svg viewBox="0 0 320 512" height="1em" className="pause"><path d={pauseSVG}></path></svg>
                        </label>
                    </div >
                    <div className="container hoverable-icon">
                        <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="SVGRepo_iconCarrier"> <path d="M21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4V20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20V4Z"></path> <path d="M3 4.94743C3 3.5226 4.61175 2.69498 5.7697 3.52521L16.2394 11.0318C17.2443 11.7523 17.2053 13.2593 16.1646 13.927L5.69492 20.6434C4.53019 21.3905 3 20.5542 3 19.1704V4.94743Z"></path> </g></svg>
                    </div>
                </div>
                <div>
                    <div className="flex justify-self-end gap-1">
                        <label className="font-semibold">0:00</label>
                        <label className="slider w-[30vw]">
                            <input className="level" type="range" min="1" max="100" />
                        </label>
                        <label className="font-semibold">6:28</label>
                    </div>
                </div>
            </div>
            <div className="flex justify-end pr-5 gap-10">
                <svg className= "hoverable-icon-stroke" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 4L21 7M21 7L18 10M21 7H17C16.0707 7 15.606 7 15.2196 7.07686C13.6329 7.39249 12.3925 8.63288 12.0769 10.2196C12 10.606 12 11.0707 12 12C12 12.9293 12 13.394 11.9231 13.7804C11.6075 15.3671 10.3671 16.6075 8.78036 16.9231C8.39397 17 7.92931 17 7 17H3M18 20L21 17M21 17L18 14M21 17H17C16.0707 17 15.606 17 15.2196 16.9231C15.1457 16.9084 15.0724 16.8917 15 16.873M3 7H7C7.92931 7 8.39397 7 8.78036 7.07686C8.85435 7.09158 8.92758 7.1083 9 7.12698" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div>
                    <label className="heart-container">
                        <input type="checkbox" />
                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
                    </label>
                </div>
                <label className="slider">
                    <input type="range" className="level" />
                    <svg className="volume hoverable-icon" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 24 24">
                        <g>
                            <path d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z"></path>
                            <path d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z" ></path>
                        </g>
                    </svg>
                </label>
            </div >
        </div >
    );
}
const pauseSVG = "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z";
const playSVG = "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z";