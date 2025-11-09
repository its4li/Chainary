export function Button({ children, className = "", variant = "default", ...props }) {
  let base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  let variants = {
    default: "bg-[#A78BFA] hover:bg-[#8B5CF6] text-white",
    outline: "border border-[#A78BFA] text-[#A78BFA] hover:bg-[#1A1033]",
  };
  let style = `${base} ${variants[variant] || variants.default} ${className}`;
  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
