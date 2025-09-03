import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      paragraph: "leading-7 [&:not(:first-child)]:mt-6",
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-muted-foreground text-xl",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});

export default function Text({
  children,
  variant,
  className,
}: {
  children: React.ReactNode;
  variant?: VariantProps<typeof textVariants>["variant"];
  className?: string;
}) {
  switch (variant) {
    case "h1":
      return (
        <h1 className={cn(textVariants({ variant }), className)}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={cn(textVariants({ variant }), className)}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={cn(textVariants({ variant }), className)}>{children}</h3>
      );
    case "h4":
      return (
        <h4 className={cn(textVariants({ variant }), className)}>{children}</h4>
      );
    case "blockquote":
      return (
        <blockquote className={cn(textVariants({ variant }), className)}>
          {children}
        </blockquote>
      );
    case "code":
      return (
        <code className={cn(textVariants({ variant }), className)}>
          {children}
        </code>
      );
    case "lead":
      return (
        <p className={cn(textVariants({ variant }), className)}>{children}</p>
      );
    case "paragraph":
    default:
      return (
        <p className={cn(textVariants({ variant }), className)}>{children}</p>
      );
  }
}
