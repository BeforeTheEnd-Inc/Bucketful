import SimpleSchema from 'simple-schema';

import RegistrationForm from './collections/RegistrationCollection';

RegistrationForm.schema = new SimpleSchema({
    firstName: {type: String, optional: false},
    lastName: {type: String, optional: false},
    birthDate: {type: Date, optional: false},
    //SimpleSchema.RegEx.Email isn't working as expected more research needed
    email: {type: String, regEx: Email, optional: false},
    addressFieldOne: {type: String, optional: false},
    addressFieldTwo: {type: String, optional: true},
    city: {type: String, optional: false},
    state: {type: String, optional: false},
    zipCode: {type: Number, defaultValue: 0, optional: false, length: 5},
    sex: {type: String, optional: false}
});