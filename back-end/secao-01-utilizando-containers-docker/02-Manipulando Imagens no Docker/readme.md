# Aula

Criar imagens do zero no Docker;
Criar imagens Docker usando outras imagens como base;
Aplicar boas práticas e padrões na criação de imagem;
Dockerizar suas aplicações, ou seja, criar uma imagem Docker com tudo que é necessário para executar seus projetos na hora!

## Distinguir imagem de container

Distinguir as definições de imagem e container é algo muito importante!

Uma imagem Docker é um arquivo imutável e a partir dele um ou mais containers podem ser gerados. Essa imagem pode ser criada a partir do comando docker build, seguindo as instruções contidas em um arquivo chamado Dockerfile.

### Funcionalidades

Podemos ter varios containers baseados na mesma imagem.

#### RUN vs. ENTRYPOINT vs. CMD

RUN <'comando'> <'argumento1'> <'argumento2'> <'argumentoN'>:

Indica que o comando dado deve ser executado durante a construção da imagem Docker!
Ou seja, é muito comum utilizar o RUN para fazer instalações de dependências.
ENTRYPOINT <'comando'> <'argumento1'> <'argumento2'> <'argumentoN'>:

Indica qual é o comando (e seus argumentos) que DEVE ser executado ao iniciar esta imagem Docker como um container;
Considere o ENTRYPOINT como OBRIGAÇÃO de comando a ser executado;
Ele sempre será utilizado como ponto de entrada da imagem.
CMD <'comando'> <'argumento1'> <'argumento2'> <'argumentoN'>:

Indica qual é o comando (e seus argumentos) que PODE ser executado ao iniciar esta imagem Docker como um container;
Considere o CMD como SUGESTÃO de comando a ser executado;
Ele pode ser substituído ao executar o comando docker run imagem <'comando'> <'argumento1'>.

##### RECAPITULANDO

IMAGE ID e CONTAINER ID: as imagens Docker e containers possuem um identificador único que podemos usar para gerenciá-los, além dos seus nomes próprios.

Uma imagem, vários containers: podemos executar vários containers baseados em uma mesma imagem Docker.

Arquivo Dockerfile:

É uma “receita” de como criar uma imagem Docker;
Possui uma linguagem própria, com várias palavras reservadas.
Flag -p <'porta-computador'>:<'porta-container'> no comando docker run:

Permite abrir uma exceção no isolamento;
Mapeia uma porta em nosso computador com uma porta no container.
Construção em múltiplos estágios

Cada FROM dentro do Dockerfile significa o início de um novo estágio;
Processo de criação de uma imagem Docker super otimizada, com o uso de imagens intermediárias.
Diferença entre RUN, ENTRYPOINT e CMD

RUN é a execução imediata durante o build;
ENTRYPOINT é a execução obrigatória ao iniciar o container;
CMD é uma sugestão de parâmetros ao iniciar o container.

