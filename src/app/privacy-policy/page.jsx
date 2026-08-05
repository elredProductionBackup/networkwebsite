import LegalDocument from "@/components/LegalDocument";
import { PRIVACY_POLICY } from "@/data/privacy";

export default function Page() {
  return <LegalDocument eyebrow="LEGAL" data={PRIVACY_POLICY} />;
}
