// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { parseArgs } from "util";
import { renderLogoSVG } from "@/app/logo.svg/logo";
import sharp from "sharp";

const DEFAULT_CONFIG = {
  DEFAULT_INPUT: "./public/logo.webp",
  DEFAULT_OUTPUT: "./public/logo.webp",
  DEFAULT_QUALITY: 80,
};

const parseArguments = () => {
  const {
    values: { input, output, quality, ...optionalArguments },
  } = parseArgs({
    args: Bun.argv,
    options: {
      input: {
        type: "string",
        short: "i",
        default: DEFAULT_CONFIG.DEFAULT_INPUT,
      },
      output: {
        type: "string",
        short: "o",
        default: DEFAULT_CONFIG.DEFAULT_OUTPUT,
      },
      quality: {
        type: "string",
        short: "q",
        default: DEFAULT_CONFIG.DEFAULT_QUALITY.toString(),
      },
      debug: {
        type: "boolean",
        default: false,
      },
    },
    strict: true,
    allowPositionals: true,
  });
  if (!(input && output && quality)) {
    throw new Error("No logo path provided.");
  }
  return {
    input,
    output,
    quality: Number.parseInt(quality, 10),
    ...optionalArguments,
  };
};

const confirmOverwrite = async (filePath: string): Promise<boolean> => {
  console.log(`🆙 File already exists: ${filePath}`, 33); // Yellow
  process.stdout.write("Are you sure you want to overwrite? (y/n): ");
  for await (const line of console) {
    if (line.toLowerCase().trim() === "y") {
      return true;
    }
    return false;
  }
  return false;
};

const convertToWebP = async (string: string, quality: number) => {
  const { data: buffer, info } = await sharp(Buffer.from(string))
    .webp({ quality })
    .toBuffer({ resolveWithObject: true });
  return { buffer, info };
};

const main = async () => {
  const { output: outputPath, quality } = parseArguments();

  const svgString = await renderLogoSVG();
  const file = Bun.file(outputPath, { type: "text/xml" });
  if ((await file.exists()) && !(await confirmOverwrite(outputPath))) {
    console.log("Logo file not written.");
    return;
  }

  const { buffer, info } = await convertToWebP(svgString, quality);
  Bun.write(file, buffer);
  console.log(`✅ Logo file written to ${outputPath}.`);
  console.log(info);
};

main();
