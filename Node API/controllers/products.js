// controllers/products.js
const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "I am getAllProducts" });
};

const getAllProductsTestings = async (req, res) => {
    res.status(200).json({ msg: "I am getAllProductsTestings" });
};

module.exports = { getAllProducts, getAllProductsTestings };
