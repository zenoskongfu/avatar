import { generateAvatar, generateAvatarCircle } from "../src/util/avatar";

const imageSrc = generateAvatarCircle("Z", 200);
const img = document.createElement("img");
img.src = imageSrc;
document.body.appendChild(img);
