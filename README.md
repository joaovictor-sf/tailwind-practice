# Tailwind Crash Course
## Introdução ao Tailwind CSS
### O que é Tailwind CSS?
O Tailwind CSS é um framework de design CSS que visa reduzir a necessidade de escrever CSS personalizado, permitindo que você crie designs de página da web rapidamente.

### Tailwind CSS vs Bootstrap
O Tailwind CSS é uma estrutura de design CSS de baixo nível, enquanto o Bootstrap é uma estrutura de design CSS de alto nível. O Tailwind CSS fornece classes de utilitário de baixo nível que você pode usar para criar designs personalizados, enquanto o Bootstrap fornece componentes de alto nível que você pode usar para criar designs de página da web rapidamente.

### Como usar o Tailwind CSS
Para instalar o Tailwind de forma rapida e eficiente é possivel faze-lo ultilizando o Vite.

```bash
npm create vite@latest ./ -- --template react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Como o Tailwind funciona
O Tailwind CSS funciona fornecendo classes de utilitário CSS que você pode adicionar ao seu HTML para estilizar seus elementos. Por exemplo, você pode adicionar a classe `bg-blue-500` a um elemento para definir o plano de fundo do elemento como azul.

```html
<div class="bg-blue-500">Hello, world!</div>
```

### Just-in-time mode
O Tailwind CSS 2.1 introduziu um novo modo chamado "just-in-time" que permite compilar apenas as classes de utilitário que você realmente usa em seu projeto. Isso pode reduzir significativamente o tamanho do arquivo CSS gerado, tornando seu site mais rápido de carregar.

Para habilitar o modo "just-in-time", adicione o seguinte código ao seu arquivo `tailwind.config.js`:

```js
module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

## Ultilizando Tailwind

### Responsividade
O Tailwind CSS fornece classes de utilitário para tornar seu site responsivo. Por exemplo, você pode adicionar a classe `sm:text-lg` a um elemento para definir o tamanho da fonte do elemento como grande em telas pequenas e maiores.

```html
<div class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Hello, world!</div>
```

#### Breakpoints
O Tailwind CSS fornece classes de utilitário para cada breakpoint de tela. Aqui estão os breakpoints padrão:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Espaçamento
O Tailwind CSS fornece classes de utilitário para adicionar espaçamento entre elementos. Para margens e preenchimentos, você pode adicionar a classe `m-{size}` e `p-{size}` a um elemento para adicionar margem e preenchimento ao elemento, respectivamente.

```html
<div class="m-4 p-4">Hello, world!</div>
```

### Cores
Para as cores, o Tailwind CSS tem classes como `text-{color}` e `bg-{color}` para definir a cor do texto e o plano de fundo de um elemento, respectivamente.

```html
<div class="text-red-500 bg-blue-500">Hello, world!</div>
```

O numero `500` é a intensidade da cor, podendo variar de `50` a `900` em intervalos de `100`.

- `50`: 5%	
- `100`: 10%
- `200`: 20%
...

É possivel tambem adicionar cores personalizadas ao seu projeto, basta adicionar ao arquivo `tailwind.config.js` ou ao arquivo `styles.css`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3490dc',
      },
    },
  },
  variants: {},
  plugins: [],
}
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-custom-blue {
    --tw-text-opacity: 1;
    color: rgba(52, 144, 220, var(--tw-text-opacity));
  }
}
```

Tambem é possivel criar a cor in-line:

```html
<div class="text-[#3490dc]">Hello, world!</div>
```

### Flexbox
O Tailwind CSS fornece classes de utilitário para usar flexbox em seu site. Por exemplo, você pode adicionar a classe `flex` a um elemento para torná-lo um contêiner flexível. Você também usar classes como `justify-center` e `items-center` para alinhar os itens do contêiner.

```html
<div class="flex justify-center items-center">Hello, world!</div>
```

### Grid
O Tailwind CSS fornece classes de utilitário para usar grid em seu site. Por exemplo, você pode adicionar a classe `grid grid-cols-3` a um elemento para criar um layout de grade com 3 colunas.

```html
<div class="grid grid-cols-3">Hello, world!</div>
```

### Listas
O Tailwind CSS fornece classes de utilitário para estilizar listas em seu site. Por exemplo, você pode adicionar a classe `list-disc` a uma lista não ordenada para adicionar marcadores de disco à lista.

```html
<ul class="list-disc">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Você também pode ultilizar classes que comecem com `first:` e `last:` para estilizar o primeiro e o ultimo item da lista. Ou ate mesmo `even:` e `odd:` para estilizar os itens pares e impares.  

```html
<ul class="list-disc">
  <li class="first:font-bold">Item 1</li>
  <li class="even:text-red-500">Item 2</li>
  <li class="last:font-bold">Item 3</li>
</ul>
```