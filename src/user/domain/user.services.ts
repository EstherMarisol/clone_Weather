import sql from "../../myUtils/connectionDb";
import User from "./user.interface";
const myTag = 'userService';

export const saveUserService = async (user: User): Promise<User> => {
  try {
    const userToSave = {
      name: user.name,
      email: user.email,
      cellphone: user.cellphone,
      password: user.password,
      cod_role: user.cod_role,
    };
    const userSaved = await sql`
    insert into user
      (name, email, cellphone, password, cod_role)
    values
      (${userToSave.name}, ${userToSave.email}, ${userToSave.cellphone}, ${userToSave.password}, ${userToSave.cod_role})
    returning *
  `
    const dataToReturn: User = {
      name: userSaved[0].name,
      code: userSaved[0].code,
      email: userSaved[0].email,
      cellphone: userSaved[0].cellphone,
      password: userSaved[0].password,
      cod_role: userSaved[0].cod_role,
    }
    return dataToReturn;
  } catch (error: any) {
    //clasificador de errores
    error.message = myTag + '->' + error.message;
    console.log(error);
    throw error;
  }
}

export const getUserService = async (code: number) => {
  const user = await sql`
  select * from user where code = ${code}
`
  return user[0];
}
export const updateUserService = async (code: number, user: User) => {
  const userToUpdate = {
    name: user.name,
    email: user.email,
    cellphone: user.cellphone,
    password: user.password,
    cod_role: user.cod_role,
  };
  const userUpdated = await sql`
  update user set name = ${userToUpdate.name} where code = ${code} returning *
`
  return userUpdated[0];
}

export const deleteUserService = async (code: number) => {
  const userDeleted = await sql`
  delete from user where code = ${code} returning *
`
  return userDeleted[0];
}

/**
 * 
 * @returns all users with pagination, by roder ascending
 */
export const getAllUsersService = async (page: number, limit: number) => {
  const users = await sql`
  select * from user order by code asc limit ${limit} offset ${page}
`
  return users;
}