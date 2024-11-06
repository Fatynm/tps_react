import { useState } from 'react';
import './GuestBookForm.css';

const GuestBookForm=() => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pays,setPays]=useState('');
    const [message,setMessage]=useState('');
    const [messagesList, setMessagesList] = useState([]);

    const onSubmit = (e) => {
         e.preventDefault(); // Empêche le rechargement de la page
        const newMessage = `${name} (${pays}): ${message}`;

        setMessagesList((prevMessages) => [...prevMessages, newMessage]);

        // Réinitialisez les champs après soumission
        setName('');
        setEmail('');
        setPays('');
        setMessage('');
    };
        return(<>
            <div className="guest-book-form">
            <form>
                <h2>Livre d'or</h2>
                <h5>Nom complet:</h5>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <h5>Email:</h5>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <h5>Pays:</h5>
                <input value={pays} onChange={(e)=>setPays(e.target.value)}/>
                <h5>Message:</h5>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={onSubmit}>
                    Envoyer
                </button>
            </form>
            </div>
            <div className="messages-container">
            <h2>MESSAGES</h2>
            <ul>
                    {messagesList.slice().reverse().map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
            </ul>
        </div>
        </>
        );
};
export default GuestBookForm;