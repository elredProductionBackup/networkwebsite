import LegalDocument from "@/components/LegalDocument";
import { COMMUNITY_GUIDELINES } from "@/data/community";

export default function Page() {
  return <LegalDocument eyebrow="LEGAL" data={COMMUNITY_GUIDELINES} />;
}
