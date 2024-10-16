import PlaceContentCenter from '../components/PlaceContentCenter.jsx';
import { useState } from 'react';
import Button from '../components/Button.jsx';

function Belajarusestate() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((x) => x + 1);
    }

    return (
        <PlaceContentCenter>
            <h1 className='text-3xl font-bold text-white'>{count}</h1>
            <div className='mt-5 flex items-center gap-2'>
                <Button onClick={handleClick}>+ 1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    + 3
                </Button>
            </div>
        </PlaceContentCenter>
    );
}

export default Belajarusestate;
