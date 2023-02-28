import sql from "../../myUtils/connectionDb";
import Role from "./role.interface";
const myTag = 'roleService';

export const saveRoleService = async (role: Role): Promise<Role> => {
  try {
    const roleToSave = {
      name: role.name,
    };
    const roleSaved = await sql`
    insert into role
      (name)
    values
      (${roleToSave.name})
    returning *
  `
    const dataToReturn: Role = {
      name: roleSaved[0].name,
      code: roleSaved[0].code,
    }
    return dataToReturn;
  } catch (error: any) {
    //clasificador de errores
    error.message = myTag + '->' + error.message;
    console.log(error);
    throw error;
  }
}

export const getRoleService = async (code: number) => {
  const role = await sql`
  select * from role where code = ${code}
`
  return role[0];
}
export const updateRoleService = async (code: number, role: Role) => {
  const roleToUpdate = {
    name: role.name,
  };
  const roleUpdated = await sql`
  update role set name = ${roleToUpdate.name} where code = ${code} returning *
`
  return roleUpdated[0];
}

export const deleteRoleService = async (code: number) => {
  const roleDeleted = await sql`
  delete from role where code = ${code} returning *
`
  return roleDeleted[0];
}

/**
 * 
 * @returns all roles with pagination, by roder ascending
 */
export const getAllRolesService = async (page: number, limit: number) => {
  const roles = await sql`
  select * from role order by code asc limit ${limit} offset ${page}
`
  return roles;
}