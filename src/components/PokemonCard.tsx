import { useEffect, useState } from "react";

interface PokemonCardProps {
    name: string;
    url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
    const [details, setDetails] = useState<any>(null);

    useEffect(() => {
        async function fetchPokemonDetails() {
            const response = await fetch(url);
            const data = await response.json();
            setDetails(data);
        }
        fetchPokemonDetails();
    }, [url]);


    if (!details) return <div>Pas d'information dans l'api</div>

return (
    <div>
        <img src="" alt={name} />
    </div>
)
}