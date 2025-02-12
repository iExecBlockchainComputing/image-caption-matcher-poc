import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { cn } from '@/utils/style.utils';

const buttonVariants = cva(
  'rounded-30 ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-300 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-hover hover:text-grey-800',
        white: 'hover:bg-grey-400 bg-white text-black',
        danger: 'bg-[#BF3131] text-white hover:bg-[#BF3131]/40',
        outline: 'border-grey-50 border hover:bg-white/10 hover:text-white',
        discreet_outline:
          'border-grey-600 hover:bg-grey-800 border hover:text-white',
        chip: 'from-grey-500 hover:before:bg-background relative z-0 overflow-hidden bg-gradient-to-b to-transparent before:absolute before:inset-px before:-z-10 before:rounded-[29px] before:bg-[#14141a] before:duration-300',
        text: '',
      },
      size: {
        lg: 'h-11 px-6 py-3 text-base',
        default: 'h-11 px-6 py-3',
        sm: 'h-[34px] px-4 py-2',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      type = 'button',
      isLoading,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return asChild ? (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </Comp>
    ) : (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/*{isLoading && <Loader size="16" className="animate-spin-slower mr-2" />}*/}
        {isLoading && <LoadingSpinner className="animate-spin-slow mr-2" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
