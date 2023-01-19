describe("Predictor de edad", () => {
  const oUrl = "https://api.agify.io?name=meelad";
  const endpoint = "https://api.agify.io";

  it("Verificar la data devuelta", () => {
    const parametro = "name";
    const personName = "juan";
    cy.request(`${endpoint}?${parametro}=${personName}`).then((respuesta) => {
      const age = Number(JSON.stringify(respuesta.body.age));
      const count = Number(JSON.stringify(respuesta.body.count));
      const name = String(JSON.stringify(respuesta.body.name)).replace(/['"]+/g, "");

      cy.log('Verificar propiedad "age"');
      expect(age).to.be.a("number");
      expect(age).to.not.be.null;

      cy.log('Verificar propiedad "count"');
      expect(count).to.be.a("number");
      expect(count).to.not.be.null;

      cy.log('Verificar propiedad "name"');
      expect(name).to.be.a("string");
      expect(name).to.equal(personName);
    });
  });

  it("Verificar el mesaje devuelto cuando el parametro name esta en blanco", () => {
    const parametro = "name";
    const personName = "";
    cy.request(`${endpoint}?${parametro}=${personName}`).then((respuesta) => {
      const age = JSON.stringify(respuesta.body.age);
      const count = Number(JSON.stringify(respuesta.body.count));
      const name = String(JSON.stringify(respuesta.body.name)).replace(/['"]+/g, "");

      cy.log('Verificar propiedad "age"');
      expect(age).to.equal('null')

      cy.log('Verificar propiedad "count"');
      expect(count).to.be.a("number");
      expect(count).to.equal(0);

      cy.log('Verificar propiedad "name"');
      expect(name).to.be.a("string");
      expect(name).to.equal(personName);
    });
  });

  xit("Verificar el mesaje devuelo cuando no se envia el parametro name", () => {
    // TBD
  });
});
