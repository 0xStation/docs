# IGuards
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/guard/interface/IGuards.sol)

**Inherits:**
[IGuardsInternal](/src/guard/interface/IGuards.sol/interface.IGuardsInternal.md)

Since the Solidity compiler ignores inherited functions, function declarations are made
at the top level so their selectors are properly XORed into a nonzero `interfaceId`


## Functions
### checkGuardBefore

*Perform checks before executing a specific operation and return guard information.*


```solidity
function checkGuardBefore(bytes8 operation, bytes calldata data)
    external
    view
    returns (address guard, bytes memory checkBeforeData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operation`|`bytes8`|The operation identifier to check.|
|`data`|`bytes`|Additional data associated with the operation.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`guard`|`address`|The address of the guard contract responsible for the operation.|
|`checkBeforeData`|`bytes`|Additional data from the guard contract's checkBefore function.|


### checkGuardAfter

*Perform checks after executing an operation.*


```solidity
function checkGuardAfter(address guard, bytes calldata checkBeforeData, bytes calldata executionData) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`guard`|`address`|The address of the guard contract responsible for the operation.|
|`checkBeforeData`|`bytes`|Additional data obtained from the guard's checkBefore function.|
|`executionData`|`bytes`|The execution data associated with the operation.|


### guardOf

*Get the guard contract address responsible for a specific operation.*


```solidity
function guardOf(bytes8 operation) external view returns (address implementation);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operation`|`bytes8`|The operation identifier.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`implementation`|`address`|The address of the guard contract for the operation.|


### getAllGuards

*Get an array of all registered guard contracts.*


```solidity
function getAllGuards() external view returns (Guard[] memory Guards);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`Guards`|`Guard[]`|An array containing information about all registered guard contracts.|


### setGuard

*Set a guard contract for a specific operation.*


```solidity
function setGuard(bytes8 operation, address implementation) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operation`|`bytes8`|The operation identifier for which to set the guard contract.|
|`implementation`|`address`|The address of the guard contract to set.|


### removeGuard

*Remove the guard contract for a specific operation.*


```solidity
function removeGuard(bytes8 operation) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operation`|`bytes8`|The operation identifier for which to remove the guard contract.|


