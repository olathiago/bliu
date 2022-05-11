type FormTypes = 'text' | 'color' | 'number' | 'email' | 'tel' | 'textarea' | 'checkbox' | 'date' | 'password'

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

export type TableColumns = {
	value: string
	responsive: boolean
}

export type TableRows = {
	value: string[]
	responsive: boolean
}
