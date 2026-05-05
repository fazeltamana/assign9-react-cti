export default function EmptyState({ title, subtitle }) {
  return (
    <div className="card grid place-items-center p-10 text-center">
      <div
        className="text-lg font-extrabold"
        style={{ color: "var(--color-text-main)" }}
      >
        {title}
      </div>
      <div
        className="mt-2 max-w-md text-sm font-medium"
        style={{ color: "var(--color-text-sub)" }}
      >
        {subtitle}
      </div>
    </div>
  );
}