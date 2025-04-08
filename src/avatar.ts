import { getColor } from "./util/color";
import { getFontSizeByHeight, getFontWH } from "./util/size";

function getImageByCanvas(canvas: HTMLCanvasElement) {
	return canvas.toDataURL("image/png");
}

export function generateAvatar(str: string, height: number) {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d")!;
	canvas.width = 200;
	canvas.height = 200;

	const fontSize = getFontSizeByHeight(ctx, str, height);
	ctx.font = `${fontSize}px sans-serif`;
	ctx.fillStyle = "black";

	const { width, height: fontHeight, metrics } = getFontWH(ctx, str);
	canvas.width = width;
	canvas.height = fontHeight;

	const { bgColor, fontColor } = getColor();
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.font = `${fontSize}px sans-serif`;
	ctx.fillStyle = fontColor;
	ctx.fillText(str, 0, metrics.actualBoundingBoxAscent);

	return getImageByCanvas(canvas);
}
