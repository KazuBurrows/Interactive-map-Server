const { AdjacencyMatrix } = require("../graph/AdjacentMatrix.js");
const { Dijkstra } = require("../graph/dijkstra.js");


var graphMap = new AdjacencyMatrix(7, true);
    graphMap.addWeightedEdge(0, 1, 2);
    graphMap.addWeightedEdge(0, 2, 1);

    graphMap.addWeightedEdge(1, 3, 2);
    graphMap.addWeightedEdge(1, 4, 6);
    graphMap.addWeightedEdge(1, 6, 2);

    graphMap.addWeightedEdge(2, 3, 8);
    graphMap.addWeightedEdge(2, 5, 5);

    graphMap.addWeightedEdge(3, 5, 5);
    graphMap.addWeightedEdge(3, 6, 4);

    graphMap.addWeightedEdge(4, 6, 3);

    graphMap.addWeightedEdge(5, 6, 3);



var djikstra = new Dijkstra(graphMap.GRAPH);



module.exports.myObj1 = graphMap
module.exports.myObj2 = djikstra


//export { graphMap, djikstra };