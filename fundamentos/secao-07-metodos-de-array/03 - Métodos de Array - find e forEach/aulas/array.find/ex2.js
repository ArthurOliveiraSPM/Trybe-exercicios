const contacts = [
  { name: 'João', phone: '123456789' },
  { name: 'Maria', phone: '987654321' },
  { name: 'Pedro', phone: '456123789' },
  { name: 'Ana', phone: '789456123' },
  { name: 'Carlos', phone: '321654987' },
  { name: 'Mariana', phone: '654123987' },
  { name: 'Lucas', phone: '987321654' },
  { name: 'Laura', phone: '123789456' },
  { name: 'Tiago', phone: '789123456' },
  { name: 'Beatriz', phone: '456789123' }
];

const searchContact = (contacts, name) => {
  const contact = contacts.find((contacts)=> contacts.name === name)
    if (contact) {
      return {...contact}
    } else {
      return 'Contato não encontrado'
    }  
  
  };

console.log(searchContact(contacts, 'Lucas'));