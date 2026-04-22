interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-[#D4AF37]" : "text-[#D4AF37]"
      } ${className}`}
    >
      {children}
    </span>
  );
}
