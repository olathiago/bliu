<template>
	<div v-for="(input, index) in props.formOptions" :key="index" :class="props.blocksClass">
		<fieldset>
			<div :class="props.labelClass">
				<label :for="input.id">{{ input.label }}</label>
				<label v-if="input.max && input.type !== 'color' && input.type !== 'number' && typeCondition(input.model, 'string')">
					{{ String(input.model).length }}/{{ input.max }}
				</label>
			</div>

			<input
				v-if="input.type !== 'checkbox' && input.type !== 'textarea'"
				:id="input.id"
				v-model="input.model"
				:name="input.id"
				:type="input.type"
				:minlength="input.min"
				:maxlength="input.max"
				:pattern="input.pattern"
				:placeholder="input.placeholder"
				:class="input.type == 'color' ? '' : props.inputClass"
				required
			/>

			<!-- CHECKBOX -->
			<input
				v-if="input.type === 'checkbox' && typeCondition(input.model, 'boolean')"
				v-model="(input.model as boolean)"
				:class="props.checkboxClass"
				type="checkbox"
				:name="input.id"
			/>

			<!-- TEXTAREA -->
			<textarea
				v-if="input.type === 'textarea' && typeCondition(input.model, 'string')"
				v-model="(input.model as string)"
				:minlength="input.min"
				:maxlength="input.max"
				rows="3"
				:placeholder="input.placeholder"
				:class="props.textareaClass"
			/>
			<p v-if="input.comment" :class="props.commentClass">
				{{ input.comment }}
			</p>
		</fieldset>
	</div>
</template>

<script setup lang="ts">
	import { PropType } from 'vue'
	import { FormOptions } from '../types'

	const props = defineProps({
		formOptions: {
			type: Array as PropType<FormOptions[]>,
			required: true
		},
		blocksClass: {
			type: String,
			default: 'blocksClass'
		},
		labelClass: {
			type: String,
			default: 'labelClass'
		},
		inputClass: {
			type: String,
			default: 'inputText'
		},
		textareaClass: {
			type: String,
			default: 'textareaClass'
		},
		commentClass: {
			type: String,
			default: 'commentClass'
		},
		checkboxClass: {
			type: String,
			default: 'switch_1'
		}
	})

	function typeCondition(value: string | number | boolean, type: string) {
		if (typeof value === type) {
			return true
		} else return false
	}
</script>

<style lang="css" scoped>
	.commentClass {
		margin: 0.8rem 0;
	}
	.blocksClass {
		margin: 0.8rem 0;
	}
	.labelClass {
		width: 100%;
		display: flex;
		align-content: flex-end;
		justify-content: space-between;
		margin: 0;
	}
	.inputText {
		background-color: rgb(245, 245, 245);
		width: 100%;
		border-radius: 0.35rem;
		border: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.295);
		padding: 8px 0;
		margin: 0;
	}
	.inputText:focus {
		outline: none;
	}
	.textareaClass {
		background-color: rgb(245, 245, 245);
		width: 100%;
		border-radius: 0.35rem;
		border: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.295);
		padding: 8px 0;
		margin: 0;
	}
	.textareaClass:focus {
		outline: none;
	}
	fieldset {
		border: none;
		margin: 0;
		padding: 0;
	}
	input[type='color'] {
		width: 100%;
		height: 3rem;
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}

	/* Switch 1 Specific Styles Start */
	input[type='checkbox'].switch_1 {
		width: 64px;
		min-width: 64px;
		height: 36px;
		border-radius: 9999px;
		background-color: rgba(244, 63, 94);
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		position: relative;
		outline: 2px solid transparent;
		outline-offset: 2px;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}
	input[type='checkbox'].switch_1:checked {
		background-color: rgba(45, 212, 191);
	}
	input[type='checkbox'].switch_1:after {
		width: 20px;
		height: 20px;
		border-radius: 9999px;
		background-color: white;
		left: 8px;
		top: 8px;
		position: absolute;
		content: '';
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}
	input[type='checkbox'].switch_1:checked:after {
		height: 20px;
		width: 8px;
		left: calc(100% - 1.9em);
	}
	/* Switch 1 Specific Style End */
</style>
