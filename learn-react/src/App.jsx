import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <>
            <div className='bg-slate-100 antialiased flex items-center justify-center min-h-screen'>
                <div className='max-w-md w-full'>
                    {/* <Button onClick={() => console.log('register')} type='register' text='Register'></Button>
                    <Button className='bg-pink-600' onClick={() => console.log('login')} type='login'>
                        Login
                    </Button> */}

                    <Card>
                        <Card.Title>Hello ReactJS</Card.Title>
                        <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam similique itaque et temporibus sit possimus mollitia
                            excepturi porro numquam officia repellendus nobis illum, vero nostrum in beatae eum. Consequuntur, earum!
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={() => console.log('Register')}>Register</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default App;
