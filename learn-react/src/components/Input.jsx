// eslint-disable-next-line react/prop-types
export default function Input({ type = 'text', ...prop }) {
    return <input {...prop} className='border-slate-300 shadow-sm raounded-lg w-full' type={type} />;
}
