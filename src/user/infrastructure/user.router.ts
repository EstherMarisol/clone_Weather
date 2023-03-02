/**import { Router } from "express";

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
/** 
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


export default router;*/ 

import { Router } from "express";
import { deleteUserApp, getAllUsersApp, getUserByCodeApp, saveUserApp, updateUserApp } from "../application/user.app";

const router = Router();


// url localhost:4000/user/
router.post('/', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const data = req.body;

  try {
    let dataToSend = await saveUserApp(reqUser, data);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/user/2
router.put('/:code', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const data = req.body;
  const code = req.params.code;

  try {
    let dataToSend = await updateUserApp(reqUser, code, data)
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/user/2
router.delete('/:code', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const code = req.params.code;
  try {
    let dataToSend = await deleteUserApp(reqUser, code)
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/user/2
router.get('/:code', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const code = req.params.code;
  try {
    let dataToSend = await getUserByCodeApp(reqUser, code);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/user/?page=0&limit=20
router.get('/', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  //const code = req.params.code;
  const page = req.query.page || 0;
  const limit = req.query.limit || 20;
  try {
    let dataToSend = await getAllUsersApp(reqUser, page, limit);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

export default router;