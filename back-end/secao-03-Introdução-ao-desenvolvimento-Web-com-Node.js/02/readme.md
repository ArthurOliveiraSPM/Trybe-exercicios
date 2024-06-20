# Conteudo do Dia - API REST com Express

Definir um Servidor;

Utilizar o Node.js com o framework Express para criar uma rota de um endpoint de API, acessível pelo navegador;

Utilizar o Nodemon para auxiliar no desenvolvimento de APIs Node.js com o framework Express;

Utilizar o Node.js com o framework Express para receber e tratar requisições com parâmetros de:

rota, ou router params;
consulta, ou query params;
Utilizar o Node.js com o framework Express para receber e tratar requisições com parâmetros em seu corpo, ou body;

Utilizar o Node.js com o framework Express para criar uma aplicação C.R.U.D. - de criação, leitura, atualização e remoção de dados;

Utilizar o Thunder Client para fazer requisições a partir do VS Code;

Descrever uma API REST.

APIs Web são ferramentas definitivas para conectar o front-end de uma aplicação aos dados que ela precisa salvar e receber. O padrão REST, rotas e aplicações C.R.U.D são partes do conhecimento de como se fazer uma boa API - conhecimento que te fará brilhar em inúmeros processos seletivos!

Create: Criar;
Read: Ler;
Update: Alterar;
Delete: Deletar;

Lembrando das nomenclaturas:
<!-- https://app.trybe.com/login -->

https -> protocolo
app.trybe.com -> Dominio
/login -> rota

## API

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

1° parâmetro '/': Aqui é rota que tanto falamos. Podem ser /login, /produtos, /pessoas, ou qualquer outra coisa! Neste caso, colocamos apenas /.
Chamamos a rota / de rota raiz;

2° parâmetro (req, res) => {}: Este espera uma função de callback. Esta função pode receber de 2 a 4 parâmetros, sendo eles:
req: Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
res: Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado;
next: Não vamos trabalhar com ele nesta aula;
err: Não vamos trabalhar com ele nesta aula.

Essa função é responsável por responder nossas requisições. Então, observe o trecho res.status(200).json({ message: 'Olá Mundo!' }) e reflita sobre o que cada coisa deve significar.

res como comentado, responde as requisições. Estas requisições podem ser respondidas de vários jeitos, tais como:
Formato text/JSON, como o caso do res.json({ message: 'Olá Mundo!' });
<!-- Formato text/HTML, como o caso do res.send('<h1>Olá Mundo!</h1>'); -->
<!-- Redirecionamentos, como o caso do res.redirect('https://www.betrybe.com/'); -->
Páginas completas ou partes dela, como o caso do res.render('index.html');
Finalizando, como o caso do res.end();

REST

REST é um conjunto de boas práticas utilizadas durante a construção de uma API;
RESTful é um serviço web (desenvolvido por nós ou não) que segue as regras definidas pelo REST;

5 restrições rest
Interface uniforme (Uniform Interface): respeitar um padrão para transferir informações;
Arquitetura cliente-servidor: o REST quer nossa API organizada de forma que ela sirva a clientes gerenciando suas solicitações HTTP;
Sem estado (stateless): entre uma requisição e outra, a API não armazena informações do cliente. Todas as requisições são independentes;
Cacheable: requisições repetidas podem ser otimizadas, pois retornam os mesmos resultados;
Sistema em camadas (Layered System): quem faz a requisição não vê as várias partes que fazem uma API - só a sua camada que gerencia requisições.

### Glossário do conteudo
C.R.U.D. (ou CRUD)
Esse é um acrônimo para um conjunto de operações muitíssimo comuns no mundo do desenvolvimento, elas são:

Create: Criar;
Read: Ler;
Update: Alterar;
Delete: Deletar;
Dependências e dependências de dependências
O Package.json é o arquivo onde estão listadas todas as dependências de um projeto. Lá estão sinalizados quais são os pacotes essenciais para o funcionamento da nossa aplicação, tanto em produção (na chave dependencies), quanto em desenvolvimento (na chave dev-dependencies).

Já o package-lock.json é um arquivo bem maior, pois lista também as dependências de nossas dependências, garantindo que tudo que nossa aplicação precisa para rodar está descrito ali. O Node se encarrega de que sempre que instalamos um pacote, os pacotes dos quais ele depende serão instalados junto.

Enquanto isso, a node_modules é onde todas as nossas dependências e dependências de nossas dependências efetivamente estão instaladas.

Framework Express
A palavra framework, quer dizer estrutura ou molde e é basicamente isso que ela é para uma aplicação. O framework é como um template, que te sugere uma forma específica de construir sua aplicação e te dá ferramentas pra fazer isso mais rápido.

O Express é um framework que nos ajuda a organizar e construir APIs robustas e flexíveis, nos dando ferramentas que fazem as coisas acontecerem com poucas linhas de código, abstraindo a lógica e códigos por trás de funcionalidades muito comuns nas aplicações.

Métodos de envio
Temos 3 métodos de envio:

Envio por parâmetros de consulta ou query params: Muito utilizado e amplamente visto em sites na internet.

Um exemplo de uso é o próprio site de pesquisa do Google, o qual envia o que foi pesquisado pela URL do seu navegador, por exemplo: https://www.google.com.br/search?q=Trybe;

Envio por parâmetros de rota ou route params: Também muito utilizado, mas este geralmente é visto em sites de produtos.

Um exemplo de uso são os e-commerces, quando clicamos em algum produto para ver a página específica dele, por exemplo: https://www.kabum.com.br/produto/128561;

Envio por body: Usado para envio de dados sensíveis/sigilosos, utilizado principalmente em formulários e juntamente com outros artefatos, dá maior segurança para sua aplicação.

Um exemplo de uso é o próprio login do course da Trybe.

Portas
Cada programa tem uma porta atribuída a ele, que é representada por um número. A função dessa porta é identificar para onde serão direcionadas as requisições feitas para aquele programa. Dizemos que um programa está “ouvindo”, do inglês “listen”, uma porta quando ele está alocado pelo sistema operacional pra ela.

Protocolo
Protocolo é uma convenção que padroniza algo. O protocolo HTTP, que tanto usamos, é uma convenção que padroniza a conexão, comunicação e transferência de dados, entre dois sistemas.

Rotas
Também são chamadas de caminhos, paths e endpoints de uma API. São a parte de uma URL que usamos para acessar uma API e fazer uma requisição a ela. Por meio dela requisitamos acesso, criação, leitura ou remoção de informações em nossas APIs. Em suma, quando você digita uma URL no navegador, por “trás dos panos” ele está fazendo uma requisição àquela rota.

Servidores web
São nada mais que programas de computador que entregam algum tipo de informação ou página solicitados via internet. Sempre que você abre seu navegador de internet e faz uma pesquisa no Google, é um servidor web da Google que te “responde”, trazendo o resultado da sua busca a partir das páginas e informações salvas no banco de dados da empresa.
