# TypeScript

## Criando um projeto em React

- **Existem diferentes formas de se criar uma aplicação em React sem a necessidade de configurações adicionais. Aqui na Trybe iremos trabalhar com o *Vite* e a pouco tempo usávamos um pacote chamado create-react-app, que basicamente torna mais fácil a criação do projeto.**
- **Para criar uma aplicação React utilizando o Vite, basta executar o seguinte comando no terminal e seguir as instruções mostradas na tela:**

```bash
npm create vite@latest
```

- Após isso, siga as instruções que aparecerão no terminal e selecione as opções:
- "*Project name*": my-react-app;
- "*Select a framework*": **React**;
- "*Select a variant*": **TypeScript** ou **TypeScript + SWC** - As duas opções são semelhantes, a segunda contendo uma pequena melhoria de performance.

---

> **ATENÇÃO**
>
1. temos que abrir o diretório após criar o projeto `cd my-react-app`
2. temos que instalar as dependências `npm i`
3. temos que rodar um comando / script para executar a aplicação `npm run dev`

---

- É possível acrescentar um parâmetro `--open`, que faz com que toda vez que a aplicação seja iniciada e o browser já seja aberto.

```json
"scripts": {
  "dev": "vite --open",
},
```

- Instale também o lint da trybe.

```bash
  npm i @trybe/eslint-config-frontend -D
```

- E importe no `package.json` ou em um arquivo separado com nome `.eslintrc`, as duas formas funcionarão:

`.eslintrc`

```json
{
  "extends": "@trybe/eslint-config-frontend/typescript"
}
```

### Tipos Primitivos no TypeScript

- Os tipos primitivos são aqueles que são considerados como os mais simples no mundo da programação. São eles: `number`, `string`, `boolean`, `null` e `undefined`. Além desses, podemos considerar também o `symbol` e o `bigint`, mas como são tipos mais recentes, não os veremos com tanta frequência.
- **number:** Esse tipo é usado para números em geral, sejam eles inteiros ou decimais.
- **string:** Esse tipo é usado para representar cadeias de caracteres.
- **boolean:** Esse tipo é usado para representar valores lógicos, ou seja, verdadeiro ou falso.
- **null e undefined:** Esses tipos são usados para representar a ausência de valor.
- **void:** Esse tipo é usado para representar a ausência de qualquer tipo de valor. Usado principalmente em funções que não retornam nada.
- **never:** Esse tipo é usado para representar valores que nunca ocorrem. É usado principalmente em funções que lançam exceções ou em loops infinitos.
- **object:** Esse tipo é usado para representar objetos em geral, como arrays, funções, classes, etc.
- **array:** Esse tipo é usado para representar arrays, que são listas de valores.
- **tuple:** Esse tipo é usado para representar arrays com um número fixo de elementos e tipos específicos.
- **enum:** Esse tipo é usado para criar um conjunto de valores nomeados.
- **any:** Esse tipo é usado para representar qualquer tipo de valor.
- **unknown:** Esse tipo é usado para representar um valor desconhecido. Diferente do tipo `any`, o tipo `unknown` não permite que você faça operações com o valor desconhecido sem antes verificar o tipo.

```tsx
// number
let age: number = 26;
let price: number = 9.99;

// string
let name: string = "John Doe";
let message: string = `Hello, ${name}!`;

// boolean
let isOnline: boolean = true;
let isLoggedOut: boolean = false;

// null and undefined
let data: null = null;
let info: undefined = undefined;

// void
function sayHello(): void {
  console.log("Hello!");
}

// never
function throwError(): never {
  throw new Error("Oops!");
}

// object
let person: object = { name: "John Doe", age: 26 };
let array: object[] = [{}, {}];

// array
let numbers: number[] = [1, 2, 3];
let names: string[] = ["John", "Jane", "Jack"];

// tuple
let personData: [string, number] = ["John Doe", 26];

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Green;

// any
let value: any = "Hello!";
value = 123;
value = true;

// unknown
let data: unknown = "Hello!";
if (typeof data === "string") {
  console.log(data.toUpperCase());
}

```

### Tipagem em Funções

- Podemos trabalhar com a tipagem de funções, em que precisamos nos atentar com os tipos definidos nos parâmetros, no retorno da função e no bloco de código dentro da função, assim como, os valores passados quando a função é chamada.

**Exemplo de função sem tipagem:**

