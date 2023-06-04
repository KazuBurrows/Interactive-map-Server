const express = require('express');
const router = express.Router();

//const { AdjacencyMatrix } = require("../graph/AdjacentMatrix.js");
//const { Dijkstra } = require("../graph/dijkstra.js");

graphMap = require('../graph/mapSetup.js').myObj1;
djikstra = require('../graph/mapSetup.js').myObj2;



/**
 * Send matrix of map
 * @returns {JSON}
 */
router.get("/", (req, res) => {
    mapData = graphMap.getJson()

    console.log("Map data --->", mapData)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.json(mapData);
})



/**
 * Get best route
 * @param {string} startDest
 * @param {string} endDest
 * @returns {JSON}
 */
router.get("/:startDest&:endDest", (req, res) => {
    let start = parseInt(req.params.startDest);
    let end = parseInt(req.params.endDest);

    console.log("Start from:", start)
    console.log("End from:", end)

    djikstra.run(start);
    bestData = djikstra.getBestPath(start, end);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.json(bestData);
})


module.exports = router;
