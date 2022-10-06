const router = require('express').Router()

const productos = []

function existence(req, res, next) {
    productos.length > 0 ? next() : res.send("No hay productos en existencia")
}
function getId(req, res, next) {
    const len = productos.length
    if (len > 0) {
        req.body.id = len + 1
        
    } else {
        req.body.id = 1
    }
    next()
}


router.get('/', existence, (req, res) => {
    res.send({ productos })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const product = productos.find(producto => producto.id == id)
    product ? res.send(product) : res.send("Error: el Producto no existe")
})

router.post('/', getId, (req, res) => {
    productos.push(req.body)
    console.log(productos);
    res.send(`El id asignado es: ${req.body.id}`)
})
router.put('/:id', existence, (req, res)=>{
    const id = req.params.id
    const product = productos.find(producto => producto.id == id)
    

})


module.exports = router;