import React from "react";
import { generateAvatarCircle } from "../util/avatar";

export default function AvatarCircle({ str, height }: { str: string; height: number }) {
	return React.createElement(
		React.Fragment,
		null,
		React.createElement("img", { src: generateAvatarCircle(str, height) })
	);
}
