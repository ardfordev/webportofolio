import classnames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
    const variants = {
        "outline-white": `border border-white text-white hover:text-black hover:bg-white`,
        "white": "bg-white hover:bg-gray-200 text-black",
        "black": "bg-black hover:bg-opacity-90 text-white"
    };

    const pickedVariant = variants[variant];

    return (
        <a 
            href={href} 
            className={classnames(
                "transition py-3 px-10 font-semibold text-lg inline-block",
                pill && "rounded-full",
                pickedVariant,
                className
            )}
        >
            {children}
        </a>
    );
}
