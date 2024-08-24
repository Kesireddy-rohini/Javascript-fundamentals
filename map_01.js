

let map = new Map();

map.set("rohini", "java");
map.set("kesireddy" , "devops");
map.set("navin", "databases");
map.set("virat" ,"AI");

console.log(map.keys());
console.log(map.has("virat"));

for(let [k, v] of map){
    console.log(k, ":" , v);
}