interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark";
  size?: "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-[#D4AF37] text-[#0A1F44] hover:bg-[#b8960c] focus-visible:outline-[#D4AF37]",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[#0A1F44] focus-visible:outline-white",
    dark: "bg-[#0A1F44] text-white hover:bg-[#132b5e] focus-visible:outline-[#0A1F44]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
