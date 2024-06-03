# Docker

docker <'comando'> <'subcomando'> <'parâmetros'> é o formato padrão para comandos não-abreviados no CLI;

Utilize o parâmetro --help no <'comando'> ou <'subcomando'> para ter a relação completa do que pode ser executado a partir deles;

Exemplo: docker container --help ou docker container run --help.
Os <'parâmetros'> são opcionais na execução dos comandos;

O conteúdo faz referência à documentação oficial do Docker.

Nos exemplos desta seção, nós usaremos imagens Docker que já foram construídas e publicadas no Docker Hub de maneira pública. Em um próximo momento, vamos aprender como criar nossas próprias imagens Docker e executá-las como containers!

Você pode remover os containers exemplificados acima usando o comando docker rm <'nome-do-container'>.

📝 Anote ai: um container só pode ser removido com o comando docker rm <'nome-do-container'> se ele estiver parado ou tiver sua execução terminada**.

## Revisando

Docker: conjunto de ferramentas (Daemon, API, CLI) para gerenciar imagens e containers.

Arquivo Dockerfile: arquivo com linguagem própria, com os passos necessários para criar uma nova imagem Docker usando o código-fonte de um projeto.

Imagem Docker: é o projeto “compactado”, que foi construído de acordo com os passos contidos no arquivo Dockerfile. Pode ser usado como base para criar novas imagens Docker.

Container: é a execução de projeto através da sua imagem Docker já construída anteriormente.

Registry: é o local remoto onde podemos enviar e baixar imagens Docker. Um registry pode ser público ou privado.

Docker Hub:

É o registry oficial da empresa Docker Inc.
Ele é público, porém possui alguns limites.
É possível assinar o serviço para utilizá-lo como registry privado.
