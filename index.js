const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const port = 3000

const Product = require('./models/Product')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const uri = "mongodb+srv://admin:password$@bonsartisans.lzxj5k5.mongodb.net/?retryWrites=true&w=majority&appName=BonsArtisans";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

app.get('/products', async (req, res) => {

  try {

    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    
    console.log("Database connection is setup!")
    
    const products = await Product.find({})

    console.log("All products was delivered")
  
    res.json(products)

  } catch (error) {

    res.status(500).json({ error })

  }

})

app.post('/products', async (req, res) => {

  try {

    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
  
    console.log("Database connection is setup!")

    const getLastItem = await Product.findOne({}).sort({ _id: -1 }).limit(1)

    const id = getLastItem._id + 1
  
    const product = new Product(req.body)
    product._id = id

    console.log(`New product created with ID ${id}`)

    await product.save()

    res.status(200).send("The product is created !")

  } catch (error) {

    res.status(500).json({ error })

  }

})

app.put('/products/:id', async (req, res) => {
  
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
  
    console.log("Database connection is setup!")

    const id = req.params.id

    console.log(req.params)
  
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true })

    console.log(`Product with ID ${id} was modified for those infos ${req.body}`)

    await product.save()

    res.status(200).send("Modifications are registered !")

  } catch (error) {

    res.status(500).json({ error })

  }

})

app.delete('/products/:id', async (req, res) => {
  
  try {

    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
  
    console.log("Database connection is setup!")

    const id = req.params.id
  
    const product = await Product.findByIdAndDelete({ _id: id })

    console.log(`Product with ID ${id} was deleted`)

    product.save()

    res.status(200).send("The product successfully deleted !")

  } catch (error) {

    res.status(500).json({ error })

  }

})

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})

