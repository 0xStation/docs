# ERC20Rails
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/cores/ERC20/ERC20Rails.sol)

**Inherits:**
[Rails](/src/Rails.sol/abstract.Rails.md), [Ownable](/src/access/ownable/Ownable.sol/abstract.Ownable.md), [Initializable](/src/lib/initializable/Initializable.sol/abstract.Initializable.md), [TokenMetadata](/src/cores/TokenMetadata/TokenMetadata.sol/abstract.TokenMetadata.md), [ERC20](/src/cores/ERC20/ERC20.sol/abstract.ERC20.md), [IERC20Rails](/src/cores/ERC20/interface/IERC20Rails.sol/interface.IERC20Rails.md)

This contract implements the Rails pattern to provide enhanced functionality for ERC20 tokens.


## Functions
### constructor

Declaring this contract `Initializable()` invokes `_disableInitializers()`,
in order to preemptively mitigate proxy privilege escalation attack vectors


```solidity
constructor() Initializable;
```

### owner

*Owner address is implemented using the `OwnableInternal` contract's function*


```solidity
function owner() public view override(Access, OwnableInternal) returns (address);
```

### initialize

Cannot call initialize within a proxy constructor, only post-deployment in a factory.

*Initialize the ERC20Rails contract with the given owner, name, symbol, and initialization data.*


```solidity
function initialize(address owner_, string calldata name_, string calldata symbol_, bytes calldata initData)
    external
    initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner_`|`address`|The initial owner of the contract.|
|`name_`|`string`|The name of the ERC20 token.|
|`symbol_`|`string`|The symbol of the ERC20 token.|
|`initData`|`bytes`|The initialization data.|


### name

*if called within a constructor, self-delegatecall will not work because this address does not yet have
bytecode implementing the init functions -> revert here with nicer error message*

*Function to return the name of a token implementation*


```solidity
function name() public view override(IERC20, TokenMetadataInternal) returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|_ The returned ERC20 name string|


### symbol

*Function to return the symbol of a token implementation*


```solidity
function symbol() public view override(IERC20, TokenMetadataInternal) returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|_ The returned ERC20 symbol string|


### contractURI

Uses extended contract URI logic from the `ContractURIExtension` contract

*Returns the contract URI for this ERC20 token.*


```solidity
function contractURI() public view override returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|_ The returned contractURI string|


### mintTo

*Function to mint ERC20Rails tokens to a recipient*


```solidity
function mintTo(address recipient, uint256 amount) external onlyPermission(Operations.MINT) returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|The address of the recipient to receive the minted tokens.|
|`amount`|`uint256`|The amount of tokens to mint and transfer to the recipient.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|_ Boolean indicating whether the minting and transfer were successful.|


### burnFrom

*Rework allowance to also allow permissioned users burn unconditionally*


```solidity
function burnFrom(address from, uint256 amount) external returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|The address from which the tokens will be burned.|
|`amount`|`uint256`|The amount of tokens to burn from the sender's balance.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|_ Boolean indicating whether the burning was successful.|


### _beforeTokenTransfer

*Hook called before token transfers. Calls into the given guard.
Provides one of three token operations and its accompanying data to the guard.*


```solidity
function _beforeTokenTransfer(address from, address to, uint256 amount)
    internal
    view
    override
    returns (address guard, bytes memory beforeCheckData);
```

### _afterTokenTransfer

*Hook called after token transfers. Calls into the given guard.*


```solidity
function _afterTokenTransfer(address guard, bytes memory checkBeforeData) internal view override;
```

### _checkCanUpdatePermissions

*Restrict Permissions write access to the `Operations.PERMISSIONS` permission*


```solidity
function _checkCanUpdatePermissions() internal view override;
```

### _checkCanUpdateGuards

*Restrict Guards write access to the `Operations.GUARDS` permission*


```solidity
function _checkCanUpdateGuards() internal view override;
```

### _checkCanExecuteCall

*Restrict calls via Execute to the `Operations.EXECUTE` permission*


```solidity
function _checkCanExecuteCall() internal view override;
```

### _checkCanUpdateInterfaces

*Restrict ERC-165 write access to the `Operations.INTERFACE` permission*


```solidity
function _checkCanUpdateInterfaces() internal view override;
```

### _checkCanUpdateTokenMetadata

*Restrict TokenMetadata write access to the `Operations.METADATA` permission*


```solidity
function _checkCanUpdateTokenMetadata() internal view override;
```

### _checkCanUpdateExtensions

*Only the `owner` possesses Extensions write access*


```solidity
function _checkCanUpdateExtensions() internal view override;
```

### _authorizeUpgrade

*Only the `owner` possesses UUPS upgrade rights*


```solidity
function _authorizeUpgrade(address) internal view override;
```

