<template>
	<section :style="{ width: props.dimensions.width, height: props.dimensions?.height }" class="relative overflow-hidden">
		<nav class="h-full absolute w-full">
			<!-- Arrows -->
			<div class="flex justify-between w-full h-full items-center">
				<div>
					<!-- ARROW TO LEFT / PREVIOUS IMAGE -->
					<div v-if="data.currentImage?.prev" class="pointer" :class="props.arrowsContainerClass" @click="navigateArrows('prev')">
						<img src="./arrows/left.svg" alt="Previous image" class="flex justify-center w-full" />
					</div>
				</div>
				<div>
					<!-- ARROW TO RIGHT / PREVIOUS IMAGE -->
					<div v-if="data.currentImage?.next" class="pointer" :class="props.arrowsContainerClass" @click="navigateArrows('next')">
						<img src="./arrows/right.svg" alt="Next image" class="flex justify-center w-full" />
					</div>
				</div>
			</div>
			<!-- Navigation -->
			<div v-if="props.bulletsContainerClass !== 'none'" class="flex justify-center w-full bottom-0 absolute">
				<div style="gap: 0.3em" class="flex items-center" :class="props.bulletsContainerClass">
					<svg
						v-for="bullet in props.gallery"
						:key="bullet.source"
						:style="{
							color: props.bulletsColor,
							opacity: data.currentImage?.value.source === bullet.source ? 1 : 0.5
						}"
						@click="goToImage(bullet.source)"
						class="flex items-center pointer"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						:width="data.currentImage?.value.source === bullet.source ? '12' : '10'"
						:height="data.currentImage?.value.source === bullet.source ? '12' : '10'"
						viewBox="0 0 24 24"
					>
						<path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"></path>
					</svg>
				</div>
			</div>
		</nav>
		<!-- IMAGES TO NAVIGATE -->
		<picture class="flex justify-center">
			<img :src="data.currentImage?.value.source" class="w-full" :alt="data.currentImage?.value.alt" />
			<!-- It lazy loads all images and keep div's general size -->
			<img :src="image.source" class="hidden" v-for="image in props.gallery" :key="image.source" loading="lazy" />
		</picture>
	</section>
</template>

<script setup lang="ts">
	import { defineProps, onMounted, PropType, reactive, watch } from 'vue'

	const props = defineProps({
		/**
		 * Images array containing objects with a source value (URL or local path string) and an optional field for alt text of the image.
		 *
		 * *It's important that you format your data using the ImageStructure type and store it in reactive state like in Ref or Reactive object.*
		 */
		gallery: {
			type: Array as PropType<ImageStructure[]>,
			default: []
		},
		/**
		 * An object containing two fields: width and height. It defines the size of your carousel container.
		 */
		dimensions: {
			type: Object as PropType<{ width: string; height: string }>,
			default: {
				width: '100%',
				height: '600px'
			}
		},
		/**
		 * You can use css frameworks here or your custom classes to define the style for  arrow's containers (like background color, etc.)
		 */
		arrowsContainerClass: {
			type: String,
			default: 'arrows'
		},
		/**
		 * You can use css frameworks here or your custom classes to define the style of the navigation bullet's container.
		 *
		 * If you define it to **'none'**, container bullets won't show.
		 */
		bulletsContainerClass: {
			type: String,
			default: 'bullets-container'
		},
		/**
		 * A string representing the color of your navigation bullets. It can be definied with hex and rgb.
		 */
		bulletsColor: {
			type: String,
			default: '#ffffff'
		}
	})

	const data = reactive({
		currentImage: null as Node | null,
		carousel: [] as ImageStructure[]
	})

	type ImageStructure = {
		source: string
		alt?: string
	}

	class Node {
		value: ImageStructure
		prev: Node | null
		next: Node | null
		constructor(image: ImageStructure) {
			this.value = image
			this.prev = null
			this.next = null
		}
	}

	class Carousel {
		head: Node | null = null
		tail: Node | null = null
		size: number = 0

		insert(value: ImageStructure): void {
			const node = new Node(value)
			this.size++
			if (!this.tail) {
				this.head = node
				this.tail = node
			} else {
				const oldTail = this.tail
				this.tail = node
				this.tail.prev = oldTail
				this.tail.prev.next = this.tail
			}
		}

		find(value: string): Node | null {
			let currentNode = this.head
			while (currentNode) {
				if (currentNode.value.source === value) {
					return currentNode
				}
				currentNode = currentNode.next
			}
			throw new Error('The searching value was not found.')
		}
	}

	const carousel = new Carousel()

	onMounted(() => {
		for (let image of props.gallery) {
			carousel.insert(image)
		}
		data.currentImage = carousel.head
	})

	watch(props.gallery, () => {
		for (let image of props.gallery) {
			carousel.insert(image)
		}
		data.currentImage = carousel.head
	})

	function navigateArrows(direction: string): void {
		switch (direction) {
			case 'prev':
				if (data.currentImage?.prev) {
					data.currentImage = data.currentImage.prev
				}
				break
			case 'next':
				if (data.currentImage?.next) {
					data.currentImage = data.currentImage.next
				}
				break
		}
	}

	function goToImage(image: string): void {
		const newImage = carousel.find(image)
		if (newImage) {
			data.currentImage = newImage
		}
	}

	function getArrowsUrl(source: string) {
		return new URL(source, import.meta.url).href
	}
</script>

<style lang="css" scoped>
	.hidden {
		display: none;
	}
	.flex {
		display: flex;
	}
	.w-full {
		width: 100%;
	}
	.h-full {
		height: 100%;
	}
	.relative {
		position: relative;
	}
	.absolute {
		position: absolute;
	}
	.items-center {
		align-items: center;
	}
	.justify-center {
		justify-content: center;
	}
	.justify-between {
		justify-content: space-between;
	}
	.overflow-hidden {
		overflow: hidden;
	}
	.pointer {
		cursor: pointer;
	}
	.bottom-0 {
		bottom: 0;
	}
	.arrows {
		width: 25px;
		height: 25px;
		padding: 0.2rem;
		margin: 0 2rem;
		background: #00000025;
		border-radius: 10rem;
		border: 1px solid #ffffff20;
	}
	.bullets-container {
		border-radius: 5rem;
		background: #00000020;
		border: 1px solid #ffffff30;
		padding: 0.5rem 1rem;
		margin: 1em 0;
	}
	.text-white {
		color: white;
	}
</style>
