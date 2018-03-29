import SimpleSchema from 'simple-schema';

import RegistrationForm from './collections/RegistrationCollection';
import User from './collections/UserCollection';

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

{/*Once the registration is complete, the UserSchema and the RegistrationSchema will need to be joined.
  This will allow us to verify the user during transactions.*/}

User.schema = new SimpleSchema({
    userName: {type: String, optional: false},
    password: {type: String, optional: false}
    //TODO: front end validation will provide confirmation that the password is what the user intended to enter, i.e. reenter password
});