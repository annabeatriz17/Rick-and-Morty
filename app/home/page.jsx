"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CharacterCard from "../../componentes/CharacterCard";
import styles from "../home/Home.module.css";

export default function Home() {
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [notFound, setNotFound] = useState(false);

        const fetchCharacters = async (name = "") => {
            setNotFound(false);
            try {
                const { data } = await axios.get(
                    `https://rickandmortyapi.com/api/character?name=${name}`);
                setCharacters(data.results);
            } catch {
                setNotFound(true);
                setCharacters([]);
            }
        };
        useEffect(() => {
            fetchCharacters();
    }, []);

    const handleCardClick = (name) => {
        toast.info(`Você clicou em ${name}`, {
        });
    };

    return (
        <div className={styles.container}>
            <ToastContainer
        position="top-right"
        autoClose={7500} 
        theme="light"
        />
            <h1 className={styles.title}>Personagens de Rick and Morty</h1>
            <div className={styles.controls}>
                <input
                    type="text"
                    placeholder="Buscar personagem"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} className={styles.input}
                />
                <button
                onClick={() => fetchCharacters(search.trim())}className={styles.buttonSearch}
                >
                Buscar
                </button>
                <button
                    onClick={() => {
                        setSearch("");
                        fetchCharacters();
                    }}
                    className={styles.buttonReset}
                >
                    Resetar
                </button>
            </div>
            {notFound && <h1 className={styles.notFound}>Nenhum personagem encontrado 😢</h1>}
            <div className={styles.grid}>
            {characters.map((char) => (
                <CharacterCard key={char.id} characters={char}  onClick={() => handleCardClick(char.name)}/>
            ))}
            </div>
        </div>
    );
}