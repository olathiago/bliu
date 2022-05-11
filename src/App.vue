<template>
	<div class="app">
		<div>
			<h1>Dynamic form sample</h1>
		</div>
		<BForm :form-options="options" />
	</div>
	<div class="app">
		<div>
			<h1>Dynamic table sample</h1>
			<p>These are highly customizable tables with css and dynamic content and responsiveness.</p>
		</div>
		<BTable
			:table-data="options"
			:columns="columns"
			:rows="rows"
			table-head-class="headClass"
			table-head-value-class="tableHeadValueClass"
			class="tableShadow"
		/>
	</div>
</template>

<script setup lang="ts">
	import { BForm, BTable, TableColumns, TableRows } from './components'
	import { FormOptions } from './components'

	const columns: TableColumns[] = [
		{ value: 'Nome', responsive: true },
		{ value: 'Comentários', responsive: true }
	]

	const rows: TableRows[] = [
		{ value: ['label'], responsive: true },
		{ value: ['comment'], responsive: true }
	]

	const options: FormOptions[] = [
		{
			id: 'nome',
			label: 'Título do produto',
			model: '',
			type: 'text',
			min: 4,
			max: 200
		},
		{
			id: 'preco',
			label: 'Preço unitário do produto',
			placeholder: '12,34',
			comment: 'Centavos devem ser formatados com vírgulas.',
			model: '',
			type: 'text',
			min: 1,
			max: 12
		},
		{
			id: 'disponibilidade',
			label: 'Disponibilidade',
			comment: 'Ao desmarcar, você retira o produto de circulação no app sem precisar deleta-lo.',
			model: false,
			type: 'checkbox'
		},
		{
			id: 'description',
			label: 'Descrição do produto',
			placeholder: 'Aqui você descreverá os detalhes técnicos do seu produto. Possui um limite de 500 caracteres.',
			model: '',
			type: 'textarea',
			min: 0,
			max: 500
		},
		{
			id: 'indice',
			label: 'Índice',
			comment:
				'O índice define a ORDEM de exibição dos seus produtos no app. Ordenando-os do maior para o menor número de índice. Caso produtos possuam um mesmo número de índice, o segundo critério de ordenamento será a ordem alfabética do título do produto.',
			placeholder: 'No mínimo 0(zero) no máximo 100.',
			model: 0,
			type: 'number',
			min: 1,
			max: 3,
			pattern: '^[0-9]{1,3}$'
		},
		{
			id: 'cor_fundo',
			label: 'Cor de fundo',
			model: '',
			type: 'color',
			min: 7,
			max: 7
		}
	]
</script>

<style>
	body {
		margin: 0;
	}
	.app {
		width: 50rem;
		margin: 0 auto;
	}
	.tableShadow {
		box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
			rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
		border-radius: 0.75rem;
	}
	.headClass {
		background: rgb(255, 84, 169);
		color: white;
		text-align: left;
	}
	.tableHeadValueClass {
		padding: 1rem;
	}
</style>
