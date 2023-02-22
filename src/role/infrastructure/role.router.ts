import { Router } from "express";
import { getAllRolesApp, getRoleByCodeApp, saveRoleApp } from "../application/role.app";

const router = Router();

router.post('/save', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const data = req.body;

  try {
    let dataToSend = await saveRoleApp(reqUser, data);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});


router.get('/:code', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const data = req.body;
  const code = req.params.code;
  try {
    let dataToSend = await getRoleByCodeApp(reqUser, code);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});

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