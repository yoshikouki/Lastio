import { renderLogoSVG } from "./logo";

export async function GET() {
  const svgString = await renderLogoSVG();

  return new Response(svgString, {
    headers: {
      "Content-Type": "image/webp",
    },
  });
}
