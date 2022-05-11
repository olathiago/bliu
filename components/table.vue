<template>
	<div>
		<table v-if="props.tableData.length !== 0">
			<!-- COLUMNS -->
			<thead :class="props.tableHeadClass">
				<tr>
					<th
						v-for="(column, columnIndex) in props.columns"
						:key="columnIndex"
						:class="!column.responsive ? 'mobile_hidden' : props.tableHeadValueClass"
					>
						{{ column.value }}
					</th>
				</tr>
			</thead>

			<!-- ROWS -->
			<tbody :class="props.tableBodyClass">
				<tr v-for="(source, sourceIndex) in props.tableData" :key="sourceIndex">
					<td v-for="(row, rowIndex) in props.rows" :key="rowIndex" :class="!row.responsive ? 'mobile_hidden' : props.tableValuesClass">
						<p v-for="(data, index) in row.value" :key="index">
							<span v-if="data">
								{{ primary_table_data('source', data, source) }}
							</span>
							<span v-if="index + 1 < row.value.length">,&nbsp;</span>
						</p>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-if="props.tableData.length === 0">Nenhum resultado encontrado.</div>
	</div>
</template>

<script setup lang="ts">
	import { PropType } from 'vue'
	import { TableColumns, TableRows } from '../types'

	const props = defineProps({
		tableData: {
			type: Array as PropType<object[]>,
			required: true
		},
		columns: {
			type: Array as PropType<TableColumns[]>,
			required: true
		},
		rows: {
			type: Array as PropType<TableRows[]>,
			required: true
		},
		tableHeadClass: {
			type: String,
			default: 'headClass'
		},
		tableHeadValueClass: {
			type: String,
			default: 'headValueClass'
		},
		tableBodyClass: {
			type: String,
			default: 'tableBodyClass'
		},
		tableValuesClass: {
			type: String,
			default: 'tableValuesClass'
		}
	})

	function primary_table_data(item: string, data: string, source: object) {
		// eslint-disable-next-line no-eval
		const selected = eval(`${item}.${data}`)

		return selected
	}
</script>

<style scoped>
	table {
		width: 100%;
		table-layout: auto;
		margin: 1.5rem auto;
		border-collapse: collapse;
	}
	.tableBodyClass {
		background-color: white;
	}
	.tableValuesClass {
		border-top: 1px solid rgb(231, 231, 231);
		padding: 1rem;
	}
	.tableHeadClass {
		background: rgb(221, 221, 221);
		color: rgb(0, 0, 0);
		text-align: left;
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
