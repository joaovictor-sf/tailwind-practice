# Tailwind Crash Course
## Introdução ao Tailwind CSS
### O que é Tailwind CSS?
O Tailwind CSS é um framework de design CSS que visa reduzir a necessidade de escrever CSS personalizado, permitindo que você crie designs de página da web rapidamente.

### Tailwind CSS vs Bootstrap
O Tailwind CSS é uma estrutura de design CSS de baixo nível, enquanto o Bootstrap é uma estrutura de design CSS de alto nível. O Tailwind CSS fornece classes de utilitário de baixo nível que você pode usar para criar designs personalizados, enquanto o Bootstrap fornece componentes de alto nível que você pode usar para criar designs de página da web rapidamente.

### Como usar o Tailwind CSS
Para usar o Tailwind CSS, você precisa adicionar o arquivo CSS do Tailwind ao seu projeto e adicionar classes de utilitário do Tailwind ao seu HTML. Você pode adicionar o arquivo CSS do Tailwind ao seu projeto baixando-o do site do Tailwind ou instalando-o via npm.

npm:
```bash
npm install tailwindcss
```

### Como o Tailwind funciona
O Tailwind CSS funciona fornecendo classes de utilitário CSS que você pode adicionar ao seu HTML para estilizar seus elementos. Por exemplo, você pode adicionar a classe `bg-blue-500` a um elemento para definir o plano de fundo do elemento como azul.

```html
<div class="bg-blue-500">Hello, world!</div>
```

### Just-in-time mode
O Tailwind CSS 2.1 introduziu um novo modo chamado "just-in-time" que permite compilar apenas as classes de utilitário que você realmente usa em seu projeto. Isso pode reduzir significativamente o tamanho do arquivo CSS gerado, tornando seu site mais rápido de carregar.