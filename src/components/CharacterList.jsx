import Character from "./Character";
import { useEffect, useState } from "react";

function NavPage({setPage, page}) {
    return (
        <header className="d-flex justify-content-between align-items-center">
            { page == 1 ? (
                <p className="btn-light  m-3 btn-sm">Page 1</p>
                
                ):
                (
                <button onClick={()=> setPage(page - 1)} className="btn btn-info m-3 btn-sm">Page {page - 1}</button>
            )}
            <button onClick={()=> setPage(page + 1)} className="btn btn-info m-3 btn-sm">Page {page + 1}</button>
        </header>
    )
}

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${page}`
            );
            const data = await response.json();
            setCharacters(data.results);
            setIsLoading(false);
        };
        getData();
    }, [page]);

    

    return (
        <div className="container bordered">
            <NavPage setPage={setPage} page={page}/>
            {isLoading ? (
                <h1>Loading...</h1>
                ) : (
                    <div className="row">
                    {characters.map((character) => (
                        <div className="col-md-4" key={character.id}>
                            <Character character={character} />
                        </div>
                    ))}
                </div>
            )}
            <NavPage setPage={setPage} page={page}/>
        </div>
    );
};

export default CharacterList;
