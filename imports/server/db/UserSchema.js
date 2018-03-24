import SimpleSchema from 'simple-schema';

import User from './collections/UserCollection';

{/*Once the registration is complete, the UserSchema and the RegistrationSchema will need to be joined.
  This will allow us to verify the user during transactions.*/}

User.schema = new SimpleSchema({
    userName: {type: String, optional: false},
    password: {type: String, optional: false}
    //TODO: front end validation will provide confirmation that the password is what the user intended to enter, i.e. reenter password
});


