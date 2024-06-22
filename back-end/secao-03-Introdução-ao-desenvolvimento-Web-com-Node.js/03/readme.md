# Conteudo do Dia

Assertion
Para de fato testar nossa função, precisamos chamá-la passando o input desejado e então validar se a resposta é aquela que esperamos. Essa validação é o que chamamos de assertion, “asserção” ou, em alguns casos, “afirmação”.

Sabia que existe um padrão de teste chamado de Triplo A, cuja estrutura de testes apresenta 3 seções distintas: Ajeitar, Atuar e Afirmar (AAA)?

1º A - Ajeitar (arrange): Criação de todo o código de configuração para levar o sistema ao cenário que o teste pretende simular.

2º A - Atuar (act): Execução dos testes em si.

3º A - Afirmar (assert): Verificação de que o valor recebido satisfaz a expectativa.

Chai
O chai é uma biblioteca de asserção que auxilia o desenvolvimento de testes com Node.js e que pode ser combinada com qualquer framework de testes JavaScript.

Contratos de APIs
O contrato define como a API deverá se comportar em um determinado cenário. Informações como Estrutura de Requisição, Método HTTP, Status Code, e Estrutura de Resposta são comumente utilizadas em contratos de API.

Mocha
O mocha é um framework de testes para JavaScript, isso significa que ele nos ajuda a arquitetar os nossos testes fornecendo a estrutura e interface para escrevermos e executarmos eles.

Sinon
O Sinon é uma ferramenta que auxilia na criação e utilização dos dublês, fornecendo funções para diversos tipos de Test Doubles.

Os dublês de teste são substitutos que sobrepõem dependências necessárias para se testar um sistema ou um comportamento.

Testes automatizados
De forma simplificada, nos testes automatizados escrevemos um script com a configuração das funções, pré-condições, casos de teste e resultados esperados. Ao ser executado, este script irá executar os testes, comparar os resultados obtidos com os resultados esperados gerar o relatório de teste.

O principal interesse nesse tipo de teste é permitir que tarefas repetitivas e demoradas não consuma o tempo das pessoas, permitindo melhor foco em tarefas de maior valor e que dependem da interpretação humana, como o teste exploratório.

Testes Manuais
Nos testes manuais, reexecutamos o código algumas vezes, buscando validar se o comportamento que queremos está sendo realizado corretamente e também alteramos os parâmetros de entrada para tentarmos garantir que tal funcionamento se mantenha mesmo com essas variações.

Tipos de teste
Levando em consideração o escopo e a interação dos testes, os tipos de teste mais comuns são:

Testes unitários: consideram um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos.

Testes de integração: presumem a junção de múltiplos escopos (que tecnicamente devem possuir, cada um, seus próprios testes) com interações entre eles.

Testes de Ponta-a-ponta: também chamados de Fim-a-fim (End-to-End; E2E), pressupõem um fluxo de interação completo com a aplicação, de uma ponta a outra. Esse teste é o mais completo, pois necessita que todos os demais testes tenham sido desenvolvidos.

Lembre-se que nenhum tipo de teste é mais importante que o outro, é a combinação entre eles que vai garantir a qualidade do seu código. 😉

TDD - Desenvolvimento Orientado a Testes
TDD (Test Driven Development), ou em bom português, Desenvolvimento Orientado a Testes, tem como ideia central começarmos a escrita do código tendo em mente quais cenários devemos cobrir e também como nosso código precisa estar estruturado para que possamos testá-lo. Ele pode ser empregado nos diferentes tipos de teste e resumindo em quatro passos sua implementação, teríamos:

1️⃣ Interpretação os requisitos: devemos pensar nos comportamentos que vamos implementar e na estrutura do código: se será uma função, um módulo, quais os inputs, os outputs, etc.

2️⃣ Início da escrita de testes: descrevemos quais cenários da nossa aplicação iremos verificar.

3️⃣ Asserções: escrevemos as respostas esperadas para cada cenário.

Perceba que antes mesmo de ter qualquer código, já vamos criar chamadas a ele, o que significa que nossos testes irão falhar. Não se preocupe, pois essa é exatamente a ideia nesse momento.

4️⃣ Implementação/Refatoração do código: feita logo após a criação dos testes.

A ideia é escrever os códigos pensando nos testes e, conforme vamos cobrindo os cenários, nossos testes que antes quebravam começam a passar.
