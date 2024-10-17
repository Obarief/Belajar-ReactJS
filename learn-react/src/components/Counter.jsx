import { useState } from 'react';
import ButtonMUI from './Button';

// eslint-disable-next-line react/prop-types
export default function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    function plusClick() {
        setCount((x) => x + 1);
    }

    function minusClick() {
        setCount((x) => x - 1);
    }

    function resetClick() {
        setCount(initialValue);
    }

    return (
        <>
            <h1 className='text-3xl font-bold text-white text-center'>{count}</h1>
            <div className='mt-5 flex items-center gap-2'>
                <ButtonMUI onClick={plusClick}>+ 1</ButtonMUI>
                <ButtonMUI
                    onClick={() => {
                        for (let i = 1; i <= 3; i++) {
                            plusClick();
                        }
                    }}>
                    + 3
                </ButtonMUI>
                <ButtonMUI
                    onClick={() => {
                        for (let i = 1; i <= 10; i++) {
                            plusClick();
                        }
                    }}>
                    + 10
                </ButtonMUI>
                <ButtonMUI
                    className='bg-red-500 ml-10'
                    onClick={() => {
                        for (let i = 1; i <= 20; i++) {
                            minusClick();
                        }
                    }}>
                    - 20
                </ButtonMUI>
                <ButtonMUI className='bg-red-500' onClick={resetClick}>
                    Reset
                </ButtonMUI>
            </div>
        </>
    );
}
