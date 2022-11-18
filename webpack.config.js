const { toBeEmpty } = require("@testing-library/jest-dom/dist/matchers");

module.exports = {
    resolve: {
        fallback: { 
            path: require.resolve("path-browserify")
        }
    }
}