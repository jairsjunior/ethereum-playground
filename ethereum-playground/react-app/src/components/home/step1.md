## Workshop SmartContracts TDC 2018

Olá, este workshop apresentará os passos iniciais de um nó local da blockchain da Ethereum.

## Primeiros Passos

O nó local da Ethereum que está sendo executado no container **node-geth-mining** já criou a conta inicial do nó e iniciou o processo de mineração de moeda. Por padrão o resultado da mineração vai para a primeira conta no nó sendo executado. 
Para verificar as contas existentes em nosso nó utilizamos o comando
```js
eth.accounts
```
Para verificar o saldo de uma conta utilizamos o comando *eth.getBalance(hashDaConta)* conforme o exemplo abaixo
```js
eth.getBalance(eth.accounts[0])
```
O saldo é apresentado na menor unidade da moeda, também conhecida como Wei, todas as unidades são uma homenagem a algum entusiasta ou grande contribuidor do cenário de criptomoedas:
1 wei = **0.000000000000000001 Ether.** 
O wei é o análogo do Satoshi a menor fração de 1 Bitcoin.

Para visualizar o saldo em Ether, podemos utilizar o comando
```js
web3.fromWei(eth.getBalance(eth.accounts[0]),"ether")
```