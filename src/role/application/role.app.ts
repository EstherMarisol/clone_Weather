import { saveRoleService } from "../domain/role.services";

export const saveRoleApp = async (reqUser: any, data: any) => {
  const roleToSave = {
    name: data.name,
  };
  const roleSaved = await saveRoleService(roleToSave);
  return roleSaved;

}