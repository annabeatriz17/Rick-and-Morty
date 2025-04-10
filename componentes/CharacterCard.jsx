import styles from "../styles/CharacterCard.module.css";

export default function CharacterCard({ characters }) {
    return (
    <div className={styles.card}>
        <img
            src={characters.image}
            alt={characters.name}
            className={styles.avatar}
        />
        <h3 className={styles.title}>Ola</h3>
        <p className={styles.description}>Essa é a página inicial</p>
    </div>
    );
}
