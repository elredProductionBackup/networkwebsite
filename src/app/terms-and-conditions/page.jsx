import LegalDocument from "@/components/LegalDocument";
import { TERMS_AND_CONDITIONS } from "@/data/tandc";

export default function Page() {
  return <LegalDocument eyebrow="LEGAL" data={TERMS_AND_CONDITIONS} />;
}
