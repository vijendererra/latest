validator = {}
validator.validatePhoneNumber = (phonenumber) => {
    if (new String(phonenumber).length != 10) {
            throw new Error('Phone number not valid');
    }
}

validator.validateName = (name) => {
    if (name.trim().length === 0) {
        throw new Error('Name should not be empty');
    }
}

module.exports = validator;