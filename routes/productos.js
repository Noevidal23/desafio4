const router = require('express').Router()
const crud = require('./crud')

const newProduct = new crud()


function existence(req, res, next) {
    newProduct.existence() ? next() : res.send("No hay productos en existencia")
}

function getId(req, res, next) {
    req.body.id = newProduct.getId()
    next()
}

function existProduct(req, res, next) {
    newProduct.existProduct(req.params.id) ? next() : res.send("Error: No existe el producto")
}

router.get('/', existence, (req, res) => {
    res.send(newProduct.getAll())
})

router.get('/:id', existence, existProduct, (req, res) => {
    res.send(newProduct.getById(req.params.id))
})

router.post('/', getId, (req, res) => {
    res.send(newProduct.createProduct(req.body))
})
router.put('/:id', existence, existProduct, (req, res) => {
    res.send(newProduct.updateProduct(req.body, req.params.id))
})
router.delete('/:id', existence, existProduct, (req, res) => {
    res.send(newProduct.deleteProduct(req.params.id))
})

module.exports = router;