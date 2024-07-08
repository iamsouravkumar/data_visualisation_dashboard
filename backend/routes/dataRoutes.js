const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// data - for fetch data from /data end point
router.get('/data', async (req, res) => {
    try {
        const filters = {};
        
        //filters based on query parameters
        if (req.query.endYear) filters.endYear = req.query.endYear
        if (req.query.topic) filters.topic = { $regex: new RegExp(req.query.topic, 'i') };
        if (req.query.sector) filters.sector = { $regex: new RegExp(req.query.sector, 'i') };
        if (req.query.region) filters.region = { $regex: new RegExp(req.query.region, 'i') };
        if (req.query.pest) filters.pest = { $regex: new RegExp(req.query.pest, 'i') };
        if (req.query.source) filters.source = { $regex: new RegExp(req.query.source, 'i') };
        if (req.query.swot) filters.swot = { $regex: new RegExp(req.query.swot, 'i') };
        if (req.query.country) filters.country = { $regex: new RegExp(req.query.country, 'i') };
        if (req.query.city) filters.city = { $regex: new RegExp(req.query.city, 'i') };
        
        const data = await Data.find(filters);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
