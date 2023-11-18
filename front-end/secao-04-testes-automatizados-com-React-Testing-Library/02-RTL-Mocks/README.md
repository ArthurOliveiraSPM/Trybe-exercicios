# Assuntos tratados

Utilizar mock functions para simular funções e seus retornos;
Criar mocks de APIs utilizando fetch;
Testar inputs.

Como limpar as Mocks

- mock.mockClear()

Remove todas as informações armazenadas no mock.
Útil quando se deseja limpar os dados de uso de uma simulação entre dois expect.

- mock.mockReset()

Faz o que o mockClear() faz.
Remove qualquer retorno estipulado ou implementação.
Útil quando se deseja resetar uma simulação para seu estado inicial.

- mock.mockRestore()

Faz tudo que mockReset() faz.
Restaura a implementação original.
Útil para simular funções em certos casos de teste e restaurar a implementação original em outros.

https://content-assets.betrybe.com/prod/93255e46-aeed-4447-b1e1-76f6ebd073d6-mock%20cleaners.png

 