```tsx
const retornaMedia = (arr, sujeito) => {
    const media = arr.reduce((acc, el) => acc + el, 0) / arr.length;
    return `a media de ${sujeito} é ${media}`;
}

let arr = [];
arr.push(10, 8, 9);
console.log(retornaMedia(arr, 'Pessoa 1'));
```

**Exemplo de função com tipagem:**

```tsx
const retornaMedia = (arr: number[], sujeito: string): string => {
    const media:number = arr.reduce((acc: number, el: number): number => acc + el, 0) / arr.length;
    return `a media de ${sujeito} é ${media}`;
}

let arr: number[] = [];
arr.push(10, 8, 9);
console.log(retornaMedia(arr, 'Pessoa 1'));
```

### Tipagem em Arrays e Objetos

- **Em TypeScript, você pode definir arrays de várias maneiras. Aqui estão alguns exemplos:**

1. **let arrayOfStrings: string[];**

    ```tsx
    let arrayOfStrings: string[] = ["Hello", "TypeScript", "World"];
    console.log(arrayOfStrings); // ["Hello", "TypeScript", "World"]
    ```

2. **let arrayOfNumbers: number[];**

    ```tsx
    let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
    console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]
    ```

3. **let arrayOfStringsOrNumbers: (string | number)[];**

    ```tsx
    let arrayOfStringsOrNumbers: (string | number)[] = ["Hello", 2, "TypeScript", 4, "World"];
    console.log(arrayOfStringsOrNumbers); // ["Hello", 2, "TypeScript", 4, "World"]
    ```

4. **let arrayOfObjects: object[];**

    ```tsx
    let arrayOfObjects: object[] = [{id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "Doe"}];
    console.log(arrayOfObjects);
    // [{id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "Doe"}]
    ```

- **Tipar objetos em TypeScript é simples e fornece a capacidade de definir a estrutura esperada do objeto. Veja um exemplo:**

```tsx
let user: { name: string, age: number };

user = { // OK
  name: "Alice",
  age: 20
};

user = { // Error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
  name: "Bob"
};
```

### Tipagem com Type

- Até o momento, a tipagem está sendo utilizada diretamente nas variáveis ou funções. Entretanto, há outro modo de declarar os tipos, que é especialmente útil para sua reutilização e para deixar o código mais legível.
- Esse outro modo é chamado de *type alias*, ou seja, dar um “nome” aos seus tipos. Para isso, utilize a palavra reservada `type`.

```tsx
type User = {
  id: number,
  name: string,
  modules?: string[],
}

let myUser: User;
```

- Um exemplo utilizando mais de um type:

```tsx
type HabTipos = {
    musicais?: boolean,
    danca: boolean,
}

type Habilidades = {
    artisticas: HabTipos,
    culinarias: boolean,
}

type Pessoa = {
    nome: string | false,
    idade: number,
    habilidades: Habilidades,
}

let obj: Pessoa = {
    nome: "PEDRO",
    idade: 45,
    habilidades: {
        artisticas: {
            musicais: true,
            danca: false
        },
        culinarias: true,
    }
};

console.log(obj);
```

### Literal Type

- Existem três conjuntos de tipos literais disponíveis no TypeScript hoje: literais de string, literais numéricos e literais booleanos. O uso de tipos literais permite que você especifique um valor específico e exato que um tipo deve ter.
- Aqui estão alguns exemplos:

1. **Tipos Literais de String**
    - Os tipos literais de string permitem que você especifique o valor exato que uma string deve ter. Na prática, os tipos literais de string combinam muito bem com tipos de união, guardas de tipo e pseudônimos de tipo. Aqui está um exemplo:

    ```tsx
    type Profile = "admin" | "manager" | "employee";
    
    interface Person {
      name: string;
      age: number;
      profile: Profile;
    }
    
    const john: Person = {
      name: "John",
      age: 30,
      profile: "admin",
    };
    
    const jane: Person = {
      name: "Jane",
      age: 25,
      profile: "manager",
    };
    
    const alex: Person = {
      name: "Alex",
      age: 28,
      profile: "employee",
    };
    
    const felipe: Person = {
      name: "Felipe",
      age: 33,
      profile: "admin",
    };
    
    ```

    - Neste exemplo, estamos utilizando o literal type `Profile`, que é uma união de três strings ("admin", "manager" e "employee"). Ao definirmos a propriedade `profile` como `Profile`, estamos limitando as opções de valores que podem ser atribuídos a essa propriedade.

2. **Tipos Literais Numéricos**
    - TypeScript também tem tipos literais numéricos. Eles funcionam exatamente da mesma forma que os literais de string, mas com números.

    ```tsx
    type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
    
    function rollDice(): DiceRoll {
        return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
    }
    ```

