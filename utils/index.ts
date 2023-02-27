export const BASE_URL =
	process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

	/**
 * Appends a limit to the end of text and substrings to the specified limit.
 * @param text The text to add an ellips to.
 * @param limit The point at which the text is cut off.
 * @returns A string cut off at the limit and with an ellips appended to the end.
 */
export const elipsise = (text: string, limit: number): string =>
	text.substring(0, limit - 7)+"...";
