// @ts-ignore
import btable from '../components/table.vue'
import { columns, rows, tableData } from './typesAndData'

export default {
	title: 'Library/Dynamic Tables',
	component: btable,
	args: {
		tableData: tableData,
		columns,
		rows
	},
	parameters: {
		docs: {
			description: {
				component: 'Create a dynamic table using whatever data you want (including nested objects) and customize it to fit your needs.'
			}
		}
	}
}
const Template = args => ({
	components: { btable },
	setup() {
		return { args }
	},
	template: '<btable v-bind="args"/>'
})

export const DynamicTables = Template.bind({})
