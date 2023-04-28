const { save, update, getAll, deleteById, deleteOne } = require('../crudcotroller');
const { Crud } = require('../../schema/schema');

describe('Curd Operations', () => {
    let req, res;

    beforeEach(() => {
        req = { body: { name: 'John', role: 'Developer', location: 'New York' } };
        res = { json: jest.fn(), status: jest.fn().mockReturnThis(), send: jest.fn() };
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('Save Functionality', () => {
        it('Save Success', async () => {
            const mockSave = jest.spyOn(Crud.prototype, 'save').mockResolvedValue({
                _id: '123',
                name: 'John',
                role: 'Developer',
                location: 'New York'
            });
            await save(req, res);
            expect(mockSave).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({
                _id: '123',
                name: 'John',
                role: 'Developer',
                location: 'New York'
            });

            expect(res.status).not.toHaveBeenCalled();
            expect(res.send).not.toHaveBeenCalled();
        });

        it('Save fail with status 400', async () => {
            const errorMessage = 'Somethisng went wrong';
            const mockSave = jest.spyOn(Crud.prototype, 'save').mockResolvedValue(null);
            await save(req, res);
            expect(mockSave).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
            expect(res.send).not.toHaveBeenCalled();
        });

        it('Save fail with status 500', async () => {
            const error = new Error('Something went wrong');
            const mockSave = jest.spyOn(Crud.prototype, 'save').mockRejectedValue(error);
            await save(req, res);
            expect(mockSave).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
            expect(res.send).not.toHaveBeenCalled();
        });
    });


    describe('getAll function', () => {
        it('Get Success', async () => {
            const resp = jest.fn().mockReturnValue([{
                _id: '1',
                name: 'John',
                role: 'Developer',
                location: 'New York'
            }]);
            Crud.find = resp;
            await getAll(req, res);
            expect(res.json).toHaveBeenCalledWith([{
                _id: '1',
                name: 'John',
                role: 'Developer',
                location: 'New York'
            }]);
            expect(res.status).not.toHaveBeenCalled();
            expect(res.send).not.toHaveBeenCalled();
        });

        it('Get Fail', async () => {
            const error = new Error('Something went wrong');
            const resp = jest.fn().mockRejectedValue(error);
            Crud.find = resp;
            await getAll(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).not.toHaveBeenCalled();
        });
        it('Get Fail1', async () => {
            const error = new Error('Something went wrong');
            const resp = jest.fn().mockRejectedValue({});
            Crud.find = resp;
            await getAll(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).not.toHaveBeenCalled();
        });
    });

    describe('Update Functionality', () => {
        let req;
        beforeEach(() => {
            req = {
                params: { _id: '1' },
                body: {
                    name: 'John',
                    role: 'Developer',
                    location: 'New York'
                }
            };
        });
        it('should update a document in the database', async () => {
            const mockFindByIdAndUpdate = jest.fn().mockReturnValue({
                _id: '1',
                name: 'John',
                role: 'Developer',
                location: 'New York'
            });
            Crud.findByIdAndUpdate = mockFindByIdAndUpdate;

            await update(req, res);

            expect(mockFindByIdAndUpdate).toHaveBeenCalledWith('1', { $set: req.body }, { new: true });
            expect(res.json).toHaveBeenCalledWith({
                _id: '1',
                name: 'John',
                role: 'Developer',
                location: 'New York'
            });
        });

        it('should return an error message if the document was not found', async () => {
            Crud.findByIdAndUpdate = jest.fn().mockReturnValue(null);
            await update(req, res);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: '1 not found...!' });
        });

        it('should return an error if there was a problem updating the document', async () => {
            const error = new Error('Something went wrong');
            Crud.findByIdAndUpdate = jest.fn().mockRejectedValue(error);
            await update(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
        });
    });

    describe('DeleteById Funtionality', () => {
        let req;
        beforeEach(() => {
            req = { params: { _id: '1' } }
        });

        it('Delete Success..!', async () => {
            const mockResp = { name: "Vijender" }
            Crud.findByIdAndDelete = jest.fn().mockReturnValue(mockResp);
            await deleteById(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: 'Vijender deleted successfully..!' });
            expect(res.status).not.toHaveBeenCalled();
            expect(res.send).not.toHaveBeenCalled();
        });
        it('Delete Fail..!', async () => {
            Crud.findByIdAndDelete = jest.fn().mockReturnValue(null);
            await deleteById(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: '1 not found...!' });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).not.toHaveBeenCalled();
        });
        it('Delete fails wilth server error..!', async () => {
            const error = new Error('Something went wrong');
            Crud.findByIdAndDelete = jest.fn().mockRejectedValue(error);
            await deleteById(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).not.toHaveBeenCalled();
        });
        it('Delete fails wilth server error1..!', async () => {
            const error = new Error('Something went wrong');
            Crud.findByIdAndDelete = jest.fn().mockRejectedValue({});
            await deleteById(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).not.toHaveBeenCalled();
        });
    });

    describe('DeleteByOne Funtionality', () => {
        let req;
        beforeEach(() => {
            req = { params: { name: 'vijender' } }
        });

        it('DeleteOne Success..!', async () => {
            const mockResp = { name: "vijender" }
            Crud.findOneAndDelete = jest.fn().mockReturnValue(mockResp);
            await deleteOne(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: 'vijender deleted successfully..!' });
            expect(res.status).not.toHaveBeenCalled();
            expect(res.send).not.toHaveBeenCalled();
        });
        it('DeleteOne Fail..!', async () => {
            Crud.findOneAndDelete = jest.fn().mockReturnValue(null);
            await deleteOne(req, res);
            expect(res.json).not.toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({ message: 'vijender not found...!' });
        });
        it('DeleteOne fails wilth server error..!', async () => {
            const error = new Error('Something went wrong');
            Crud.findOneAndDelete = jest.fn().mockRejectedValue(error);
            await deleteOne(req, res);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).not.toHaveBeenCalled();
        });
    });
});
