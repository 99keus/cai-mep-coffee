import Image from "next/image";
import { company } from "@/data/company";

export function BrandLogo({ priority = false, animated = false }: { priority?: boolean; animated?: boolean }) {
  if (animated) return (
    <span className="brand-lockup" role="img" aria-label="Cai Mep Coffee">
      <span className="brand-mark-piece">
        <Image className="logo-light" src="/images/company/cai-mep-logo-symbol-white.svg" alt="" width={144} height={128} preload={priority} />
        <Image className="logo-dark" src="/images/company/cai-mep-logo-symbol.svg" alt="" width={144} height={128} preload={priority} />
      </span>
      <span className="brand-words-mask"><span className="brand-words-piece">
        <Image className="logo-light" src="/images/company/cai-mep-logo-words-white.svg" alt="" width={204} height={128} preload={priority} />
        <Image className="logo-dark" src="/images/company/cai-mep-logo-words.svg" alt="" width={204} height={128} preload={priority} />
      </span></span>
    </span>
  );
  return (
    <span className="brand-wordmark">
      <Image className="brand-logo-primary" src={company.logo} alt="Cai Mep Coffee" width={348} height={128} preload={priority} />
      <Image className="brand-logo-reversed" src="/images/company/cai-mep-logo-reversed.svg" alt="" aria-hidden="true" width={348} height={128} preload={priority} />
    </span>
  );
}
