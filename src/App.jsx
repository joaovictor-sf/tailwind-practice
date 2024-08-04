export default function App() {

    //Tailwind breakpoints
    /*
        'sm': '640px',
      => @media (min-width: 640px) { ... }

      'md': '768px',
      => @media (min-width: 768px) { ... }

      'lg': '1024px',
      => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      => @media (min-width: 1536px) { ... }
    */

   //Cunstom configurations
   /*
    Voce pode criar classes novas na hora colocando [], tambem é possivle salvar uma configuração que voce use no tailwind.config.js 
   */
    return (
      <main className="p-5">
        <h1 className="text-center text-lg text-green-400">Hello World</h1>

        
        <div className="w-full h-10 bg-violet-200 border-violet-600 border-2 rounded-md text-center my-4 p-2">
            <p className="text-center font-mono font-extrabold">A div</p>
        </div>

        <h1 className="text-center text-lg p-4">Layout</h1>

        <h2 className="text-lg pb-2">Flex</h2>
        <div className="flex justify-between">
            <div className="h-16 w-16 rounded-full bg-blue-500"></div>
            <div className="h-16 w-16 rounded-full bg-blue-500"></div>
            <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        </div>

        <h2 className="text-lg p-2">Grid</h2>
        <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-violet-500 h-12"></div>
            <div className="bg-violet-500 h-12"></div>
            <div className="bg-violet-500 h-12"></div>
        </div>

        <h2 className="text-lg p-2">Responsividade</h2>
        <div className="sm:block hidden">
            <p>Eu vou aparecer para dispositivos maiores que 768px</p>
        </div>
        <div className="max-sm:block hidden">
            <p>Eu vou aparecer para dispositivos menores que 768px</p>
        </div>

        <h2 className="text-lg p-2">Butões</h2>
        <button className="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-500">
            Click me
        </button>

        <h2 className="text-lg p-2">Listas</h2>
        <ul className="my-2 space-y-2">
            <li className="bg-white p-2 first:bg-yellow-200">item 1</li>
            <li className="bg-white p-2 first:bg-yellow-200 odd:bg-blue-300 even:bg-green-300">item 2</li>
            <li className="bg-white p-2 first:bg-yellow-200 odd:bg-blue-300 even:bg-green-300">item 3</li>
            <li className="bg-white p-2 first:bg-yellow-200 odd:bg-blue-300 even:bg-green-300">item 4</li>
            <li className="bg-white p-2 first:bg-yellow-200 odd:bg-blue-300 even:bg-green-300">item 5</li>
        </ul>

        <h2 className="text-lg p-2">Dark-mode Pesquisar mais sobre</h2>
        <div className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-slate-900/5">

            <p className="text-base font-medium tracking-tight text-slate-900">akfnsdfnsndfj</p>
            <p className="mt-2 text">dfadnfksanfdlksndflkasnfksdfsafdf</p>

            <button id="toggleDark"
            className="text-blue-500 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
            onClick={"document.body.classList.togle('dark')"}>
                Mude para o Dark Mode
            </button>
        </div>

        <h2 className="text-lg p-2">Cusntom</h2>
        <p className="text-2xl text-nova p-[16px]">Cunstom color</p>
      </main>
    )
  }
