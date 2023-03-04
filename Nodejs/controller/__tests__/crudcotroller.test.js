const CrudController = require('../crudcotroller');
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");


jest.mock("axios");
const mocAxios = new MockAdapter(axios);
const mockresp = () => {
    const resp = {};
    resp.statu = jest.fn().mockReturnValue(resp);
    resp.sendStatus = jest.fn().mockReturnValue(resp);
    resp.json = jest.fn().mockReturnValue(resp);
    resp.send = jest.fn().mockReturnValue(resp);
    return resp;
}

describe("CrudOperations-Controller", () => {

    it("test get - this will pass", async () => {
        const res = mockresp();
        const req = {};
        const result = await CrudController.getAll(req, res);
        console.log(result);
        // mock.reset();
    });
});


