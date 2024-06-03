# FROM httpd:2.4.54
# COPY index.html /usr/local/apache2/htdocs/
# EXPOSE 80
# CMD ["httpd-foreground"]

# FROM httpd:2.4.54
# Vamos começar a construção desta imagem se baseando na imagem já existente, chamada httpd, com a tag 2.4.54

# COPY index.html /usr/local/apache2/htdocs/
# Temos uma nova palavra reservada: COPY
# Esta linha vai copiar um arquivo no computador local e colocá-lo dentro da imagem, no caminho especificado à frente.
# Ou seja, a linha vai copiar o arquivo index.html, que está na pasta atual da execução do comando docker build, e vai copiá-lo para o caminho /usr/local/apache2/htdocs/, dentro da imagem!
# Este caminho específico é onde o httpd vai procurar por arquivos HTML a serem servidos.
# Alternativamente pode-se utilizar o comando ADD index.html /usr/local/apache2/htdocs. Nesse caso, não mudaria nada, mas o comando ADD tem duas funcionalidades interessantes, tais como:
# Fazer o download do conteúdo de uma URL \<src> na pasta de destino \<dest>
# Descompactar automaticamente arquivos compactados de formatos reconhecidos (.tar, .gzip, .bzip2, etc)

# EXPOSE 80
# Temos uma nova palavra reservada: EXPOSE
# Esta linha indica que a imagem poderá receber conexões pelo número da porta que for informado;
# Neste caso, indica que a imagem poderá receber conexões na porta 80, que é a porta padrão utilizada pelo httpd.

# CMD ["httpd-foreground"]
# Estamos especificando que o programa httpd-foreground seja executado ao iniciar essa imagem como um container.
# Este programa já veio junto com a imagem base, portanto não precisamos nos preocupar.

# /////////// Mais robusto ///////////

# FROM nginx:1.21.3-alpine AS primeiro-estagio
# WORKDIR /site

# COPY config.toml config.toml
# COPY index.html /site/layouts/index.html
# COPY _index.md /site/content/_index.md

# RUN apk add hugo
# RUN hugo --minify --gc
# RUN mv /site/public/* /usr/share/nginx/html

# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# FROM nginx:1.21.3-alpine AS primeiro-estagio

# O FROM já é nosso velho conhecido, mas agora temos um prefixo: AS;
# Considere que durante o build podemos estar em estágios diferentes, e neste caso nós acabamos de nomear o estágio atual para primeiro-estagio;
# Dar nome aos estágios será útil para nós mais adiante, porém neste caso não tem efeito algum.
# WORKDIR /site

# A palavra reservada WORKDIR indica para o Docker qual é a pasta atual de trabalho dentro da imagem;
# Ou seja, nas próximas ações deste build e também quando essa imagem for executada como um container, estaremos no caminho especificado pelo WORKDIR.
# Três linhas com COPY

# Aqui copiamos os três arquivos no formato de pastas que o Hugo espera que estes arquivos estejam;
# Não temos nenhuma novidade no uso do COPY aqui.
# Três linhas com RUN

# A palavra reservada RUN indica que o comando à frente deve ser executado imediatamente, durante o processo de build. Logo:
# A primeira linha com RUN instala o ferramenta Hugo na nossa imagem Docker;
# A segunda linha executa o comando hugo –minify –gc para gerar as páginas finais em HTML, baseados nos arquivos de templates (index.html) e conteúdos (_index.md);
# A terceira linha executa o comando mv para mover as páginas resultantes do Hugo para o caminho onde o nginx espera que tenha páginas HTML para serem servidas.
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# A palavra reservada ENTRYPOINT indica para o Docker qual comando deve ser executado ao iniciar o container.
# ⚠️Importante: você pode ter percebido que a função do ENTRYPOINT parece ser a mesma que o CMD que estávamos usando anteriormente 🤔. Essa dúvida é comum e em breve vamos explicar a diferença de uso entre a função do ENTRYPOINT e o CMD.

# /////////// Saparando por estagios ///////////

# Primeiro Estágio
FROM alpine:3.14 AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21.3-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]