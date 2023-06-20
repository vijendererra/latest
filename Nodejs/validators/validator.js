const status = require('http-status');
validator = {}
validator.validatePhoneNumber = (phonenumber) => {
    // if (phonenumber.trim().length >0) {
    //     return true;
    // }
    // else{
    //     return false;
    // }
    // // console.log('hi',new Error('status:400'));
    // else {
    //     // return (new Error('status:400'));
    //     return(status[400]);
    // }
    // return false;


    if (new String(phonenumber).length != 10) {
        throw new Error('Phone number not valid');
    }
}

validator.validateName = (name) => {
    if (name.trim().length > 0) {
        return true;
    }
    return false;
}

validator.validateCategory = (category) => {
    if (
        category.toLowerCase() === 'vv' ||
        category.toLowerCase() === 'vv' ||
        category.toLowerCase() === 'vv'
    ) {
        return true;
    }
    return false;
}
module.exports = validator;