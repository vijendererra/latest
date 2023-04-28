var express = require('express');
var router = express.Router();
var CrudController= require('../controller/crudcotroller');
var UserController= require('../controller/userController');
var multer = require('multer');

// Crud Opertion;
router.post('/p', CrudController.save);
router.get('/g',CrudController.getAll);
router.put('/:_id',CrudController.update); 
router.delete('/:_id',CrudController.deleteById);
router.delete('/deleteOne/:name',CrudController.deleteOne);   



// Loging & Registration;
router.post('/reg', UserController.registration);
router.post('/login', UserController.userLogin);
router.get('/logedin',UserController.jwtVeryfied, UserController.userLogedIn);
router.post('/forgotpwd', UserController.forgotpwd);
router.post('/validateOTP', UserController.validateOtp);
router.get('/tokenexpires',UserController.tokenexpirs);
router.post('/resetpwd/:token', UserController.resetPwd);
router.post('/changepwd',UserController.changePwd)

var upload = multer({dest:'uploads/'});
router.post('/updateprofile',upload.any(), UserController.uppDateProfile);
// router.post('/cnangpwd', UserController.changePwd);


router.get('*',(req,res)=>{
    res.status(400).json({"meassage":"not Found"})
})

module.exports=router;