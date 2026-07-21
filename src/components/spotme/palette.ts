/**
 * Spot colours used by the SpotMe demo.
 *
 * Deliberately muted: the portfolio runs on off-white, charcoal and a single
 * blue, so a fully saturated set would shout over every other section. These
 * are desaturated and darkened enough to sit inside that system while still
 * reading as six distinct users. White content stays legible on all of them.
 *
 * To go back to brighter product colours, raise the saturation here — every
 * frame of the demo follows from this file.
 */
export const SPOT_COLOURS = {
  violet: "#7A6BB0",
  pink: "#B76A85",
  blue: "#4E7AB5",
  green: "#4F8F74",
  orange: "#BE7C4C",
  amber: "#A8903F",
} as const;

export type SpotColour = (typeof SPOT_COLOURS)[keyof typeof SPOT_COLOURS];

/** The colours a visitor can choose from, in display order. */
export const PICKABLE_COLOURS: { name: string; value: SpotColour }[] = [
  { name: "Violet", value: SPOT_COLOURS.violet },
  { name: "Pink", value: SPOT_COLOURS.pink },
  { name: "Blue", value: SPOT_COLOURS.blue },
  { name: "Green", value: SPOT_COLOURS.green },
  { name: "Orange", value: SPOT_COLOURS.orange },
  { name: "Amber", value: SPOT_COLOURS.amber },
];
