### Jest

Confiança: O sistema é resistente a falhas durante a execução, isto é, não entra em loop ou não interrompe a execução por falta de recursos.

Funcionalidade: O sistema se comporta conforme o que foi definido em seus requisitos.

Performance: O sistema tem um tempo de resposta adequado e aceitável, mesmo quando submetido a um volume de processamento semelhante ao de situações reais ou de pico de uso.


##### Programação orientada a testes
Teste falha: Escreva um teste que cubra a função que se pretende implementar antes mesmo de implementá-la. Esse teste irá falhar – afinal, sua função ainda não foi declarada. Você pode começar do teste mais elementar possível para esse cenário, como verificar se a função que irá criar existe.

Teste passa: Implemente apenas o necessário para que o teste passe. No exemplo anterior, você só precisaria declarar a função para passar o teste.

Refatorar: Refatore o código para que ele esteja bem escrito e seja de fácil compreensão. A ideia central nessa etapa é ter um teste já implementado que irá falhar caso algo quebre quando você refatorar o código.
