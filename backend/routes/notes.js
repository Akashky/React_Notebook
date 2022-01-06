const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');

// ROUTE1 : Create a user using: GET "/api/auth/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    const notes = await Notes.find({user: req.user.id});
    res.json(notes);
})

module.exports = router