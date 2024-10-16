import cslx from 'clsx';

function Button(prop) {
    const { className = 'bg-blue-600', children = 'submit', text, type = 'button' } = prop;
    return (
        <button {...prop} className={cslx(className, type, 'flex items-center gap-x-2 rounded text-white px-4 py-2')}>
            {/* [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 <- menggunakan di setelah className digunakan jika ada svg icon */}
            {text || children}
        </button>
    );
}

function App() {
    return (
        <>
            <div className='bg-slate-600 grid place-content-center min-h-screen'>
                <div className='flex gap-x-2 items-center'>
                    <h1 className='text-white flex justify-center'>halo dunia</h1>

                    <Button onClick={() => console.log('register')} type='register' text='Register'></Button>
                    <Button className='bg-pink-600' onClick={() => console.log('login')} type='login'>
                        Login
                    </Button>
                </div>
            </div>
        </>
    );
}

export default App;
