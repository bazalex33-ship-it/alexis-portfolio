import { Portfolio } from "@/components/Portfolio";
import { getContent } from "@/data";
import { buildMetadata } from "../metadata";

/** French is the default language and lives at the root. */
export const metadata = buildMetadata("fr");

export default function Page() {
  return <Portfolio c={getContent("fr")} />;
}
