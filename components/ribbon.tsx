export function RibbonField({ subtle = false }: { subtle?: boolean }) {
  return (
    <div className={`ribbon-field ${subtle ? "ribbon-field--subtle" : ""}`} aria-hidden="true">
      <span className="ribbon ribbon--one" />
      <span className="ribbon ribbon--two" />
      <span className="ribbon ribbon--three" />
    </div>
  );
}
