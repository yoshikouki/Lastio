import satori from "satori";

export const renderLogoSVG = async () => {
  const fontData = await fetch("http://localhost:8888/fonts/Inter-Black.ttf", {
    cache: "force-cache",
  }).then((res) => res.arrayBuffer());

  const svgString = await satori(
    <div
      style={{
        color: "hsl(0, 0%, 10%)",
        fontWeight: 900,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "hsl(0, 0%, 90%)",
      }}
    >
      <div
        style={{
          fontSize: 300,
        }}
      >
        HoN
      </div>
    </div>,
    {
      width: 1200,
      height: 1200,
      fonts: [
        {
          name: "Roboto",
          data: fontData,
          weight: 900,
          style: "normal",
        },
      ],
    },
  );
  return svgString;
};
