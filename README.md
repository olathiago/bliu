# Bliu

![Bliu](https://firebasestorage.googleapis.com/v0/b/qalaya-painel.appspot.com/o/qalaya%2Fbliu.png?alt=media&token=e35f68bf-7839-4821-acf1-84cf156aedf3)

Bliu is a magic word created by Professor Cerginho da Pereira Nunes in his desperate times.

It means everything and nothing.

- "Ok, but could you please explain the library? 😴😒"

Yes, I can. I'm sorry that I got too excited talking about _the greatest_ Professor Cerginho and his key to existence and I'm disappointed that you won't use his trancendent secret in your journey. 😂😂

## Installation

This library is NOT a package that you can install using npm, yarn, etc. You'll need to go to "components" folder and copy the component your project needs.
I chose to do this way because it gives you more flexibility for customizing the component to your personal taste. You won't need to manage another dependency in your package.json too.

## Documentation

You can access the docs by opening it's dedicated Storybook DocPage to see components properties and their descriptions: 🚩 https://bliu.netlify.app/ 🚩

### Types

Here you can see some of the types described in the docs that you could be confused by it's meanings:

```ts
type ImageStructure = {
    source: string
    alt?: string
}

type FormTypes = 'text' | 'color' | 'number' | 'email' | 'tel' | 'textarea' | 'checkbox' | 'date' | 'password'

type FormOptions = {
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
```
