# ERC721
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/cores/ERC721/ERC721.sol)

**Inherits:**
[ERC721Internal](/src/cores/ERC721/ERC721Internal.sol/abstract.ERC721Internal.md), [IERC721External](/src/cores/ERC721/interface/IERC721.sol/interface.IERC721External.md)


## Functions
### name

*require override*


```solidity
function name() public view virtual returns (string memory);
```

### symbol

*require override*


```solidity
function symbol() public view virtual returns (string memory);
```

### tokenURI

*require override*


```solidity
function tokenURI(uint256 tokenId) public view virtual returns (string memory);
```

### supportsInterface


```solidity
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool);
```

### approve


```solidity
function approve(address to, uint256 tokenId) public virtual;
```

### setApprovalForAll


```solidity
function setApprovalForAll(address operator, bool approved) public virtual;
```

### transferFrom


```solidity
function transferFrom(address from, address to, uint256 tokenId) public;
```

### safeTransferFrom


```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) public;
```

### safeTransferFrom


```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public;
```

