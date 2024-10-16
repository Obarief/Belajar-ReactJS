import clsx from 'clsx';

export default function Button(prop) {
    const { className = 'bg-blue-600', children = 'submit', text, type = 'button' } = prop;
    return (
        <button {...prop} className={clsx(className, type, 'flex items-center gap-x-2 rounded text-white px-4 py-2')}>
            {/* [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 <- menggunakan di setelah className digunakan jika ada svg icon */}
            {text || children}
        </button>
    );
}
