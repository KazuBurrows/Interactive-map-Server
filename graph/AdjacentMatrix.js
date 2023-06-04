

class AdjacencyMatrix {
    /**
     * 
     * @param {int} V "Number of verticies in graph."
     * @param {Boolean} undirected "Is the graph undirected."
     */
    constructor (V, undirected=true) {
        // this.GRAPH = new Array(V).fill(Array(V).fill(0));
        this.NodeNames = [];
        this.GRAPH = [];
        this.IsUndirected = undirected;
        for (let i=0; i<V; i++) {
            this.GRAPH.push(
                Array(V).fill(0)
            )
            this.NodeNames.push(null);
        }
    }



    /**
     * Add a new edge along x & y nodes in the graph. 
     * @param {Int} x 
     * @param {Int} y 
     * @param {Int} weight 
     */
    addWeightedEdge(x, y, weight=0) {
        if (this.IsUndirected) {
            this.GRAPH[x][y] = weight;
            this.GRAPH[y][x] = weight;

        } else {
            this.GRAPH[x][y] = weight;
        }
        
    }



    printGraph() {
        // Traverse the Adj[][]
        for (let i=0; i<this.GRAPH.length; i++) {
            let graphLine = "";
            for (let j=0; j<this.GRAPH[i].length; j++) {

                graphLine += this.GRAPH[i][j];
            }
            console.log(graphLine);
            
        }
    }



    /**
     * Returns UNDIRECTED matrix graph in json format. e.g
     * const apiNodes = [
     *  {key:'A', x_coord:0, y_coord:0, highlight:false},
     *  {key:'B', x_coord:0, y_coord:0, highlight:false}
     * ]
     * const apiPaths = [
     *  {key:'AB', x_coord:0, y_coord:0, highlight:false},
     *  {key:'AC', x_coord:0, y_coord:0, highlight:false},
     * ]
     * @returns {Array} "[[json], [json]]"
     */
    getJson() {
        let jsonNodes = [];
        let jsonPaths = [];

        let id, source, target, weight, highlight;
        // NODES
        for (let i=0; i<this.GRAPH.length; i++) {
            let node = {};

            id = ''+i;
            highlight = false;

            node['id'] = id;
            node['name'] = id;
            node['highlight'] = highlight;
            node['val'] = 1;
            node['selected'] = false;

            jsonNodes.push(node);


            // PATHS
            for (let j=i; j<this.GRAPH[i].length; j++) {
                let path = {};

                if (this.GRAPH[i][j] == 0) {    // Skip this loop iteration.
                    continue;
                }

                source = ''+i;
                target = ''+j;
                weight = this.GRAPH[i][j];
                highlight = false;

                // console.log(id1, id2)

                path['id'] = source+target;
                path['source'] = source;
                path['target'] = target;
                path['weight'] = weight;
                path['highlight'] = highlight;

                jsonPaths.push(path);
            }



        }

        

        return {'nodes': jsonNodes, 'links': jsonPaths}
    }


}


//a = new AdjacencyMatrix(7, true);
//a.addWeightedEdge(0, 1, 2);
//a.addWeightedEdge(0, 2, 1);

//a.addWeightedEdge(1, 3, 2);
//a.addWeightedEdge(1, 4, 6);
//a.addWeightedEdge(1, 6, 2);

//a.addWeightedEdge(2, 3, 8);
//a.addWeightedEdge(2, 5, 5);

//a.addWeightedEdge(3, 6, 3);
//a.addWeightedEdge(3, 5, 4);

//a.addWeightedEdge(4, 6, 3);

//a.addWeightedEdge(5, 6, 3);



//a.printGraph();


//console.log(a.getJson())

exports.AdjacencyMatrix = AdjacencyMatrix;