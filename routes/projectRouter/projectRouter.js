const express = require('express');
const router = express.Router();

const projectModel = require('../../data/helpers/projectModel');

router.get('/', (req, res) => {
    projectModel.get()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving projects' })
        })
})

router.get('/:id', (req, res) => {
    projectModel.get(req.params.id)
        .then(item => {
            if (item) {
                res.status(200).json(item)
            } else {
                res.status(400).json({ message: 'invalid id' })
            }
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving project' })
        })
}) 

router.post('/', (req, res) => {
    projectModel.insert(req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(item => {
            res.status(400).json({ message: 'error adding project' })
        })
})

router.put('/:id', (req, res) => {
    if (!req.body.name || !req.body.description) {
        res.status(400).json({ message: 'please provide a name and description' })
    } else {
        projectModel.update(req.params.id, req.body)
            .then(item => {
                if (item) {
                    res.status(200).json(item)
                } else {
                    res.status(400).json({ message: 'invalid id' })
                }
            })
            .catch(item => {
                res.status(400).json({ message: 'error updating project'})
            })
    }
})

router.delete('/:id', (req, res) => {
    projectModel.remove(req.params.id)
        .then(item => {
            if (item) {
                res.status(200).json(item)
            } else {
                res.status(400).json({ message: 'invalid id' })
            }
        })
        .catch(item => {
            res.status(400).json({ message: 'error deleting project' })
        })
}) 

router.get('/:id/actions', (req, res) => {
    projectModel.getProjectActions(req.params.id)
        .then(item => {
            if (item) {
                res.status(200).json(item)
            } else {
                res.status(400).json({ message: 'invalid id' })
            }
        })
        .catch(item => {
            res.status(400).json({ message: 'error retrieving actions' })
        })
})

module.exports = router;