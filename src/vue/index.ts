import { defineComponent, ref, watch } from "vue";
import { generateAvatar } from "../util/avatar";
export default defineComponent({
	name: "Avatar",
	props: ["str", "height"],
	setup(props) {
		const src = ref("");

		watch(
			() => [props.str, props.height],
			([str, height]) => {
				src.value = generateAvatar(str, height);
			},
			{ immediate: true }
		);

		return { src };
	},
	template: `<img :src="src" />`,
});
