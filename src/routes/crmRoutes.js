import {addNewConact, getContacts, getContactById, updatecontact, deleteContact} from '../controllers/crmController'
const routes = (app)=>{
    app.route('/contact')
        .get((req, res, next)=> {
            console.log(`Request From: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        .post(addNewConact)
    app.route('/contact/:contactId')
        // get contact  by Id
        .get(getContactById)
        // update contact by id
        .put(updatecontact)
        // delete contact by id
        .delete(deleteContact);
};
export default routes;