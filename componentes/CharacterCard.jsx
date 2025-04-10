import styles from "../styles/CharacterCard.module.css";

export default function CharacterCard({ characters }) {
    return (
    <div className={styles.card}>
        <img
            src={characters.image}
            alt={characters.name}
            className={styles.avatar}
        />
        <h3 className={styles.title}>{characters.name}</h3>
        <p>{characters.status}</p>
        <p>{characters.species}</p>
        <p>{characters.type || "Sem tipo"}</p>
        <p>{characters.gender}</p>
    </div>
    );
}   