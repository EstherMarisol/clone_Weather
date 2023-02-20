//probando la conexion a la base de datos
import sql from "../src/myUtils/connectionDb";

/*
describe("dbConnection", () => {
  test("should return 200 and user detail", async () => {
    const user = {
      name: "jose",
      email: "jose@email.com",
      cellphone: "123456789",
      password: "123456789",
      cod_role: 1
    };


    const users = await sql`
    insert into user
      (name,email, cellphone,password,cod_role)
    values
      (${user.name}, ${user.email}, ${user.cellphone}, ${user.password}, ${user.cod_role})
    returning *
  `
  

  });
});
*/
describe("dbConnection", () => {
  test("verify create role, ", async () => {
    const roleToSave = {
      name: "admin",
    };
    const role = await sql`
    insert into role
      (name)
    values
      (${roleToSave.name})
    returning *
  `
    expect(role[0].name).toBe(roleToSave.name);
    
  });
});