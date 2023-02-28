import { deleteRoleService, getAllRolesService, getRoleService, saveRoleService, updateRoleService } from "../domain/role.services";

/**
 * 
 * @param reqUser 
 * @param data 
 * @returns id of the role saved
 */
export const saveRoleApp = async (reqUser: any, data: any): Promise<{ code: number }> => {

  const roleToSave = {
    name: data.name,
  };

  const roleSaved = await saveRoleService(roleToSave);
  if (!roleSaved?.code) {
    throw new Error('Error saving role');
  }
  return {
    code: roleSaved.code
  };
}


export const getRoleByCodeApp = async (reqUser: any, code: string) => {
  const codeNow = parseInt(code);
  return await getRoleService(codeNow);
}


export const getAllRolesApp = async (reqUser: any, page: number, limit: number) => {
  return await getAllRolesService(page, limit);
}

export const updateRoleApp = async (reqUser: any, code: number, data: any) => {
  const roleToSave = {
    name: data.name,
  };

  if (roleToSave.name && (typeof roleToSave.name !== 'string' || roleToSave.name.length < 3 || roleToSave.name.length > 50)) {
    const roleSaved = await updateRoleService(code, roleToSave);
    if (!roleSaved?.code) {
      throw new Error('Error saving role');
    }
    return roleSaved.code;
  }
}
export const deleteRoleApp = async (reqUser: any, code: number) => {
  return await deleteRoleService(code);
}

