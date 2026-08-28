import {cva, type VariantProps} from "class-variance-authority";

const iconVariants = cva("", {
    variants: {
        size: {
            small: "w-4 h-4",
            medium: "w-6 h-6",
            large: "w-8 h-8",
        },
        colors: {
            primary: "text-blue-500",
            secondary: "text-gray-500",
            danger: "text-red-500",
        },
        animate: {
            false: "",
            true: "animate-spin",
        }
    },
    defaultVariants: {
        size: "medium",
        colors: "primary",
        animate: false,
    }
})

interface IconProps extends VariantProps<typeof iconVariants>, React.ComponentProps<"svg"> {
    svg: React.FC<React.ComponentProps<"svg">>;
}


export function Icon({svg:SvgComponent, animate, size,colors, className, ...props}: IconProps) {
    return (
        <SvgComponent className={iconVariants({animate, size, colors, className})} {...props}/>
    )
}