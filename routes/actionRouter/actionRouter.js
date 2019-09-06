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
            if (item) {
                res.status(200).json(item)
            } else {
                res.status(400).json({ message: 'invalid id' })
            }
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

// router.put('/:id', (req, res) => {
//     if (!req.body.description || !res.body.notes ) {
//         res.status(400).json({ message: 'please provide a description and notes' })
//     } else {
//         actionModel.update(req.params.id, req.body)
//         .then(item => {
//             res.status(200).json(item)
//         })
//         .catch(item => {
//             res.status(400).json({ message: 'error updating action'})
//         })
//     }
// }) 
router.put('/:id', (req, res) => {
    if (!req.body.description || !res.body.notes ) {
        res.status(400).json({ message: 'please provide a description and notes' })
    } else {
        actionModel.update(req.params.id, req.body)
            .then(item => {
                if (item) {
                    res.status(200).json(item)
                } else {
                    res.status(400).json({ message: 'invalid id' })
                }
            })
            .catch(item => {
                res.status(400).json({ message: 'error updating action'})
            })
    }
}) 

router.delete('/:id', (req, res) => {
    actionModel.remove(req.params.id)
        .then(item => {
            if (item) {
                res.status(200).json(item)
            } else {
                res.status(400).json({ message: 'invalid id' })
            }
        })
        .catch(item => {
            res.status(400).json({ message: 'error deleting actions' })
        })
}) 

module.exports = router;