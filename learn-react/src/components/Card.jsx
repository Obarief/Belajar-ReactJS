function Card(prop) {
    const { children } = prop;
    return <div className=' shadow-lg rounded-xl bg-white'>{children}</div>;
}

function Title(prop) {
    const { children, className } = prop;

    return (
        <div className={`p-4 border-b ${className}`}>
            <h1 className='text-2xl font-semibold'>{children}</h1>
        </div>
    );
}
function Body(prop) {
    const { children } = prop;

    return <div className='leading-relaxed p-4'>{children}</div>;
}

function Footer(prop) {
    const { children } = prop;

    return (
        <div className=' flex justify-center p-4 border-t' type='register'>
            {children}
        </div>
    );
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
