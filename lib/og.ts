/** Maps a site path to its generated Open Graph image key and URL. */
export function ogKey(path: string): string {
  const k = path.replace(/^\/|\/$/g, "").replace(/\//g, "--");
  return k || "home";
}

export function ogImagePath(path: string): string {
  return `/og/${ogKey(path)}.png`;
}
