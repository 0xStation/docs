# IAggregator
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/lib/ERC4337/interface/IEntryPoint.sol)

GroupOS does not make use of BLS aggregated signatures
This interface is required only for compiling the spec


## Functions
### validateUserOpSignature


```solidity
function validateUserOpSignature(UserOperation calldata userOp) external view returns (bytes memory sigForUserOp);
```

### aggregateSignatures


```solidity
function aggregateSignatures(UserOperation[] calldata userOps)
    external
    view
    returns (bytes memory aggregatesSignature);
```

### validateSignatures


```solidity
function validateSignatures(UserOperation[] calldata userOps, bytes calldata signature) external view;
```

