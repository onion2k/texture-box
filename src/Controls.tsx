import { useBoxStore } from "./store";

export const Controls = ({
  textureImages,
  logos
}: {
  textureImages: string[];
  logos: { file: string; title: string }[];
}) => {
  const baseCols = ["pink", "green", "blue", "orange", "white"];

  const updateBaseCol = useBoxStore((state) => state.updateBaseCol);
  const updateLogo = useBoxStore((state) => state.updateLogo);
  const updateTexture = useBoxStore((state) => state.updateTexture);
  const updateScene = useBoxStore((state) => state.updateScene);

  const { logo, baseCol, texture, scene } = useBoxStore((state) => state);

  const selectedClassName = "outline";

  return (
    <div className="bg-white flex flex-col gap-y-5 w-3/12 p-5">
      <h2 className="text-xl text-left">Inner Box Color</h2>
      <div className="grid grid-cols-3 gap-3 place-items-center place-content-center">
        {baseCols.map((col) => (
          <label
            key={col}
            className={`w-full h-full aspect-square grid place-items-center ${
              baseCol === col ? selectedClassName : ""
            }`}
            style={{
              backgroundColor: col
            }}
          >
            <input
              type="radio"
              name="base"
              value={col}
              onClick={() => updateBaseCol(col)}
              className={"hidden"}
            />
            {col}
          </label>
        ))}
      </div>
      <h2 className="text-xl text-left">Wrapper Image</h2>
      <div className="grid grid-cols-3 gap-3 place-items-center place-content-center">
        {textureImages.map((tex, i) => (
          <label
            key={`tex-${i}`}
            className={`w-full h-full aspect-square grid place-items-center ${
              texture === i ? selectedClassName : ""
            }`}
            style={{
              backgroundImage: `url(${tex})`
            }}
          >
            <input
              type="radio"
              name="texture"
              value={0}
              onClick={() => updateTexture(i)}
              className={"hidden"}
            />
            &nbsp;
          </label>
        ))}
      </div>
      <h2 className="text-xl text-left">Logo</h2>
      <div className="grid grid-cols-3 gap-3 place-items-center place-content-center">
        {logos.map((logoImg, index) => (
          <label
            key={logoImg.title}
            className={`w-full h-full aspect-square grid place-items-center ${
              logo === index ? selectedClassName : ""
            }`}
            style={{
              backgroundImage: `url(${logoImg.file})`,
              backgroundSize: "cover"
            }}
          >
            <input
              type="radio"
              name="logos"
              value={index}
              onClick={() => updateLogo(index)}
              className={"hidden"}
            />
            {logoImg.title}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-y-1">
        <h2 className="text-xl text-left">Scene</h2>
        <label className={"w-100 px-1/2 py-1/2"}>
          <input
            type="checkbox"
            name="scene"
            value={"scene"}
            onClick={() => updateScene()}
            className={"hidden"}
          />
          {!scene ? "Enable" : "Disable"} Scene
        </label>
      </div>
    </div>
  );
};
