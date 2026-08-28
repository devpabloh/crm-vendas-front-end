import {cva, type VariantProps} from "class-variance-authority";

const botaoVariants = cva("", {
    variants: {
        size: {
            small: "px-2 py-1 text-sm",
            medium: "px-4 py-2 text-base",
            large: "px-6 py-3 text-lg",
        },
        color: {
            primary: "bg-blue-500 text-white hover:bg-blue-600",
            secondary: "bg-gray-500 text-white hover:bg-gray-600",
            danger: "bg-red-500 text-white hover:bg-red-600",
        },
        state: {
            enabled: "cursor-pointer",
            disabled: "cursor-not-allowed opacity-50",
        }
    },
    defaultVariants: {
        size: "medium",
        color: "primary",
        state: "enabled",
    }
})


interface BotaoProps extends VariantProps<typeof botaoVariants> {
    children: React.ReactNode;
    onClick?: () => void;
}

export function Button({ children, color, size, onClick, ...props }: BotaoProps) {
    return (
        <button className={botaoVariants({ color, size })} onClick={onClick} {...props}>
            {children}
        </button>
    )
}