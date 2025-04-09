import React from "react";
import { generateAvatar } from "../util/avatar";

export default function Avatar({ str, height }: { str: string; height: number }) {
	return React.createElement(React.Fragment, null, React.createElement("img", { src: generateAvatar(str, height) }));
}
