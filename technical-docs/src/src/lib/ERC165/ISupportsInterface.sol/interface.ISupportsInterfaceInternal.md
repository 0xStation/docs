# ISupportsInterfaceInternal
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/lib/ERC165/ISupportsInterface.sol)


## Events
### InterfaceAdded

```solidity
event InterfaceAdded(bytes4 indexed interfaceId);
```

### InterfaceRemoved

```solidity
event InterfaceRemoved(bytes4 indexed interfaceId);
```

## Errors
### InterfaceAlreadyAdded

```solidity
error InterfaceAlreadyAdded(bytes4 interfaceId);
```

### InterfaceNotAdded

```solidity
error InterfaceNotAdded(bytes4 interfaceId);
```

