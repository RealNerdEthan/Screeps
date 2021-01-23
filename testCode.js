//If 50 or more constructionSite exist then spawn up to 10 builders, else keep the builder count at 3
var builders = _.filter(Game.creeps, (creep) => creep.memory.role == "builder");
console.log("Builders: " + builders.length);

if(constuctionSite >= 50 && creeps.role.builder <10) {
    var newName = "Builder" + Game.time;
    console.log("Spawning new builder: " + newName);
    Game.spawns["Spawn1"].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
        {memory: {role: "builder"}});        
} else (builders.length < 3) {
    var newName = "Builder" + Game.time;
    console.log("Spawning new builder: " + newName);
    Game.spawns["Spawn1"].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
        {memory: {role: "builder"}});        
}
