import Button from '@mui/material/Button';

// export default function ButtonMUI(prop) {
//     const { className = 'bg-blue-600', children = 'submit', text, type = 'button' } = prop;
//     return (
//         <Button {...prop} className={clsx(className, type, 'flex items-center gap-x-2 rounded text-white px-4 py-2')}>
//             {/* [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 <- menggunakan di setelah className digunakan jika ada svg icon */}
//             {text || children}
//         </Button>
//     );
// }

export default function ButtonMUI(prop) {
    const { children, text = 'submit', type = 'submit' } = prop;

    return (
        <Button variant='outlined' {...prop} type={type}>
            {children || text}
        </Button>
    );
}
