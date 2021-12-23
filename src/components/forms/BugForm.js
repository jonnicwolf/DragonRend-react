import React, {useState} from 'react'
const BugForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [input, setInput] = useState('');
    return (
        <form>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Name/Username'
                type="text"
                required/>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
                type="email"
                required/>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="A few sentences describing the bug, please!"
                type='text'
                required/>
        </form>
    )
};

export default BugForm;
