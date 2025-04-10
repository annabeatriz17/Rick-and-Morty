"use client";

import styles from "../home/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "../../componentes/CharacterCard";

export default function Home() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        .then((response) => {
            setCharacters(response.data.results);
        })
        .catch ((error) => {
            console.error('Erro ao buscar os personagens:', error);
        });
    }, []);

    console.log(characters);
    
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
            {characters.map((char) => (
                <CharacterCard key={char.id} characters={char} />
            ))}
            </div>
        </div>
    );
}