import transicion from "./transicion";


const HomeAlone = () => {
    return (
        <div>Hola</div>)
}
const Home = () => {
    return transicion(HomeAlone);
}
export default Home;