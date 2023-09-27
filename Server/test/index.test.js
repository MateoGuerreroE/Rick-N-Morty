const server = require("../src/app");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      let char = await agent.get("/rickandmorty/character/1");
      expect(Object.keys(char.body)).toEqual([
        "id",
        "status",
        "name",
        "species",
        "origin",
        "image",
        "gender",
      ]);
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/830").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Devuelve un acess true cuando se pasan los valores de usuario correctos", async () => {
      let login = await agent.get(
        "/rickandmorty/login/?email=mateof1223@gmail.com&password=123456"
      );
      expect(login.body).toEqual({ access: true });
    });

    it("Devuelve un acess false cuando se pasan los valores de usuario incorrectos", async () => {
      let login = await agent.get(
        "/rickandmorty/login/?email=elpepe@gmail.com&password=789123"
      );
      expect(login.body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Lo que se envia por body debe ser un arreglo", async () => {
      let result = await agent.post("/rickandmorty/fav").send({ id: 3 });
      expect(Array.isArray(result.body)).toBe(true);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    let char1 = { id: 5 };
    let char2 = { id: 7 };
    let char3 = { id: 9 };
    it("Debe devolver los favoritos sin modificar en caso que el personaje a eliminar no este agregado.", async () => {
      await agent.post("/rickandmorty/fav").send(char1);
      await agent.post("/rickandmorty/fav").send(char2);
      const lastArray = await agent.post("/rickandmorty/fav").send(char3);
      const result = await agent.delete("/rickandmorty/fav/2");
      expect(result.body).toEqual(lastArray.body);
    });

    it("Cuando se envia un ID por params a deleteFav lo elimina correctamente cuando existe", async () => {
      let result = await agent.delete("/rickandmorty/fav/7");
      expect(result.body.length).toBe(3);
      let result2 = await agent.delete("/rickandmorty/fav/3");
      expect(result2.body.length).toBe(2);
    });
  });
});
