const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    intensity: Number,
    likelihood: Number,
    relevance: Number,
    start_year: Number,
    end_year: Number,
    source: String,
    country: String,
    topic: String,
    region: String,
    city: String,
});

const Data = mongoose.model('data', dataSchema);

module.exports = Data;
