const Character = ({character}) => {
    return (
            <div className="p-5 text-center" key={character.id}>
                <h3>{character.name}</h3>
                <img className="img-responsive rounded-pill" src={character.image} alt={character.name} />
                <p>Origin: {character.origin.name}</p>
            </div>
     );
};

export default Character;
