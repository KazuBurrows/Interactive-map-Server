const { Queue } = require("./Queue.js");
const { AdjacencyMatrix } = require("./AdjacentMatrix.js");



// https://www.freecodecamp.org/news/dijkstras-algorithm-explained-with-a-pseudocode-example/
// https://www.programiz.com/dsa/dijkstra-algorithm




class Dijkstra {
    /**
     * 
     * @param {AdjacencyMatrix} GRAPH
     */
    constructor(GRAPH) {
        this.GRAPH = GRAPH;

        // Every nodes shortest path weight. All set to infinity by default. 
        this.dist = [];
        // Best path in graph, ----------------------------------. 
        // let path = new AdjacencyMatrix(GRAPH.length, false);
        this.path = [];
        // When all paths from the node has been considered,
        //  the node will be updated to 'true'. 
        this.completed = [];
        // A queue to nodes that still needs its shortest path measured
        this.Q = new Queue(this.GRAPH.length);

    }



    /**
     * Run dijkstra's algorithm
     * @param {int} S "Starting node."
     */
    run(S) {
        this.dist = [];
        this.path = [];
        this.completed = [];

        // Setup size of arrays.
        for (let i = 0; i < this.GRAPH.length; i++) {
            this.dist.push(Infinity);
            this.path.push(null);
            this.completed.push(false);
        }
        this.dist[S] = 0;
        this.path[S] = S;


        this.Q.enqueue(S);

        // Node to explore min edge of.
        let v;

        // Traverse through every node. 'GRAPH.length-1' to exclude 'S'. 
        while (!this.Q.isEmpty()) {
            v = this.Q.peek();
            // traverse 'v' and find all adjacent nodes of 'v' not 'completed'
            // add adjacent nodes of 'v' to 'Q'
            // update edges of adjacent nodes of 'v' if better
            this.findMinPath(v);
            // mark 'v' as 'completed'
            this.completed[v] = true;
            // and remove from 'Q'
            this.Q.dequeue();

        }
    }



    /**
     * Helper function to 'run(S)' function.
     * 
     * Traverse 'V' and find all adjacent nodes of 'V' not considered 'Completed'.
     * Add the adjacent nodes to 'Q'.
     * Update all edges of ajacent nodes of 'V' if better.
     * @param {int} v "The node that we will traverse to find all its neighbours."
     */
    findMinPath(v) {
        // Weight of path from 'v' to 'u'.
        let v_u_weight;
        // loop through every adjacent neighbour.
        for (let u = 0; u < this.GRAPH.length; u++) {
            v_u_weight = this.GRAPH[u][v];
            // If 'v_u_weight' is 0, then u is not an adjacent neighbour, 'continue'.
            if (v_u_weight <= 0) {
                continue;
            }

            // Current dist[v] is worse than 'u's shortest path + 'v' to 'u' edge weight.
            if (this.dist[v] > this.dist[u] + v_u_weight) {
                this.dist[v] = this.dist[u] + v_u_weight;
                this.path[v] = u;
            }
            // ------------------------------------
            if (this.dist[u] > this.dist[v] + v_u_weight) {
                this.dist[u] = this.dist[v] + v_u_weight;
                this.path[u] = v;
            }


            // If 'u's shortest path has not been measured and completed. && 'u' is not already in 'Q'.
            if (this.completed[u] == false && this.Q.hasElement(u) == false) {
                this.Q.enqueue(u);
                // console.log(u)
            }

        }

    }




    /**
     * Get's the best path from 'S' to 'E'
     * @param {int} S "Starting node"
     * @param {int} E "Ending node"
     * @returns {Array} "Path from 'S' to 'E' in array."
     */
    getBestPath(S, E) {
        let best_nodes = [];
        let best_paths = [];

        let node, next_node;
        let id, source, target, weight, highlight, selected;
        node = E;

        
        while (node != S) {
            let j_node = {};
            let j_path = {};

            next_node = this.path[node];        // Gets parent node in best path array(this.path).

            id = ''+node;
            weight = this.GRAPH[node][next_node];
            highlight = true;
            source = ''+next_node;
            target = ''+node;
            selected = ((node=S)||(node=E)) ? true: false;

            j_node['id'] = id;
            j_node['name'] = id;
            j_node['highlight'] = highlight;
            j_node['val'] = 1;
            j_node['selected'] = false;

            best_nodes.push(j_node);
            
            j_path['id'] = source+target;
            j_path['source'] = source;
            j_path['target'] = target;
            j_path['weight'] = weight;
            j_path['highlight'] = highlight;
            

            console.log(source, target)

            best_paths.push(j_path);
            node = next_node;

        }


        // Push last node.
        best_nodes.push({
            'id': ''+S,
            'name': ''+S,
            'highlight': true,
            'val': 1,
            'selected': true
        });
        
        return {'nodes': best_nodes, 'links': best_paths};
    }

}









exports.Dijkstra = Dijkstra;


//a = new AdjacencyMatrix(7, true);
//a.addWeightedEdge(0,1,2);
//a.addWeightedEdge(0,2,1);

//a.addWeightedEdge(1,3,2);
//a.addWeightedEdge(1,4,6);
//a.addWeightedEdge(1,6,2);

//a.addWeightedEdge(2,3,8);
//a.addWeightedEdge(2,5,5);

//a.addWeightedEdge(3,6,3);
//a.addWeightedEdge(3,5,4);

//a.addWeightedEdge(4,6,3);

//a.addWeightedEdge(5,6,3);



// console.log(a.GRAPH.length)
//a.printGraph();



//d = new Dijkstra(a.GRAPH);

//d.run(0)

//console.log(d.getBestPath())
