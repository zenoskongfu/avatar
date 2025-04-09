import { defineComponent, ref, watch } from "vue";
import { generateAvatar, generateAvatarCircle } from "../util/avatar";
export default defineComponent({
	name: "AvatarCircle",
	props: ["str", "height"],
	setup(props) {
		const src = ref("");

		watch(
			() => [props.str, props.height],
			([str, height]) => {
				src.value = generateAvatarCircle(str, height);
			},
			{ immediate: true }
		);

		return { src };
	},
	template: `<img :src="src" />`,
});
