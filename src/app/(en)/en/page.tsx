import { Portfolio } from "@/components/Portfolio";
import { getContent } from "@/data";
import { buildMetadata } from "../../metadata";

export const metadata = buildMetadata("en");

export default function EnglishPage() {
  return <Portfolio c={getContent("en")} />;
}
