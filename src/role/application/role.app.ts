import { getRoleService, saveRoleService } from "../domain/role.services";

export const saveRoleApp = async (reqUser: any, data: any) => {
  const roleToSave = {
    name: data.name,
  };
  const roleSaved = await saveRoleService(roleToSave);
  return roleSaved;

}
export const getRoleByCodeApp = async (reqUser: any, code: string) => {
  const codeNow = parseInt(code);
  const role = await getRoleService(codeNow);
  return role;
}