<template>
	<div>
		<table v-if="props.tableData.length !== 0">
			<!-- COLUMNS -->
			<thead :class="props.columnContainerClass">
				<tr>
					<th v-for="(column, columnIndex) in props.columns" :key="columnIndex" :class="props.columnValueClass">
						{{ column }}
					</th>
				</tr>
			</thead>

			<!-- ROWS -->
			<tbody :class="props.rowContainerClass">
				<tr v-for="(source, sourceIndex) in props.tableData" :key="sourceIndex">
					<td v-for="(row, rowIndex) in props.rows" :key="rowIndex" :class="rowValueClass">
						<span v-if="row">
							{{ primary_table_data(source, row) }}
						</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-if="props.tableData.length === 0">Nenhum resultado encontrado.</div>
	</div>
</template>

<script setup lang="ts">
	import { PropType } from 'vue'

	const props = defineProps({
		/**
		 * **It's a required field.**
		 *
		 * It needs to be an array with objects containing the data you want.
		 * *Values inside this array are objects.*
		 */
		tableData: {
			type: Array as PropType<Object[]>,
			required: true
		},
		/**
		 * This field is an array with strings inside that represents your table's columns.
		 * It respescts the order of elements in the array.
		 */
		columns: {
			type: Array as PropType<string[]>,
			required: true
		},
		/**
		 * This field is an array of strings that needs to be in the same order of it's representing column.
		 *
		 * For nested values your string needs to use dot notation. ***Ex: [['nested.nested.value'], ['value'], ['nested.value']]***
		 *
		 */
		rows: {
			type: Array as PropType<string[]>,
			required: true
		},
		/**
		 * Here you can use css frameworks classes or your custom classes to define the style of **columns containers**.
		 */
		columnContainerClass: {
			type: String,
			default: 'columnContainerClass'
		},
		/**
		 * Here you can use css frameworks classes or your custom classes to define the style of **columns values**.
		 */
		columnValueClass: {
			type: String,
			default: 'columnValueClass'
		},
		/**
		 * Here you can use css frameworks classes or your custom classes to define the style of **rows containers**.
		 */
		rowContainerClass: {
			type: String,
			default: 'rowContainerClass'
		},
		/**
		 * Here you can use css frameworks classes or your custom classes to define the style of **rows values**.
		 */
		rowValueClass: {
			type: String,
			default: 'rowValueClass'
		}
	})

	function nestedPath(item: object, props: string) {
		const propsSplitted = props.split('.')
		return propsSplitted.reduce((prev: any, current: string) => {
			return prev[current]
		}, item)
	}
	function primary_table_data(item: object, data: string) {
		return nestedPath(item, data)
	}
</script>

<style scoped>
	table {
		width: 100%;
		table-layout: auto;
		margin: 1.5rem auto;
		border-collapse: collapse;
	}
	.rowContainerClass {
		background-color: white;
	}
	.rowValueClass {
		border-top: 1px solid rgb(231, 231, 231);
		padding: 1rem;
		font-family: Arial, Helvetica, sans-serif;
		font-size: small;
	}
	.columnContainerClass {
		background: rgb(255, 52, 103);
		color: rgb(255, 255, 255);
		text-align: left;
	}
	.columnValueClass {
		padding: 0.7rem 1rem;
		font-family: Arial, Helvetica, sans-serif;
	}

	th:first-of-type {
		border-top-left-radius: 0.75rem;
	}
	th:last-of-type {
		border-top-right-radius: 0.75rem;
	}

	tr:last-of-type td:first-of-type {
		border-bottom-left-radius: 0.75rem;
	}
	tr:last-of-type td:last-of-type {
		border-bottom-right-radius: 0.75rem;
	}
	p {
		margin: 0;
	}
	@media (max-width: 680px) {
		.mobile_hidden {
			display: none;
		}
	}
</style>
