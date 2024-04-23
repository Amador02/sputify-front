

export default function ({ setLoggedIn }) {
    const func =  e => setLoggedIn(logged => !logged);
    return (
        <div onClick={func}>Hola</div>
    );
}