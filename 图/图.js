module.exports = function Graph() {
	let vertices = [];
	let adjList = {};
	
	this.addVertex = function (v) {
		vertices.push(v);
		adjList[v] = [];
	}
	
	this.addEdge = function (v,w) {
		adjList[v].push(w);
		adjList[w].push(v);
	}
	
	this.toString = function () {
		let s = '';
		for(let i = 0 ; i < vertices.length ; i++){
			s += `${vertices[i]} --> `;
			let neighbors = adjList[vertices[i]];
			for(let j = 0 ; j< neighbors.length ; j++){
				s += neighbors[j] + ' ';
			}
			s += '\n';
		}
		return s;
	}
	
	let initColor = function () {
		let color = [];
		for(let i = 0; i < vertices.length; i++){
			color[vertices[i]] = 'white';
		}
		return color;
	}
	
	this.bfs = function (v, callback) {
		let color = initColor();
		
		let queue = [];
		queue.push(v);
		
		while(queue.length !== 0){
			let u = queue.shift();
			let neighbors = adjList[u];
			color[u] = 'grey';
			for(let i = 0; i < neighbors.length; i++){
				if(color[neighbors[i]] === 'white'){
					color[neighbors[i]] = 'grey';
					queue.push(neighbors[i]);
				}
			}
			color[u] = 'black';
			if(callback){
				callback(u);
			}
		}
	}
}

