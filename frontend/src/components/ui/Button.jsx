
export default function Button({ text, color = 'primary', type = 'button', onClick = () => {} }) {

    const baseClasses = 'capitalize cursor-pointer py-2 px-6 rounded-sm';

    const buttonColors = {
        primary: 'text-gray-800 bg-primary hover:bg-primary-hover ',
        light: 'text-white bg-gray-700 hover:bg-gray-700',
        dark: 'text-white bg-gray-800 hover:bg-gray-900',
        transparent: 'text-white bg-transparent border border-white hover:border-primary'
    }

    const variantClasses = buttonColors[color];

    return (
        <button type={type} className={`${baseClasses} ${variantClasses}`} onClick={onClick}> {text}</ button >
    )
}
