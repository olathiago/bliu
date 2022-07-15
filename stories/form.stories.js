// YourComponent.stories.js

// @ts-ignore
import bform from '../components/form.vue'
import { options } from '../src/utils/staticData'

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Library/Bliu',
	component: bform
}

//👇 We create a “template” of how args map to rendering
const Template = args => ({
	components: { bform },
	setup() {
		//👇 The args will now be passed down to the template
		return { args }
	},
	template: '<bform v-bind="args"/>'
})

export const DynamicForm = Template.bind({})

DynamicForm.args = {
	/* 👇 The args you need here will depend on your component */
	formOptions: options
}
