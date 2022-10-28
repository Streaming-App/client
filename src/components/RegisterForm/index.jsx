import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidate from '../../utils/emailValidation';
import { userRegister } from '../../utils/handleApi';
import handleLocal from '../../utils/handleStorage';
import './styles.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(false);
  const { setLocalStorage } = handleLocal;
  const navigate = useNavigate();

  const sendRegisterInfos = async () => {
    const result = await userRegister(name, email, password);
    if (!result) {
      setError(true);
    } else {
      setError(false);
      setLocalStorage('userId', result);
      console.log(result);
      navigate('/login');
    }
  };

  useEffect(() => {
    const validateInputs = () => {
      const minPasswordLength = 8;
      const minNameLength = 4;
      setIsDisabled(
        name.length < minNameLength ||
          !emailValidate(email) ||
          password.length < minPasswordLength,
      );
    };
    validateInputs();
  }, [name, email, password]);

  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Name"
          className="input-form"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-form"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-form"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="btn-form"
          disabled={isDisabled}
          onClick={sendRegisterInfos}
        >
          Registrar
        </button>
      </form>
      {error && (
        <div>
          <h1>Usuário já cadastrado!</h1>
        </div>
      )}
    </div>
  );
}
