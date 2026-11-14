/** Soft drifting colour fields behind a section. Decorative; parent needs `relative isolate`. */
export function Aurora({ className = "", grid = true }: { className?: string; grid?: boolean }) {
  return (
    <>
      <div aria-hidden="true" className={`aurora ${className}`}>
        <span />
        <span />
        <span />
        <span />
      </div>
      {grid ? <div aria-hidden="true" className="grid-fade" /> : null}
    </>
  );
}
