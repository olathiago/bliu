// @ts-ignore
import bcarousel from '../components/carousel/carousel.vue'
import { carrouselStaticData } from './typesAndData'
import { reactive } from 'vue'

const data = reactive({
	carousel: carrouselStaticData
})

export default {
	title: 'Library/Carousel',
	component: bcarousel,
	args: {
		gallery: data.carousel
	},
	parameters: {
		docs: {
			description: {
				component: 'A minimal, flexible and highly customizable component for image carousel in a single Vue file.'
			}
		}
	}
}

const Template = args => ({
	components: { bcarousel },
	setup() {
		return { args }
	},
	template: '<bcarousel v-bind="args"/>'
})

export const Carousel = Template.bind({})
