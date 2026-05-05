export default function Chip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 border"
      style={
        active
          ? {
              borderColor: "var(--color-primary)",
              boxShadow: "0 2px 8px rgba(6, 53, 92, 0.25)",
              transform: "scale(1.03)",
            }
          : {
              color: "var(--color-text-sub)",
              borderColor: "rgba(6, 53, 92, 0.2)",
            }
      }
    >
      {children}
    </button>
  );
}