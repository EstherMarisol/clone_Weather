import { Router } from "express";

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    //let reqUser = req.reqUser;
    let dataToSend = 'hola mundo desde mi router user'// await UserSaveAccount(reqUser);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
})

/**
 * get deatil user
 */
router.get('/:idUser', async (req, res, next) => {
  try {
    //let reqUser = req.reqUser;
    let idUser = req.params.idUser;
    let dataToSend = { idUser: idUser }// await UserSaveAccount(reqUser);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
})


export default router;