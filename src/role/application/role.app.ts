import { getAllRolesService, getRoleService, saveRoleService } from "../domain/role.services";

/**
 * 
 * @param reqUser 
 * @param data 
 * @returns id of the role saved
 */
export const saveRoleApp = async (reqUser: any, data: any): Promise<number> => {

  const roleToSave = {
    name: data.name,
  };

  if (typeof roleToSave.name !== 'string' || roleToSave.name.length < 3 || roleToSave.name.length > 50) {
    throw new Error('Invalid name');
  }

  const roleSaved = await saveRoleService(roleToSave);
  if (!roleSaved?.code) {
    throw new Error('Error saving role');
  }
  return roleSaved.code;
}


export const getRoleByCodeApp = async (reqUser: any, code: string) => {
  const codeNow = parseInt(code);
  return await getRoleService(codeNow);
}


export const getAllRolesApp = async (reqUser: any, page: number, limit: number) => {
  return await getAllRolesService(page, limit);
}

