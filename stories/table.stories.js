// YourComponent.stories.js

// @ts-ignore
import btable from '../components/table.vue'
import { columns, options, rows } from '../src/utils/staticData'

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Library/Bliu',
	component: btable
}

//👇 We create a “template” of how args map to rendering
const Template = args => ({
	components: { btable },
	setup() {
		//👇 The args will now be passed down to the template
		return { args }
	},
	template: '<btable v-bind="args"/>'
})

export const DynamicTable = Template.bind({})

DynamicTable.args = {
	/* 👇 The args you need here will depend on your component */
	tableData: options,
	columns,
	rows
}
