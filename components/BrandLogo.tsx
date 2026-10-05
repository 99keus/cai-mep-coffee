import Image from "next/image";
import { company } from "@/data/company";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-wordmark">
      <Image src={company.logo} alt="CM Coffee" width={1774} height={887} priority={priority} />
    </span>
  );
}
