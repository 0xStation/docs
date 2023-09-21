# Storage
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/lib/ERC7201/Storage.sol)


## State Variables
### SLOT

```solidity
bytes32 internal constant SLOT = keccak256(abi.encode(uint256(keccak256("namespace")) - 1));
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
    bool b;
}
```

