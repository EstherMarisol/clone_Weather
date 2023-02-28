import { Router } from "express";
import { deleteRoleApp, getAllRolesApp, getRoleByCodeApp, saveRoleApp, updateRoleApp } from "../application/role.app";

const router = Router();


// url localhost:4000/role/
router.post('/', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const data = req.body;

  try {
    let dataToSend = await saveRoleApp(reqUser, data);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/role/2
router.put('/:code', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const data = req.body;
  const code = req.params.code;

  try {
    let dataToSend = await updateRoleApp(reqUser, code, data)
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/role/2
router.delete('/:code', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const code = req.params.code;
  try {
    let dataToSend = await deleteRoleApp(reqUser, code)
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/role/2
router.get('/:code', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const code = req.params.code;
  try {
    let dataToSend = await getRoleByCodeApp(reqUser, code);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

// url localhost:4000/role/?page=0&limit=20
router.get('/', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  //const code = req.params.code;
  const page = req.query.page || 0;
  const limit = req.query.limit || 20;
  try {
    let dataToSend = await getAllRolesApp(reqUser, page, limit);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

export default router;