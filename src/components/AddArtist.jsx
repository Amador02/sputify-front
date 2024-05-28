

const agregar = (setModal, setModalContent) => {
    /*
    De una Canción se necesita un código único (generado aleatoriamente), nombre de la canción, 
    nombre del álbum, carátula, año, duración, género (Rock, Pop, Punk, Reggaeton, Electrónica) 
    y url de la canción en youtube.
    */
    return (
        <div>
            <Boton
                text='Agregar'
                svg={<></>}
                openHoverInfo={false}
                style='normal'
                onClick={() => {
                    setModal(true);
                    setModalContent(
                        <div>Artista agregado</div>
                    );
                }} />
        </div>
    );
}

export default agregar;