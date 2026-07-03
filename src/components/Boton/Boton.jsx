import styles from './Boton.module.css'; // Importamos el objeto 


function Boton(props) {
    return (
        <button className={styles.btn}>
            {}
            {props.children}
        </button>
    );
}

export default Boton;