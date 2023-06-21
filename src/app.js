import express from 'express'
import DB_CONNECTION from './connection.js'

const APP = express()
APP.use(express.json())

APP.get('/enxadristas', (req, res) => {
    const SQL = 'SELECT * FROM enxadristas'
    DB_CONNECTION.query(SQL, (error, result) => {
        if (error)
            res.status(404).json({ 'erro': error })
        else
            res.status(200).send(result)
    })
})

APP.get('/enxadristas/:id', (req, res) => {
    const ID = req.params.id
    const SQL = 'SELECT * FROM enxadristas WHERE id=?'
    DB_CONNECTION.query(SQL, ID, (error, result) => {
        if (error)
            res.status(404).json({ 'erro': error })
        else
            res.status(200).json(result)
    })
})

APP.post('/enxadristas', (req, res) => {
    const PLAYER = req.body
    const SQL = 'INSERT INTO enxadristas SET ?'
    DB_CONNECTION.query(SQL, PLAYER, (error, result) => {
        if (error)
            res.status(400).json({ 'erro': error })
        else
            res.status(201).json(result)
    })
})

APP.delete('/enxadristas/:id', (req, res) => {
    const ID = req.params.id
    const SQL = 'DELETE FROM enxadristas WHERE id=?'
    DB_CONNECTION.query(SQL, ID, (error, result) => {
        if (error)
            res.status(404).json({ 'erro': error })
        else
            res.status(200).json(result)
    })
})

APP.put('/enxadristas/:id', (req, res) => {
    const ID = req.params.id
    const PLAYER = req.body
    const SQL = 'UPDATE enxadristas SET ? WHERE id=?'
    DB_CONNECTION.query(SQL, [PLAYER, ID], (error, result) => {
        if (error)
            res.status(400).json({ 'erro': error })
        else
            res.status(200).json(result)
    })
})

export default APP
