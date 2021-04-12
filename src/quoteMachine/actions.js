export const REFRESH_QUOTE = "REFRESH_QUOTE";

export function refreshQuote() {
    // console.log("REFRESH CALLED");
    return { type: REFRESH_QUOTE };
}