
interface InputProps {
    id: string;
    name: string;
    type: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
    touched: boolean | undefined;
    error: string | undefined;
}

export const InputComponent = ({ id, name, type, label, onChange, onBlur, value, touched, error }: InputProps) => {
    return (
        <div className='grid justify-center items-center'>
            <label className='font-light' htmlFor={id}>{label}</label>
            <input
                className='w-[300px] p-3 rounded border-2 border-black'
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            <div className={`h-6 ${touched && error ? "opacity-100 text-red-500 text-xs p-1" : "opacity-0"}`}>{error}</div>
        </div>
    );
};

