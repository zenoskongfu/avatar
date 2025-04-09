import { getColor } from "./color";
import { getFontSizeByHeight, getFontWH } from "./size";

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

export function generateAvatarCircle(str: string, height: number) {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d")!;

	let fontSize = getFontSizeByHeight(ctx, str, height);
	ctx.font = `${fontSize}px sans-serif`;

	const { width, metrics } = getFontWH(ctx, str);
	canvas.width = height;
	canvas.height = height;

	const { bgColor, fontColor } = getColor();
	// draw circle
	ctx.fillStyle = bgColor;
	ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, Math.PI * 2, false);
	ctx.fill();

	// draw text
	fontSize = getFontSizeByHeight(ctx, str, height / 1.414);
	ctx.font = `${fontSize}px sans-serif`;
	ctx.fillStyle = fontColor;

	const x = height / 2;
	const y = height / 2;
	ctx.textAlign = "center"; // 水平居中（可选，但可能影响某些字体）
	ctx.textBaseline = "middle"; // 设置基线为垂直中点
	ctx.fillText(str, x, y);

	return getImageByCanvas(canvas);
}
