import { useState } from "react";

export default function FormularioCompleto() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    });


    //En lugar de onChange, se usara 
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        //const valorFinal = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) { // ?
            setErrors({
                ...errors,
                [name]: null
            });
        };
    };


    const validate = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.username) {
            errors.username = "El nombre de usuario es obligatorio";
        }

        if (!values.email) {
            errors.email = "El email es obligatorio";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "El formato del email no es válido";
        }

        if (!values.password) {
            errors.password = "La contraseña es obligatoria";
        } else if (values.password.length < 6) {
            error.password = "La contraseña debe tener al menos 6 caracteres";
        }


        return errors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {// Objeto de errores vacío?
            console.log("Formulario válido. Enviando datos...", formData);

            //Llamada a API
            //enviarDatos(formData);
        } else {
            console.log("Formulario inválido, corrige los errores");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Usuario</label>
                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={{ borderColor: errors.username ? 'red' : 'initial' }}
                />
                {errors.username && <small style={{ color: 'red' }}>{errors.username}</small>} {/* ?*/}
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: errors.email ? 'red' : 'initial' }}
                />
                {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
            </div>

            <button type="submit">Registrarse</button>
        </form>
    );
}