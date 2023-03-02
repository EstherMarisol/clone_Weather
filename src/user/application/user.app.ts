import { deleteUserService, getAllUsersService, getUserService, saveUserService, updateUserService } from "../domain/user.services";

/**
 * 
 * @param reqUser 
 * @param data 
 * @returns id of the user saved
 */
export const saveUserApp = async (reqUser: any, data: any): Promise<{ code: number }> => {

  const userToSave = {
    name: data.name,
    email: data.email,
    cellphone: data.cellphone,
    password: data.password,
    cod_role: data.cod_role,
  };

  const userSaved = await saveUserService(userToSave);
  if (!userSaved?.code) {
    throw new Error('Error saving user');
  }
  return {
    code: userSaved.code
  };
}


export const getUserByCodeApp = async (reqUser: any, code: string) => {
  const codeNow = parseInt(code);
  return await getUserService(codeNow);
}


export const getAllUsersApp = async (reqUser: any, page: number, limit: number) => {
  return await getAllUsersService(page, limit);
}

export const updateUserApp = async (reqUser: any, code: number, data: any) => {
  const userToSave = {
    name: data.name,
    email: data.email,
    cellphone: data.cellphone,
    password: data.password,
    cod_role: data.cod_role,
  };

  if (userToSave.name && (typeof userToSave.name !== 'string' || userToSave.name.length < 3 || userToSave.name.length > 50)) {
    const userSaved = await updateUserService(code, userToSave);
    if (!userSaved?.code) {
      throw new Error('Error saving user');
    }
    return userSaved.code;
  }
}
export const deleteUserApp = async (reqUser: any, code: number) => {
  return await deleteUserService(code);
}

