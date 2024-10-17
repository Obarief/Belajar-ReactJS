export default function PlaceContentCenter(prop) {
    const { children } = prop;

    return (
        <div className='bg-black '>
            <div className='bg-violet-900/20 min-h-screen flex items-center justify-center antialiased tracking-tight'>
                <div className='max-w-lg  flex flex-col'>{children}</div>
            </div>
        </div>
    );
}
