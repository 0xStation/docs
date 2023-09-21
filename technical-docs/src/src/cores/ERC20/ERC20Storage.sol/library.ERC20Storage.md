# ERC20Storage
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/cores/ERC20/ERC20Storage.sol)


## State Variables
### SLOT

```solidity
bytes32 internal constant SLOT = keccak256(abi.encode(uint256(keccak256("0xrails.ERC20")) - 1));
```


## Functions
### layout


```solidity
function layout() internal pure returns (Layout storage l);
```

## Structs
### Layout

```solidity
struct Layout {
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowances;
    uint256 totalSupply;
}
```

