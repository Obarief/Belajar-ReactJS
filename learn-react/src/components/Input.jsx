export default function Input(prop) {
    const { className = 'border border-slate-200 shadow-md rounded-sm px-2 py-1 flex-grow', type, value } = prop;
    return <input {...prop} className={className} type={type} value={value} />;
}
