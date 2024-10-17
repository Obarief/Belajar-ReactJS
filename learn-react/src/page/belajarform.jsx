import { useState } from 'react';
import Card from '../components/Card';
import ButtonMUI from '../components/Button';
import Input from '../components/Input';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


export default function Belajarform() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function submit(event) {
        event.preventDefault();
        console.log({name, email});
    }

    return (
        <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
            <div className='max-w-md w-full'>
            <form htmlFor='register' onSubmit={submit}>
                <Card>
                    <Card.Title className='text-center'>Register Your Account!</Card.Title>
                    <Card.Body>
                        
                            <div className='mb-5 border rounded-lg p-4'>
                                <p>Name : {name || '-----'}</p>
                                <p>Email : {email || '-----'}</p>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                                    Username
                                </label>
                                <Input
                                    id='username'
                                    type='text'
                                    placeholder='Username'
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className='mb-6'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                    Email
                                </label>
                                <Input
                                    id='email'
                                    type='email'
                                    placeholder='example@gmail.com'
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                        
                    </Card.Body>

                    <Card.Footer>
                        <ButtonMUI variant='contained' type="submit">
                            <AppRegistrationIcon></AppRegistrationIcon>
                        </ButtonMUI>
                    </Card.Footer>
                </Card>
            </form>
            </div>
        </div>
    );
}
