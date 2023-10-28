// Hooks são funções, portanto podem receber parametros e retornam valores
// Os Hooks sempre devem estar nos top level do componente, basicamente não pode estar dentro de outra "função(if else, for etc)"
// Tem que sempre começar com "use", tipo useEffect, useState, useContext
// Não pode ser usado em componentes de classe, apenas componentes Funcionais

// Exemplo de utilização
import { useState } from 'react';

const [tools, setTools] = useState<string | string[]>(''); 
//Tem como definir o tipo utilizando o Generics, 
// tipo nesse caso está mostrando string e um array de strings


// Em outro exemplo, imagine que você queira inicializar um estado com uma lista vazia [], 
// mas deseja que essa lista seja preenchida com valores de um tipo específico, 
// como pode ser observado abaixo:

type UserType = {
    id: number,
    username: string,
  }
  
  // ...
  
  const [userList, setUserList] = useState<UserType[]>([])

//   Como boa prática, você deverá apenas utilizar generics no useState quando for necessário. Caso contrário, deixe que o TypeScript faça a inferência do tipo para você!