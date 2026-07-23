import { getContent } from "@/data";
import { renderShareImage } from "@/components/og";

const c = getContent("fr");

/** Spoken by screen readers, so a full stop reads better than a separator. */
export const alt = `${c.personal.name}. ${c.personal.title}`;
export { size, contentType } from "@/components/og";

export default function OpenGraphImage() {
  return renderShareImage("fr");
}
