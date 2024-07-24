const getHomePage = (req, res) => {
    res.render('sample.ejs');
};
export { getHomePage }; // Export the getHomePage function to be used in src/routes/web.js
