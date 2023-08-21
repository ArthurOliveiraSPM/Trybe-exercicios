const trybeBankCustomers = ['Neko','Boneko','Caneko']
 ; 

// function addCustomer(array, customer){
//     if (typeof customer === 'string') {
//         return  array.push(customer);
//     }else{
//         console.log('O parâmetro passado deve ser do tipo string');
//     }
// };

// addCustomer(trybeBankCustomers,'1024');
// console.log(trybeBankCustomers);

function addCustomers(array,customers){
    for (let index = 0; index < customers.length; index+=1) {
        if (typeof customers[index] === 'string') {
            array.push(customers[index])
        }
        else{
            return 'Todos os valores precisam ser strings';
        }
    }
    return trybeBankCustomers
}
    console.log(addCustomers(trybeBankCustomers,['teste','Teste2']));
    console.log(addCustomers(trybeBankCustomers,['Ronadinho',1997]));