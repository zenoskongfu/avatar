import { generateAvatar } from "../src/avatar.ts";

const imageSrc = generateAvatar("Island.js", 200);
const img = document.createElement("img");
img.src = imageSrc;
document.body.appendChild(img);
