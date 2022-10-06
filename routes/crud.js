class crud {
    productos = []

    getId() {
        const len = this.productos.length
        if (len > 0) {
            return len + 1
        }
        else
            return 1

    }
    existence() {
        return this.productos.length > 0 ? true : false

    }
    existProduct(id) {
        const exist = this.productos.find(producto => producto.id == id)
        return exist ? true : false
    }

    getAll() {
        return this.productos
    }

    getById(id) {
        const exist = this.productos.find(producto => producto.id == id)
        return exist
    }
 
    createProduct(object) {
        this.productos.push(object)
        return `Producto creado con el id: ${object.id}`
    }
 
    updateProduct(object, id) {
        const product = this.getById(id)
        const index = this.productos.indexOf(product)
        object.id = id
        this.productos[index] = object
        return "Producto actualizado correctamente"
    }

    deleteProduct(id){
        let saved =[]
        saved = this.productos.filter(producto => producto.id != id)
        this.productos= saved
        return ('Elemento eliminado con exito')
    }
}
module.exports = crud