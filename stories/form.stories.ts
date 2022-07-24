// @ts-ignore
import bform from '../components/form.vue'
import { options } from './typesAndData'

export default {
	title: 'Library/Dynamic Forms',
	component: bform,
	args: {
		formOptions: options
	},
	parameters: {
		docs: {
			description: {
				component: 'A Vue component for dynamic forms made to increase productivity and create a style pattern using objects.'
			}
		}
	}
}

const Template = args => ({
	components: { bform },
	setup() {
		return { args }
	},
	template: '<bform v-bind="args"/>'
})

export const DynamicForms = Template.bind({})
