#!/bin/sh
/usr/ethereum/geth --datadir "/usr/ethereum/data-private" init "/usr/ethereum/genesis.json"
/usr/ethereum/geth --datadir "/usr/ethereum/data-private" account new --password /usr/ethereum/passwd
#/usr/ethereum/geth --datadir "/usr/ethereum/data-private" --rpc --rpcaddr "0.0.0.0" --rpccorsdomain "*" --etherbase 0 --mine --minerthreads=1
/usr/ethereum/geth --datadir "/usr/ethereum/data-private" --rpc --rpcapi web3,personal,eth,network,db --rpcaddr "0.0.0.0" --rpccorsdomain "*" --rpcvhosts "*" --ws --wsaddr "0.0.0.0" --wsorigins "*" --etherbase 0 --mine --minerthreads=1