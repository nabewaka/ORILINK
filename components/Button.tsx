// components/Button.tsx
export default function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-blue text-white font-bold px-6 py-2 hover:bg-blue-dark transition-colors ${className}`}
      style={{ borderRadius: "var(--radius-lg)", fontFamily: "var(--font-serif)" }}
      {...props}
    >
      {children}
    </button>
  );
}