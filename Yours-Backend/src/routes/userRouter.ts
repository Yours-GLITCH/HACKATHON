import { Router } from 'express';
import auth from '../middlewares/auth';
import { userController } from '../controllers';
import upload from '../middlewares/upload';
import { body, query } from 'express-validator';
import errorValidator from '../middlewares/error/errorValidator';

const router: Router = Router();

router.get('/profile', auth, userController.getUserInfo);
router.patch(
  '/profile/photo',
  upload.single('image'),
  auth,
  userController.updateProfilePhoto,
);
router.patch(
  '/profile/phone',
  [body('phoneNumber').notEmpty()],
  errorValidator,
  auth,
  userController.updateUserPhoneNumber,
);

router.patch(
  '/profile/email',
  [body('email').isEmail().notEmpty()],
  errorValidator,
  auth,
  userController.updateUserEmail,
);

router.patch(
  '/profile/nickname',
  [body('nickname').notEmpty()],
  errorValidator,
  auth,
  userController.updateNickName,
);

router.post(
  '/email/send',
  [body('email').isEmail().notEmpty()],
  errorValidator,
  userController.sendEmailForAuth,
);

router.get('/quest', auth, userController.getQuestInfo);

router.patch('/quest', auth, userController.updateQuestInfo);

router.patch(
  '/secret',
  [body('secret').isString().notEmpty()],
  errorValidator,
  auth,
  userController.updateSecret,
);
router.get('/wallet', auth, userController.getWalletInfo);

router.get(
  '/yours',
  [query('address').isString().notEmpty()],
  errorValidator,
  userController.checkYoursWallet,
);
router.get('/aaWallet', errorValidator, auth, userController.createWalletOp);
router.post(
  '/aaWallet',
  [body('createOpWithSign').notEmpty()],
  auth,
  userController.handleWalletOp,
);

export default router;
