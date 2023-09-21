# SupportsInterface
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/lib/ERC165/SupportsInterface.sol)

**Inherits:**
[SupportsInterfaceInternal](/src/lib/ERC165/SupportsInterfaceInternal.sol/abstract.SupportsInterfaceInternal.md), [ISupportsInterfaceExternal](/src/lib/ERC165/ISupportsInterface.sol/interface.ISupportsInterfaceExternal.md)


## Functions
### supportsInterface

*Function to implement ERC-165 compliance*


```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`interfaceId`|`bytes4`|The interface identifier to check.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|_ Boolean indicating whether the contract supports the specified interface.|


### addInterface

*Function to add support for a specific interface.*


```solidity
function addInterface(bytes4 interfaceId) external virtual canUpdateInterfaces;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`interfaceId`|`bytes4`|The interface identifier to add support for.|


### removeInterface

*Function to remove support for a specific interface.*


```solidity
function removeInterface(bytes4 interfaceId) external virtual canUpdateInterfaces;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`interfaceId`|`bytes4`|The interface identifier to remove support for.|


### canUpdateInterfaces


```solidity
modifier canUpdateInterfaces();
```

### _checkCanUpdateInterfaces

Should revert upon failure.

*Function to check if caller possesses sufficient permission to set interfaces*


```solidity
function _checkCanUpdateInterfaces() internal virtual;
```

