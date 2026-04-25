import path from "node:path";
import sharp from "sharp";

const source = path.join(process.cwd(), "public", "assets", "reference", "design.webp");
const outputDir = path.join(process.cwd(), "public", "assets", "images");

const crops = [
  { name: "hero-hand.webp", left: 165, top: 500, width: 280, height: 560 },
  { name: "hero-main.webp", left: 555, top: 285, width: 410, height: 710 },
  { name: "hero-bracelet.webp", left: 1065, top: 195, width: 285, height: 525 },
  { name: "avatar-1.webp", left: 118, top: 1030, width: 120, height: 120 },
  { name: "avatar-2.webp", left: 177, top: 1040, width: 120, height: 120 },
  { name: "avatar-3.webp", left: 240, top: 1040, width: 120, height: 120 },
  { name: "story-left.webp", left: 92, top: 1270, width: 340, height: 580 },
  { name: "story-right.webp", left: 315, top: 1110, width: 350, height: 620 },
  { name: "collection-1.webp", left: 760, top: 1880, width: 280, height: 470 },
  { name: "collection-2.webp", left: 1060, top: 1875, width: 315, height: 470 },
  { name: "editorial.webp", left: 490, top: 2460, width: 415, height: 650 },
  { name: "testimonial.webp", left: 155, top: 3140, width: 420, height: 430 },
  { name: "cta.webp", left: 820, top: 3475, width: 600, height: 640 }
];

await Promise.all(
  crops.map((crop) =>
    sharp(source)
      .extract({
        left: crop.left,
        top: crop.top,
        width: crop.width,
        height: crop.height
      })
      .webp({ quality: 92 })
      .toFile(path.join(outputDir, crop.name))
  )
);