3. **Tipos Literais Booleanos**
    - Como com strings e números, você pode usar TypeScript para especificar um tipo booleano. É raro, mas útil em algumas situações específicas.

    ```tsx
    type TrueOnly = true;

    let isTrue: TrueOnly;
    isTrue = true; // Funciona bem
    // isTrue = false; // Erro, Type 'false' is not assignable to type 'true'.
    ```

### Interfaces

- [ ]  A interface é parecida com o type, com ela, podemos fazer um contrato sobre como outras estruturas poderão ser, geralmente as interfaces são acompanhadas ou de objetos ou de classes
  - **Código**

        ```tsx
        interface IProduto {
            nome: string;
            valor: number;
        }
        
        const produto: IProduto = {
            nome: "Samsung S8",
            valor: 1535.43,
        }
        
        console.log(produto);
        
        interface IProdutoPerecivel extends IProduto {
            organico: boolean;
        }
        
        const produtoOrg: IProdutoPerecivel = {
            nome: "Samsung S8",
            valor: 1535.43,
            organico: true
        }
        
        console.log(produtoOrg);
        ```

  - **Interface com função**

        ```tsx
        interface IProduto {
            nome: string;
            valor: number;
        }
        
        const produto: IProduto = {
            nome: "Samsung S8",
            valor: 1535.43,
        }
        
        console.log(produto);
        
        interface IProdutoPerecivel extends IProduto {
            organico: boolean;
            reduz_estoque(): string; 
        }
        
        const produtoOrg: IProdutoPerecivel = {
            nome: "Samsung S8",
            valor: 1535.43,
            organico: true,
            reduz_estoque(): string {
                return `O produto ${this.nome} teve sua quantidade reduzida`
            }
        }
        
        console.log(produtoOrg);
        console.log(produtoOrg.reduz_estoque());
        ```

  - **Tipo de Função com Interface**

        ```tsx
        interface SumFunc {
            (a: number, b: number): number;
          }
          
          const add: SumFunc = (a, b) => {
            return a + b;
          }
        
          console.log(add(3,2));
        ```

  - **Array de objetos com Interface**

        ```jsx
        interface Estado {
            sigla: string
            nome: string
        }
        
        export const estados: Estado[] = [
            { sigla: 'AC', nome: 'Acre' },
            { sigla: 'AL', nome: 'Alagoas' },
            { sigla: 'AP', nome: 'Amapá' },
            { sigla: 'AM', nome: 'Amazonas' },
            { sigla: 'BA', nome: 'Bahia' },
            { sigla: 'CE', nome: 'Ceará' },
            { sigla: 'DF', nome: 'Distrito Federal' },
            { sigla: 'ES', nome: 'Espírito Santo' },
            { sigla: 'GO', nome: 'Goiás' },
            { sigla: 'MA', nome: 'Maranhão' },
            { sigla: 'MT', nome: 'Mato Grosso' },
            { sigla: 'MS', nome: 'Mato Grosso do Sul' },
            { sigla: 'MG', nome: 'Minas Gerais' },
            { sigla: 'PA', nome: 'Pará' },
            { sigla: 'PB', nome: 'Paraíba' },
            { sigla: 'PR', nome: 'Paraná' },
            { sigla: 'PE', nome: 'Pernambuco' },
            { sigla: 'PI', nome: 'Piauí' },
            { sigla: 'RJ', nome: 'Rio de Janeiro' },
            { sigla: 'RN', nome: 'Rio Grande do Norte' },
            { sigla: 'RS', nome: 'Rio Grande do Sul' },
            { sigla: 'RO', nome: 'Rondônia' },
            { sigla: 'RR', nome: 'Roraima' },
            { sigla: 'SC', nome: 'Santa Catarina' },
            { sigla: 'SP', nome: 'São Paulo' },
            { sigla: 'SE', nome: 'Sergipe' },
            { sigla: 'TO', nome: 'Tocantins' }
        ]
        ```

  - **Interseção**

      ```tsx
      interface Person {
      name: string;
      firstname: string;
      }
      
      interface FootballPlayer {
        club: string;
      }
      
      function transferPlayer(player: Person & FootballPlayer) {}
      
      // 👍
      transferPlayer({
        name: 'Ramos',
        firstname: 'Sergio',
        club: 'PSG',
      });
      
      // 👎 Argument is not assignable to Person & FootballPlayer
      transferPlayer({
        name: 'Ramos',
        firstname: 'Sergio',
      });
      ```
