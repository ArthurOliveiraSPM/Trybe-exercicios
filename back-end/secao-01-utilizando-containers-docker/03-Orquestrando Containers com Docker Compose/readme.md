# Conteudo do dia

Instalar e utilizar a ferramenta docker-compose;
Entender a relação entre a ferramenta docker-compose e o Docker, e porque usamos ambos;
Gerenciar redes virtuais, utilizando-as para a comunicação e isolamento entre os contêineres;
Persistir dados dos contêineres utilizando volumes;
Criar arquivos compose para gerenciar todo seu ambiente com contêineres;
Entender e gerenciar Services, Network e Volumes, que são novos conceitos trazidos pelo Docker Compose.

## Docker-componse

O Compose possui quatro políticas de reinicialização, sendo elas:

no : define que o container não reiniciará automaticamente (Padrão);
on-failure: define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code, diferente de zero;
always: especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado;
unless-stopped: define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop <'container'> manualmente.

Variaveis de ambiente:

Uma variável de ambiente é um recurso disponível nos sistemas operacionais que permite criar uma variável no formato NOME_DA_VARIÁVEL=VALOR. Onde NOME_DA_VARIÁVEL é o nome da variável de ambiente, e VALOR se refere a um valor que será vinculado à variável. Toda vez que solicitarmos ao sistema operacional o valor de uma variável de ambiente, fornecemos a ele uma NOME_DA_VARIÁVEL e ele retorna o VALOR associado a esta chave, se ela estiver definida.

exemplo: echo $USER
vai retornar: arthur

Anota aí 🖊: A ideia de variáveis de ambiente é trazer mais dinamismo entre ambientes. Por exemplo: Na maioria das empresas, usualmente temos o ambiente de teste e o ambiente de produção, esses dois ambientes possuem nome de pessoa usuária e senha diferentes para cada ambiente. Deixar esses dados fixos ou expostos no código, engessaria a aplicação e seria inseguro. As variáveis de ambiente entram para reduzir esse problema. Tendo variáveis com o mesmo nome em cada ambiente, por exemplo DB_USER e DB_PASSWORD. Em cada ambiente a aplicação consegue se conectar em banco de dados diferentes, isolando assim o ambiente de teste e o de produção.

### Subindo serviços

👀 De olho na dica: a flag -d do Compose funciona da mesma forma quando executamos um container em segundo plano usando o comando docker run -d <nome-da-imagem> com o Docker!

docker-compose up -d  precisa estar na pasta do arquivo yaml para executar

Para versionamento, o comando é:
docker-compose up -d --build

e para descer os serviços:
docker-compose down

#### Subindo serviços especificos

Além de subir e descer, é possível subir apenas parte dos serviços! Por exemplo: imagine que precisamos apenas executar o serviço de back-end. Logo, os únicos serviços necessários nesta demanda são o database e o próprio back-end. Para isso, podemos usar o comando docker-compose up <serviço>.

Se fizermos isso, o Compose vai incluir também suas dependências, como podemos ver no exemplo abaixo, seguindo com nosso arquivo docker-compose.yaml, se rodarmos o comando:

docker-compose up -d backend

Nesse caso, irá subir apenas o database(por ser dependencia do backend) e o proprio arquivo banckend, assim o front end não é subido


Caso queira ver os logs o comando é:
docker-compose logs <nome-do-serviço>
exemplo:
docker-compose logs backend

Para limitar o retono do ccomando, utilizamos a tag --tail:
docker-compose logs --tail 5 database.
Nesse caso irá retornar 5 linhas

👀 De olho na dica: de maneira similar ao comando no Docker, podemos utilizar a flag -f ou --follow para acompanhar em tempo real as saídas dos containers. Para sair, use Ctrl+C ou Command+C.

##### Criando redes virtuais

Da mesma forma que podemos criar volumes virtuais, o Compose nos permite criar múltiplas redes virtuais entre os serviços. Isso é muito importante, pois nos permite criar arquiteturas mais seguras, por exemplo:

O serviço front-end só precisa se comunicar diretamente com o back-end;
O serviço back-end precisa se comunicar tanto com o front-end quanto com o database;
O serviço database só precisa se comunicar diretamente com o back-end.
Ao limitar as comunicações entre os serviços que não necessitam se comunicar de fato, acabamos criando uma arquitetura segura e robusta para os nossos serviços!

##### Serviço vs. Container
