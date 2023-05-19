// SPDX-License-Identifier: MIT
/*
 _______   __                      __              __       __
/       \ /  |                    /  |            /  |  _  /  |
$$$$$$$  |$$ |  ______    _______ $$ |   __       $$ | / \ $$ |  ______   __     __  ______
$$ |__$$ |$$ | /      \  /       |$$ |  /  |      $$ |/$  \$$ | /      \ /  \   /  |/      \
$$    $$< $$ |/$$$$$$  |/$$$$$$$/ $$ |_/$$/       $$ /$$$  $$ | $$$$$$  |$$  \ /$$//$$$$$$  |
$$$$$$$  |$$ |$$ |  $$ |$$ |      $$   $$<        $$ $$/$$ $$ | /    $$ | $$  /$$/ $$    $$ |
$$ |__$$ |$$ |$$ \__$$ |$$ \_____ $$$$$$  \       $$$$/  $$$$ |/$$$$$$$ |  $$ $$/  $$$$$$$$/
$$    $$/ $$ |$$    $$/ $$       |$$ | $$  |      $$$/    $$$ |$$    $$ |   $$$/   $$       |
$$$$$$$/  $$/  $$$$$$/   $$$$$$$/ $$/   $$/       $$/      $$/  $$$$$$$/     $/     $$$$$$$/

*/
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./YoursBenefitNFT.sol";

interface BenefitNFTRouter {
    function initialize(
        address _owner,
        string memory _name,
        string memory _symbol,
        string memory _uri,
        string memory _benefitURI,
        uint128[] memory _defaultBenefit
    ) external;

    function setLock(uint256[] memory _ids, uint8 _lock) external;
}

interface IntegratedNFTRouter {
    function combineMintWithUri(
        address _to,
        string memory _uri,
        address[] memory _nftAddresses,
        uint256[] memory _nftIds
    ) external returns (uint256);

    function burn(address _addr, uint256 _id, uint256 _amount) external;
    function integratedNFT(uint256 _id, uint256 count) external view returns (address nftAddress, uint256 id);
    function getLength(uint256 _id) external view returns (uint256);
}

contract YoursFactory {
    event DeployNFT(address _newClone, address _owner);
    event MintIntegratedNFT(uint256);
    event test(address nftAddress, uint256 id);

    struct NFTInfo {
        address creator;
        address nftAddress;
    }

    address public owner;

    function isOwner() private view {
        require(owner == msg.sender, "Not Owner");
    }

    address public baseContract;
    address public interNFTFactory;
    uint8 private paused; // 0 == ing, 1 == paused

    uint256 private _id;
    mapping(uint256 => NFTInfo) public nfts;

    constructor(address _base) {
        owner = msg.sender;
        baseContract = _base;
        _id = 0;
    }

    function deployNFT(
        string memory _name,
        string memory _symbol,
        string memory _uri,
        string memory _benefitURI,
        uint128[] memory _defaultBenefit
    ) external {
        require(paused == 0, "Contract is paused");
        address identicalChild = Clones.clone(baseContract);
        nfts[++_id] = NFTInfo(msg.sender, identicalChild);
        BenefitNFTRouter(identicalChild).initialize(
            msg.sender,
            _name,
            _symbol,
            _uri,
            _benefitURI,
            _defaultBenefit
        );
        emit DeployNFT(identicalChild, msg.sender);
    }

    function integrateNFTs(
        address _to,
        string memory _uri,
        address[] memory _nftAddresses,
        uint256[] memory _nftIds
    ) external {
        isOwner();
        uint256[] memory id = new uint256[](1);
        for (uint256 i = 0; i < _nftAddresses.length; i++) {
            id[0] = _nftIds[i];
            BenefitNFTRouter(_nftAddresses[i]).setLock(id, 1);
        }
        uint256 newId = IntegratedNFTRouter(interNFTFactory).combineMintWithUri(
            _to,
            _uri,
            _nftAddresses,
            _nftIds
        );

        emit MintIntegratedNFT(newId);
    }

    function burnIntegratedNFT(address _addr, uint256 _Id) external {
        isOwner();
        uint256 len = IntegratedNFTRouter(interNFTFactory).getLength(_id); // 정보 불러와서 언락하기 
        uint256[] memory ID = new uint256[](1);
        for(uint256 i = 0; i < len; i++) {
            (address addr, uint256 id) = IntegratedNFTRouter(interNFTFactory).integratedNFT(_Id, 0);
            ID[0] = id;
            BenefitNFTRouter(addr).setLock(ID, 0);
        }

        IntegratedNFTRouter(interNFTFactory).burn(_addr, _Id, 1); // 소각 하기 
    }

    function setOwner(address _newAdd) external {
        isOwner();
        owner = _newAdd;
    }

    function setBase(address _newAdd) external {
        isOwner();
        baseContract = _newAdd;
    }

    function setIntegratedNFT(address _newAdd) external {
        isOwner();
        interNFTFactory = _newAdd;
    }

    function setPaused() external {
        isOwner();
        paused = paused == 0 ? 1 : 0;
    }

    function isPaused() external view returns (uint256) {
        return paused;
    }
}
