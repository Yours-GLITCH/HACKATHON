import { ethers } from 'ethers';
import { Request, Response, NextFunction } from 'express';
import {
  etherProvider,
  mintEtherNFT,
} from '../contract/Ethereum/etherContract';
import { responseMessage, statusCode } from '../modules/constants';
import { fail, success } from '../modules/constants/util';
import { adminService, nftService, userService } from '../services';
import etherBenefitData from '../contract/Ethereum/YoursBenefitNFT.json';
import polygonBenefitData from '../contract/Polygon/YoursBenefitNFT.json';
import klaytnBenefitData from '../contract/Klaytn/YoursBenefitNFT.json';
import auroraBenefitData from '../contract/Aurora/YoursBenefitNFT.json';
import {
  mintPolygonNFT,
  polygonProvider,
} from '../contract/Polygon/polygonContract';
import {
  klaytnProvider,
  mintKlaytnNFT,
} from '../contract/Klaytn/KlaytnContract';
import { messageSender } from '../modules/notification';
import { mintAptosNFT } from '../contract/Aptos/aptosContract';
import {
  auroraProvider,
  mintAuroraNFT,
} from '../contract/Aurora/AuroraContract';

const getRequestUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.body.id;
    const { nftId } = req.params;

    const data = await adminService.getRequestUser(userId, +nftId);

    return res
      .status(statusCode.OK)
      .send(
        success(statusCode.OK, responseMessage.READ_AUTH_PEOPLE_SUCCESS, data),
      );
  } catch (error) {
    next(error);
  }
};

const approveOrRejectNft = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { tableId, type, reason } = req.body;
  const userId = req.body.id;
  try {
    if (type) {
      const approveInfo = await adminService.approveNft(+tableId);
      const getNftInfo = await nftService.getNftInfo(+approveInfo.nftId);
      //승인 메시지 전송
      const messageInfo = await nftService.getUserAndNftInfo(
        approveInfo.userId,
        +getNftInfo.id,
        'NFT_APPLY_APPROVE',
      );
      switch (getNftInfo?.chainType) {
        case 'Ethereum': {
          //* 유저의 지갑 가져오기
          const walletAddress = await nftService.getNftWalletAddress(
            +approveInfo.userId,
            getNftInfo?.chainType,
          );

          //* 민팅
          const nftContract = new ethers.Contract(
            getNftInfo.nftAddress as string,
            etherBenefitData.abi,
            etherProvider,
          );
          const mint = await mintEtherNFT(nftContract, walletAddress as string);
          //mint Id 저장
          await nftService.saveMintId(
            +approveInfo.userId,
            +approveInfo.nftId,
            mint.mintId,
          );

          await messageSender(messageInfo);
          return res
            .status(statusCode.OK)
            .send(
              success(
                statusCode.OK,
                responseMessage.APPROVE_NFT_SUCCESS,
                approveInfo,
              ),
            );
        }
        case 'Polygon': {
          //* 유저의 지갑 가져오기
          const walletAddress = await nftService.getNftWalletAddress(
            +approveInfo.userId,
            getNftInfo?.chainType,
          );

          const nftContract = new ethers.Contract(
            getNftInfo.nftAddress as string,
            polygonBenefitData.abi,
            polygonProvider,
          );
          const mint = await mintPolygonNFT(
            nftContract,
            walletAddress as string,
          );
          await nftService.saveMintId(
            +approveInfo.userId,
            +approveInfo.nftId,
            mint.mintId,
          );

          await messageSender(messageInfo);
          return res
            .status(statusCode.OK)
            .send(
              success(
                statusCode.OK,
                responseMessage.APPROVE_NFT_SUCCESS,
                approveInfo,
              ),
            );
        }
        case 'Klaytn': {
          //* 유저의 지갑 가져오기
          const walletAddress = await nftService.getNftWalletAddress(
            +approveInfo.userId,
            getNftInfo?.chainType,
          );

          const nftContract = new ethers.Contract(
            getNftInfo.nftAddress as string,
            klaytnBenefitData.abi,
            klaytnProvider,
          );

          const mint = await mintKlaytnNFT(
            nftContract,
            walletAddress as string,
          );
          await nftService.saveMintId(
            +approveInfo.userId,
            +approveInfo.nftId,
            mint.mintId,
          );

          await messageSender(messageInfo);
          return res
            .status(statusCode.OK)
            .send(
              success(
                statusCode.OK,
                responseMessage.APPROVE_NFT_SUCCESS,
                approveInfo,
              ),
            );
        }
        case 'Aptos': {
          const mint = await mintAptosNFT(
            messageInfo.nftName!,
            messageInfo.name!,
          );
          await nftService.saveMintId(
            +approveInfo.userId,
            +approveInfo.nftId,
            +mint!.mintId,
          );
          await messageSender(messageInfo);
          return res
            .status(statusCode.OK)
            .send(
              success(
                statusCode.OK,
                responseMessage.APPROVE_NFT_SUCCESS,
                approveInfo,
              ),
            );
        }
        case 'Aurora': {
          //* 유저의 지갑 가져오기
          const walletAddress = await nftService.getNftWalletAddress(
            +approveInfo.userId,
            getNftInfo?.chainType,
          );

          //* 민팅
          const nftContract = new ethers.Contract(
            getNftInfo.nftAddress as string,
            auroraBenefitData.abi,
            auroraProvider,
          );
          const mint = await mintAuroraNFT(
            nftContract,
            walletAddress as string,
          );
          //mint Id 저장
          await nftService.saveMintId(
            +approveInfo.userId,
            +approveInfo.nftId,
            mint.mintId,
          );

          await messageSender(messageInfo);
          return res
            .status(statusCode.OK)
            .send(
              success(
                statusCode.OK,
                responseMessage.APPROVE_NFT_SUCCESS,
                approveInfo,
              ),
            );
        }
      }
    }
    if (!type) {
      const userIdAndNftId = await adminService.rejectNft(+tableId, reason);
      //거절 메시지 전송
      const messageInfo = await nftService.getUserAndNftInfo(
        +userIdAndNftId.userId,
        +userIdAndNftId.nftId,
        'NFT_APPLY_REFUSE',
      );
      messageInfo.rejectReason = reason;

      await messageSender(messageInfo);
      return res
        .status(statusCode.OK)
        .send(success(statusCode.OK, responseMessage.APPROVE_NFT_FAIL));
    }
    return res
      .status(statusCode.NOT_FOUND)
      .send(fail(statusCode.NOT_FOUND, responseMessage.NOT_FOUND));
  } catch (error) {
    next(error);
  }
};

const getAdminNftRewardList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { nftId } = req.params;
  try {
    const data = await adminService.getAdminNftRewardList(+nftId);
    return res
      .status(statusCode.OK)
      .send(
        success(
          statusCode.OK,
          responseMessage.READ_NFT_ADMIN_REWARD_INFO_SUCCESS,
          data,
        ),
      );
  } catch (error) {
    next(error);
  }
};

const getAdminNftRewardDetail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { rewardId } = req.params;
  try {
    const data = await adminService.getAdminNftRewardDetail(+rewardId);
    return res
      .status(statusCode.OK)
      .send(
        success(
          statusCode.OK,
          responseMessage.READ_NFT_ADMIN_REWARD_DETAIL_INFO_SUCCESS,
          data,
        ),
      );
  } catch (error) {
    next(error);
  }
};
export default {
  getRequestUser,
  approveOrRejectNft,
  getAdminNftRewardList,
  getAdminNftRewardDetail,
};
