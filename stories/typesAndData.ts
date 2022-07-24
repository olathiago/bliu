// This file is used just demonstrate some data to components. It's not vital for the library to work properly.

export type FormTypes = 'text' | 'color' | 'number' | 'email' | 'tel' | 'textarea' | 'checkbox' | 'date' | 'password'

export type FormOptions = {
	id: string
	label: string
	placeholder?: string
	model: string | number | boolean
	type: FormTypes
	min?: number
	max?: number
	comment?: string
	pattern?: string
}

export const columns: string[] = ['Id', 'Movie title', 'Nested Props']

export const rows: string[] = ['id', 'label', 'nested.nested.nested']

export const tableData: object[] = [
	{
		id: 'Movie1A',
		label: 'Indiana Jones and the Temple of Doom',
		nested: {
			nested: {
				nested: 1
			}
		}
	},
	{
		id: 'Movie2A',
		label: 'Indiana Jones and the Last Crusade',
		nested: {
			nested: {
				nested: 2
			}
		}
	},
	{
		id: 'Movie1B',
		label: 'Interestellar',
		nested: {
			nested: {
				nested: 3
			}
		}
	}
]

export const options: FormOptions[] = [
	{
		id: 'nome',
		label: 'Product title',
		model: '',
		type: 'text',
		min: 4,
		max: 200
	},
	{
		id: 'preco',
		label: 'Price',
		placeholder: '12,34',
		comment: 'Cents needs to be separeted by commas.',
		model: '',
		type: 'text',
		min: 1,
		max: 12
	},
	{
		id: 'disponibilidade',
		label: 'Availability',
		comment: 'If you uncheck this, your product will be out of purchase.',
		model: false,
		type: 'checkbox'
	},
	{
		id: 'description',
		label: 'Description',
		placeholder: 'Here you need to describe your product with a limit of 500 characters.',
		model: '',
		type: 'textarea',
		min: 0,
		max: 500
	},
	{
		id: 'cor_fundo',
		label: 'Background color',
		model: '',
		type: 'color',
		min: 7,
		max: 7
	}
]

export const carrouselStaticData = [
	{
		source:
			'https://images.unsplash.com/photo-1658589616660-3540dfff4475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
		alt: 'A Nikon camera image and I dont know what more I can say'
	},
	{
		source:
			'https://images.unsplash.com/photo-1658180129345-5b37d73409aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
		alt: 'A forest image and it is beautiful smileyface smileyface'
	},
	{
		source:
			'https://images.unsplash.com/photo-1658484179733-dfad8c75b9e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		alt: 'A desert image and I dont know what more I can say'
	}
]
