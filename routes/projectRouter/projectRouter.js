const express = require('express');
const router = express.Router();

const projectModel = require('../../data/helpers/projectModel');

router.get('/', (req, res) => {
    projectModel.get()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving actions' })
        })
})

router.get('/:id', (req, res) => {
    projectModel.get(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving action' })
        })
})

router.get('/:id', (req, res) => {
    projectModel.get(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving action' })
        })
})

router.post('/', (req, res) => {
    projectModel.insert(req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error adding action' })
        })
})

router.put('/:id', (req, res) => {
    if (!req.body) {
        res.status(400).json({ message: 'please provide a name and description' })
    } else {
        projectModel.update(req.params.id, req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error updating user'})
        })
    }
}) //update

router.delete('/:id', (req, res) => {
    projectModel.remove(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error deleting user' })
        })
})

router.get('/:id/actions', (req, res) => {
    projectModel.getProjectActions(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving posts' })
        })
})

module.exports = router;