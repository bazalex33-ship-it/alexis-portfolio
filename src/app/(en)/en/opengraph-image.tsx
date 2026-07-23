import { getContent } from "@/data";
import { renderShareImage } from "@/components/og";

const c = getContent("en");

export const alt = `${c.personal.name}. ${c.personal.title}`;
export { size, contentType } from "@/components/og";

export default function OpenGraphImage() {
  return renderShareImage("en");
}
