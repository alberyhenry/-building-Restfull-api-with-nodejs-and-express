import mongoose from 'mongoose';
import {ContactShema} from '../models/crmModel';
const contact = mongoose.model('contact', ContactShema);
const getData = (req, res, err, data)=>{
    if(err) {res.send(err)}
    res.json(data);
};
export const addNewConact = (req, res)=>{
    let newContact = new contact(req.body);
    newContact.save((err, data)=>{
        if(err){res.send(err)}
        res.json(newContact);
    });
};
export const getContacts = (req, res)=>{
    contact.find({}, getData.bind(this, req, res));
};
export const getContactById = (req, res)=>{
    contact.findById(req.params.contactId, getData.bind(this, req, res))
};
export const updatecontact = (req, res) =>{
    contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, getData.bind(this, req, res))
}
export const deleteContact = (req, res) =>{
    contact.remove({_id: req.params.contactId}, (err) =>{
        if(err){res.send(err)}
        res.send({message: "Deleted Successfully Contact"})
    })
}