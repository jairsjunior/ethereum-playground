### Criando um Contrato

Para a criação de contratos iremos utilizar a linguagem Solidity. Para conhecer mais sobre ela acesse https://solidity.readthedocs.io. Em nosso primeiro contrato, utilizaremos o seguinte codigo:

```js
pragma solidity ^0.4.18;

contract Register {
    address public owner;
    string private info;

    function register() public {
        owner = msg.sender;
    }
    
    function setInfo(string _info) public {
        info = _info;
    }
    
    function getInfo() public view returns (string infostring) {
        return info;
    }
}
```
Para compilar os contratos, você pode utilizar compilador online disponível em https://remix.ethereum.org. Após compilar você deve clicar no botão *Details* e copiar o código disponível com o título *WEB3DEPLOY*

### Registrando o contrato

Para registrar o contrato em nossa blockchain, utilizaremos os comandos abaixo. Lembrando que a conta 0 deve estar desbloqueada. Para instruções de como desbloquear a conta retorne ao passo 2.

```js
var registerContract = web3.eth.contract([{\\"constant\":false,\"inputs\":[],\"name\":\"register\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getInfo\",\"outputs\":[{\"name\":\"infostring\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_info\",\"type\":\"string\"}],\"name\":\"setInfo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]);
```

```js
var register = registerContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b506103c2806100206000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631aa3a008146100675780635a9b0b891461007e5780638da5cb5b1461010e578063937f6e7714610165575b600080fd5b34801561007357600080fd5b5061007c6101ce565b005b34801561008a57600080fd5b50610093610210565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100d35780820151818401526020810190506100b8565b50505050905090810190601f1680156101005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561011a57600080fd5b506101236102b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017157600080fd5b506101cc600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506102d7565b005b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102a85780601f1061027d576101008083540402835291602001916102a8565b820191906000526020600020905b81548152906001019060200180831161028b57829003601f168201915b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600190805190602001906102ed9291906102f1565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061033257805160ff1916838001178555610360565b82800160010185558215610360579182015b8281111561035f578251825591602001919060010190610344565b5b50905061036d9190610371565b5090565b61039391905b8082111561038f576000816000905550600101610377565b5090565b905600a165627a7a7230582066e16878bb2c2f7be122612a0d6e587eeb47f1897d9cf1e819a21d586c3a0f220029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
```

Após a execução das instruções é importante coletar as seguintes informações, número do contrato e sua abi.
Para recuperar o número do contrato
```js
register.address
```

Para recuperar a abi
```js
register.abi
```

### Interagindo com o Contrato

Com o contrato já instanciado, podemos chamar os métodos que foram criados (getInfo e setInfo).
Para recuperar o valor que está no contrato:
```js
register.getInfo()
```

Para setar um valor no contrato utilizamos o método setInfo.Passamos como parâmetro o valor que queremos incluir no contrato e um objeto com a conta e o valor de gas para débito. O retorno será o hash da transação. 
Para consultar a execução da transação podemos utilizar o comando que vimos no passo 2.
```js
register.setInfo(\"-->Valor<--\", { from:eth.accounts[0], gas:1000000 })
```

Após a execução da transação podemos verificar o valor constante no contrato:
```js
register.getInfo()
```

### Instanciando um contrato já existente

Para instanciar um contrato que já está registrado em nossa blockchain, necessitamos do endereço do contrato e sua abi. 

```js
var baseContract = eth.contract(abi); 
```
```js
var register= baseContract.at(numeroDoContrato);
```

Após a execução, podemos interagir com o contrato conforme a seção acima *Interagindo com o Contrato*

