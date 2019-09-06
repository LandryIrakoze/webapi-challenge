const express = require('express');
const router = express.Router();

const actionModel = require('../../data/helpers/actionModel');

router.get('/', (req, res) => {
    actionModel.get()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving actions' })
        })
})

router.get('/:id', (req, res) => {
    actionModel.get(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving action' })
        })
})

router.post('/', (req, res) => {
    actionModel.insert(req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error adding action' })
        })
})

router.put('/:id', (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: 'please provide a description and notes' })
    } else {
        actionModel.update(req.params.id, req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error updating user'})
        })
    }
}) //update

router.delete('/:id', (req, res) => {
    actionModel.remove(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error deleting user' })
        })
})

module.exports = router;