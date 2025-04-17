"use client";


import { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "../../componentes/CharacterCard";
import styles from "../home/Home.module.css";

export default function Home() {
    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async (name = "") => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character/?name=${name}");
                setCharacters(response.data.results);
            } catch (error) {
                console.error("Erro ao buscar os personagens:", error);
            }
        };
        fetchCharacters();
    }, []);

    console.log(characters);
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Rick and Morty</h1>
            <div className={styles.grid}>
            {characters.map((char) => (
                <CharacterCard key={char.id} characters={char} />
            ))}
            </div>
        </div>
    );
}