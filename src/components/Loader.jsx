export default function Loader({ label = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-3 py-14">
      {/* spinner */}
      <span
        className="h-5 w-5 animate-spin rounded-full border-2"
        style={{
          borderColor: "var(--color-primary-soft)",
          borderTopColor: "var(--color-primary)",
        }}
      />
      {/* text */}
      <span
        className="text-sm font-semibold"
        style={{ color: "var(--color-text-sub)" }}
      >
        {label}
      </span>
    </div>
  );
}