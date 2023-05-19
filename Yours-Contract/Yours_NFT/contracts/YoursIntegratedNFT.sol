// SPDX-License-Identifier: MIT

import "./ERC1155.sol";

interface BenefitNFTRouter {
    function setLock(uint256[] memory _ids, uint8 _lock) external;
}

contract YoursIntegratedNFT is ERC1155 {
    struct NFTInfo {
        address nftAddress;
        uint256 id;
    }

    address public owner;
    address public factory;

    uint256 public count;

    string public name;
    string public symbol;

    mapping(uint256 => string) public tokenURI;
    mapping(uint256 => NFTInfo[]) public integratedNFT;

    function isOwner() private view {
        require(msg.sender == owner, "OnlyOwner");
    }

    function isFactory() private view {
        require(msg.sender == factory, "OnlyFactory");
    }

    constructor(address _factory) {
        owner = msg.sender;
        factory = _factory;
		count = 0;
    }

    // Action
    // External
    function combineMintWithUri(
        address _to,
        string memory _uri,
		address[] memory _nftAddresses,
        uint256[] memory _nftIds
    ) external 
    returns (uint256){
        isFactory();
		uint256 id = ++count;
        _mint(_to, id, "");
        _setURI(id, _uri);
		for (uint i = 0; i < _nftAddresses.length; i++) {
            integratedNFT[id].push(NFTInfo(_nftAddresses[i], _nftIds[i]));
        }

        return id;
    }

    function burn(address _user, uint256 _id, uint256 _amount) external {
        isFactory();
        delete tokenURI[_id];
        delete integratedNFT[_id];
        _burn(_user, _id, _amount);
    }

    // Utils
    function _setURI(uint256 _id, string memory _uri) internal {
        tokenURI[_id] = _uri;
        emit URI(_uri, _id);
    }

    // View
    function totalSupply() public view returns (uint256) {
        return count;
    }

    function uri(uint256 _id) public view override returns (string memory) {
        return tokenURI[_id];
    }

    function getLength(uint256 _id) external view returns (uint256) {
        return integratedNFT[_id].length;
    }
}
