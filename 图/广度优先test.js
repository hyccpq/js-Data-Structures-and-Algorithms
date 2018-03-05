const Graph = require('./图');

let graph = new Graph();
let myCerttices = ['a','b','c','d','e','f','g','h','i'];
for(let i = 0 ; i < myCerttices.length ; i++){
	graph.addVertex(myCerttices[i]);
}
graph.addEdge('a','b');
graph.addEdge('a','d');
graph.addEdge('a','c');
graph.addEdge('d','h');
graph.addEdge('g','d');
graph.addEdge('e','f');
graph.addEdge('f','g');
graph.addEdge('i','h');
graph.addEdge('h','c');

console.log(graph.toString());

graph.bfs(myCerttices[0],function (value) {
	console.log(value);
})