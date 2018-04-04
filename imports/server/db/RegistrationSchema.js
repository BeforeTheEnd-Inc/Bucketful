import SimpleSchema from 'simple-schema';

import InitialRegistrationForm from './collections/InitialRegistration';
import SecondaryRegistrationForm from './collections/SecondaryRegistrationForm';
import User from './collections/UserCollection';

InitialRegistrationForm.schema = new SimpleSchema({

    email: {type: String, regEx: Email, optional: false}

});

SecondaryRegistrationForm.schema = new SimpleSchema({
    firstName: {type: String, optional: false},
    lastName: {type: String, optional: false},
    birthDate: {type: Date, optional: false},
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