export function getFontSizeByHeight(ctx: CanvasRenderingContext2D, str: string, height: number) {
	ctx.save();
	let fontSize = height;

	function getNewFontHeight() {
		ctx.font = `${fontSize}px sans-serif`;
		const metrics = ctx.measureText(str);
		return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
	}

	let fontHeight = getNewFontHeight();

	while (fontHeight < height) {
		fontSize += 1;
		fontHeight = getNewFontHeight();
	}

	ctx.restore();

	return fontSize;
}

export const getFontWH = (ctx: CanvasRenderingContext2D, str: string) => {
	const metrics = ctx.measureText(str);
	return {
		metrics,
		width: metrics.width,
		height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
	};
};
