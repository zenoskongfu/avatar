import convert from "color-convert";

/**
 * 将 HSL 字符串转换为 RGB 数组
 * @param {string} hsl - 格式为 'hsl(h, s%, l%)'
 * @returns {number[]} - RGB 数组 [r, g, b]
 */
function hslToRgb(hsl: string): number[] {
	const [h, s, l] = hsl.match(/\d+/g)!.map(Number);
	return convert.hsl.rgb([h, s, l]);
}

/**
 * 计算颜色的相对亮度（Luminance）
 * @param {number[]} rgb - RGB 数组 [r, g, b]
 * @returns {number} - 相对亮度（0-1）
 */
function getLuminance(rgb: number[]): number {
	const [r, g, b] = rgb.map((c) => {
		c /= 255;
		return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * 计算两个颜色的对比度（WCAG 标准）
 * @param {string} color1 - 第一个颜色（HSL）
 * @param {string} color2 - 第二个颜色（HSL）
 * @returns {number} - 对比度（1:1 到 21:1）
 */
function getContrastRatio(color1: string, color2: string): number {
	const rgb1 = hslToRgb(color1);
	const rgb2 = hslToRgb(color2);

	const luminance1 = getLuminance(rgb1);
	const luminance2 = getLuminance(rgb2);

	const lighter = Math.max(luminance1, luminance2);
	const darker = Math.min(luminance1, luminance2);

	return (lighter + 0.05) / (darker + 0.05);
}

/**
 * 将 RGB 数组转换为 Lab 数组
 * @param {number[]} rgb - RGB 数组 [r, g, b]
 * @returns {number[]} - Lab 数组 [L, a, b]
 */
function rgbToLab(rgb: number[]): number[] {
	// RGB to XYZ
	const [r, g, b] = rgb.map((c) => {
		c /= 255;
		return c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;
	});
	const r_ = r * 100;
	const g_ = g * 100;
	const b_ = b * 100;
	const x = r_ * 0.4124564 + g_ * 0.3575761 + b_ * 0.1804375;
	const y = r_ * 0.2126729 + g_ * 0.7151522 + b_ * 0.072175;
	const z = r_ * 0.0193339 + g_ * 0.119192 + b_ * 0.9503041;

	// XYZ to Lab
	const epsilon = 0.008856;
	const kappa = 903.3;
	const x_ = x / 95.047;
	const y_ = y / 100.0;
	const z_ = z / 108.883;

	const fx = x_ > epsilon ? Math.pow(x_, 1 / 3) : (kappa * x_ + 16) / 116;
	const fy = y_ > epsilon ? Math.pow(y_, 1 / 3) : (kappa * y_ + 16) / 116;
	const fz = z_ > epsilon ? Math.pow(z_, 1 / 3) : (kappa * z_ + 16) / 116;

	const L = 116 * fy - 16;
	const a = 500 * (fx - fy);
	const b__ = 200 * (fy - fz);

	return [L, a, b__];
}

export function areColorsClose(
	textColor: string,
	bgColor: string,
	minContrast: number = 4.5,
	maxDeltaE: number = 20
): boolean {
	// 检查对比度
	const contrast = getContrastRatio(textColor, bgColor);
	const isContrastOK = contrast >= minContrast;

	// 检查色差（避免颜色太接近）
	const rgb1 = hslToRgb(textColor);
	const rgb2 = hslToRgb(bgColor);
	const lab1 = rgbToLab(rgb1);
	const lab2 = rgbToLab(rgb2);
	const deltaE = Math.sqrt(
		Math.pow(lab1[0] - lab2[0], 2) + Math.pow(lab1[1] - lab2[1], 2) + Math.pow(lab1[2] - lab2[2], 2)
	);
	const isDeltaEOK = deltaE >= maxDeltaE;

	return isContrastOK && isDeltaEOK;
}
