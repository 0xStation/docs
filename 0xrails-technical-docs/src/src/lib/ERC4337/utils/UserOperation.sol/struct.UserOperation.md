# UserOperation
[Git Source](https://github.com/0xStation/0xrails/blob/491ae339f09853335dba9e897f46862d776d54b5/src/lib/ERC4337/utils/UserOperation.sol)


```solidity
struct UserOperation {
    address sender;
    uint256 nonce;
    bytes initCode;
    bytes callData;
    uint256 callGasLimit;
    uint256 verificationGasLimit;
    uint256 preVerificationGas;
    uint256 maxFeePerGas;
    uint256 maxPriorityFeePerGas;
    bytes paymasterAndData;
    bytes signature;
}
```

