import { Router } from "express";
import { saveRoleApp } from "../application/role.app";

const router = Router();

router.get('/save', async (req: any, res, next) => {
  const reqUser = req.reqUser;
  const data = req.body;

  try {
    let dataToSend = await saveRoleApp(reqUser, data);
    res.send(dataToSend);
  } catch (error) {
    return next(error)
  }
});
export default router;