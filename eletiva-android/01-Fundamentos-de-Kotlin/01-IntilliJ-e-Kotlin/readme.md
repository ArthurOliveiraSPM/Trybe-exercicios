# Oque será trabalhado

Configurar o Java Development Kit versão 17 (JDK 17);
Instalar o IntelliJ IDEA Community Edition;
Identificar a estrutura básica de um programa Kotlin;
Explicar os tipos de variáveis do Kotlin;
Implementar funções no Kotlin;
Utilizar os mecanismos de leitura e escrita do Kotlin.

## OpenJDK 17

Para instalar OpenJDK 17
-> sudo apt install openjdk-17-jre openjdk-17-jdk

## IntelliJ

Para instalar os pacotes essenciais para o IntelliJ IDEAD CE
-> sudo apt install software-properties-common apt-transport-https curl -y

Para Adicionar PPA na lista de repositórios - para instalação, remover os <> do link
-> curl -s <https://s3.eu-central-1.amazonaws.com/jetbrains-ppa/0xA6E8698A.pub.asc> | gpg --dearmor | sudo tee /usr/share/keyrings/jetbrains-ppa-archive-keyring.gpg > /dev/null
se não aparecer nada significa que foi sucedido.

Para instalar o IntelliJ IDEA CE
-> sudo snap install intellij-idea-community --classic
dessa maneira está instalando a versão calssica, para instalar a mais recente possivel entre no site deles <https://www.jetbrains.com/help/idea/installation-guide.html#i2orfpc_294>
