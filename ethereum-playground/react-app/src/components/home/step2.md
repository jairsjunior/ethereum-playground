### Criando uma Conta

Para a criação de contas no nó, é necessário utilizar o comando *personal.newAccount(password)*,onde o parametro password é passado como texto. A função retorna como resultado o endereço da conta.
```js
personal.newAccount(\"teste\")
```

### Desbloqueando uma Conta

Para fazer operações com uma conta, ela necessita estar desbloqueada. Para efetuar o desbloqueio de uma conta utilizamos o comando *personal.unlockAccount(enderecoDaConta, passwordDaConta, 0)*. A função retorna como resultado true caso a operação seja realizada com sucesso.
```js
personal.unlockAccount(eth.accounts[0], \"12345678\", 0)
```

### Transferências entre Contas

Para realizar transferências de valor entre as contas utilizamos o comando *eth.sendTransaction({from:enderecoContaOrigem, to:enderecoContaDestino, value: web3.toWei(valorEmEther, \"ether\")})*. 
A função retorna como resultado o hash da transação. Se o resultado for {} a transação não foi
realizada. Um dos erros mais comuns é a conta de origem não ter sido desbloqueada conforme o cimando acima.

```js
web3.fromWei(eth.getBalance(eth.accounts[1]),\"ether\")
eth.sendTransaction({from:eth.accounts[0], to:eth.accounts[1], value: web3.toWei(10, \"ether\")})
web3.fromWei(eth.getBalance(eth.accounts[1]),\"ether\")
```

### Verificação de Transações

Para realizar a verificação de uma transação utilizamos o comando *eth.getTransaction(hashDaTransacao)*. A função retorna como resultado **se a transação foi validada ou não**.
```js
eth.getTransaction(\"hash Da Transação de Transferencia anterior\")
```