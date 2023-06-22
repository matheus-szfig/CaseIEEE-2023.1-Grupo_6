import { database } from "../../../config/database";

export default async function AuthToken(payload) {
  try {
    const userInfo = payload["UserInfo"];

    const user = await database("usuario")
      .select({
        id: "id",
        email: "email",
        nome: "nome",
        notify: "notify",
      })
      .where({
        id: userInfo.id,
      })
      .first();

    const permissions = await database("v_p_usuario")
      .select({
        id: "id_permissao",
        permission: "descricao",
      })
      .where({
        id_usuario: userInfo.id,
      });

    const token = {
      ...user,
      permissions: permissions.map((p) => p["permission"]),
    };

    return { token };
  } catch (e) {
    return { error: e };
  }
}
