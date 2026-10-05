import type { Product } from "@/data/products";
import { productSpecifications } from "@/data/product-specifications";
export function ProductSpecs({ product: p }: { product: Product }) {
  const profile = productSpecifications[p.slug];
  const details = [
    ["Type", p.name], ["Species", p.species], ["Origin", p.origin],
    ["Processing", p.process], ["Grade", p.grade], ["Screen Size", p.screen],
    ["Variety", p.variety], ["Quality", p.quality], ["Bean Type", p.type],
  ].filter(([, value]) => Boolean(value));
  return <div className="specs product-specifications">
    <h2>Product Specifications</h2>
    {profile?.status === "reference" && <p className="spec-reference-note"><strong>Reference specifications</strong> — draft targets for discussion. Final specifications are confirmed with your quotation and approved sample.</p>}
    <h3 className="spec-group-heading">Technical analysis</h3>
    <table><caption className="sr-only">Technical specifications for {p.name}</caption><tbody>
      {profile?.technical.map(row => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.value}</td></tr>)}
    </tbody></table>
    {profile?.technical.some(row => row.value.includes("*")) && <p className="spec-reference-note">* Industry reference values; not verified by lot testing. Confirm against the certificate of analysis (COA) for the actual lot.</p>}
    <h3 className="spec-group-heading">Product details</h3>
    <dl className="product-facts">{details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    {profile?.status === "reference" && <details className="spec-sources"><summary>Reference sources & notes</summary><p>{profile.note}</p><ul>{profile.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name} ↗</a></li>)}</ul><p>Reviewed {profile.reviewedAt}. Supplier benchmarks are not universal export standards.</p></details>}
  </div>;
}
