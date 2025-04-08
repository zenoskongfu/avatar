import { areColorsClose } from "./colorSimilar";

function getSecureRandom(min: number, max: number) {
	const array = new Uint32Array(1);
	window.crypto.getRandomValues(array);
	return min + (array[0] / (0xffffffff + 1)) * (max - min);
}

function getRandomMacaronColor({
	saturation,
	lightness,
}: {
	saturation: [number, number];
	lightness: [number, number];
}) {
	const hue = Math.floor(getSecureRandom(0, 360));
	console.log("getRandomMacaronColor", hue);
	const _saturation = Math.floor(Math.random() * saturation[0] + 1) + saturation[1];
	const _lightness = Math.floor(Math.random() * lightness[0] + 1) + lightness[1];
	console.log("getRandomMacaronColor", _saturation, _lightness);
	return `hsl(${hue}, ${_saturation}%, ${_lightness}%)`;
}

export function getBackgroundColor() {
	return getRandomMacaronColor({
		saturation: [20, 50],
		lightness: [20, 70],
	});
}

export function getFontColor() {
	return getRandomMacaronColor({
		saturation: [20, 30],
		lightness: [40, 40],
	});
}

export const getColor = () => {
	let bgColor = getBackgroundColor();
	let fontColor = getFontColor();

	// 在同一个色域，重新生成
	while (areColorsClose(bgColor, fontColor)) {
		bgColor = getBackgroundColor();
		fontColor = getFontColor();
	}

	return { bgColor, fontColor };
};
