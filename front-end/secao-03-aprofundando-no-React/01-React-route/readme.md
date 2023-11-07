Utilizar os componentes Route e Routes da biblioteca React Router para criar rotas em aplicações React;
Utilizar o componente Outlet para um layout em diferentes rotas;
Criar rotas dinâmicas;
Redirecionar a página usando o componente Link e o hook useNavigate;
Criar um menu de navegação utilizando o componente NavLink;
Usar os hooks useLocation e useParams para recuperar informações da rota;
Passar informações entre rotas por meio de props ou states.

npm install react-router-dom

Coloque o BrowserRouter no main.tsx e no app.tsx, faça as importações

## Route
Para definir as rotas, utilize <Routes> e dentro <Route path='Caminho que voce quer dar para a rota' element={componente}>
tipo assim:
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees" element={ <CoffeeList /> } />
    </Routes>

### Link
Outro exemplo é o link, coloca a tag link e como prop coloca "to" que servirá para direcianar para um path:
<Link to="/coffees">
  Nossos cafés
</Link>
Nesse exemplo, o texto “Nossos cafés” foi passado como children do componente, assim, quando clickar no link, será redirecionado pro path. Ele gera um HTML <a> por trás.


## HOOK useNavegate
Esse hook nos retorna uma função que, quando executada, direciona a aplicação para uma nova página. É possível, assim, criar validações em formulários, por exemplo, e realizar o redirecionamento apenas após todas as validações serem realizadas!

1 Importe o useNavigate da biblioteca React Router;
2 Armazene a função retornada pelo hook em uma constante ou variável;
3 Execute a função retornada, passando como parâmetro a rota que se deseja acessar.

### NavLink
É utlizado para fazer os menus dos lites, na aplicação está senvindo como guia para navegar entre os paths da aplicação

### Outlet
O <Outlet /> é um componente do React que serve como um placeholder no componente que ele é inserido, por exemplo utilizando no NavLink ou Layout, assim que for clickado em algum caminho o outlet sera subtituido pelo compenente que o usuario clickou

### useLocation
Esse hook permite pegar informações da rota e retorna um objeto contendo todas as informações da rota atual.
Também da pra usar para ler informações transferidas entre rotas:
Quando utilizamos o componente Link, é necessário adicionar uma prop chamada state:

Copiar
<Link to="/home" state={{ name: "Miguel" }} />
Ao clicar no link criado acima, o componente que corresponder à rota /home receberá o objeto state contendo o valor enviado { name: "Miguel" }.

No componente correspondente à rota direcionada, é possível ler as informações por meio do hook useLocation:

// homeComponent

import { useLocation } from 'react-router-dom';

function homeComponent() {
  const location = useLocation();
  // ...
}
Nesse exemplo, location será um objeto contendo uma chave state. O state também será um objeto, contendo o valor { name: "Miguel" }.

também da pra fazer isso com o useNavigate,
const navigate = useNavigate();

navigate('/home', { state: { name: "Miguel" }})


### Resumo até agora
Você viu que, em alguns casos, será necessário passar informações entre as páginas. Essas informações podem ser passadas por meio de rotas dinâmicas, utilizando o hook useParams. Também é possível recuperar valores com o hook useLocation, passando um state para componentes Link ou usando o retorno do hook useNavigate.

quando quiser armazenar alguma informação em um componente, deve utilizar o hook useState. Em outras palavras, essa estratégia consiste em armazenar os estados que serão compartilhados entre páginas no componente mais elevado da aplicação: o App. Dessa forma, é possível criar algo parecido com um estado global da aplicação e, a partir dele, passar as informações para os demais componentes

### Elevação de Estado
function App() {
  const [name, setName] = useState('Miguel');
  const [age, setAge] = useState(21);

  return (
    <Routes>
      <Route path="/" element={ <Home globalState={{ name, age }} />} />
      <Route path="/edit-profile" element={ <EditProfile globalState={{ name, setName, age, setAge }} />} />
    </Routes>
  )

Acessando a prop em seus respectivos componentes, tem-se o acesso aos valores de name e age armazenados em App. Para alterar algum valor, utilize os setters setName ou setAge, também enviados via prop.

E assim, no componente EditProfile, ao utilizar a função globalState.setName, o valor do estado name será alterado diretamente no componente App. Este componente, por sua vez, atualizará o valor de name em todos os componentes que estiverem utilizando esse valor!
