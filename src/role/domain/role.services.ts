import sql from "../../myUtils/connectionDb";
import Role from "./role.interface";

export const saveRoleService = async (role: Role) => {
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
  return roleSaved[0];
}

export const getRoleService = async (id: number) => {
  const role = await sql`
  select * from role where code = ${id}
`
  return role[0];
}
export const updateRoleService = async (id: number, role: Role) => {
  const roleToUpdate = {
    name: role.name,
  };
  const roleUpdated = await sql`
  update role set name = ${roleToUpdate.name} where code = ${id} returning *
`
  return roleUpdated[0];
}

export const deleteRoleService = async (id: number) => {
  const roleDeleted = await sql`
  delete from role where code = ${id} returning *
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
