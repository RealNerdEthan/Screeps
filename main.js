var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log("Clearing non-existing creep memory:", name);
        }
    }
    
    // var tower = Game.getObjectById('54962b91eb35c212d000adae');
    // if(tower) {
    //     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    //         filter: (structure) => structure.hits < structure.hitsMax
    //     });
    //     if(closestDamagedStructure) {
    //         tower.repair(closestDamagedStructure);
    //     }

    //     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //     if(closestHostile) {
    //         tower.attack(closestHostile);
    //     }
    // }
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == "harvester");
    console.log("Harvesters: " + harvesters.length);

    if(harvesters.length < 2) {
        var newName = "Harvester" + Game.time;
        console.log("Spawning new harvester: " + newName);
        Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: "harvester"}});        
    }

    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == "upgrader");
    console.log("Upgraders: " + upgraders.length);

    if(upgraders.length < 1) {
        var newName = "Upgrader" + Game.time;
        console.log("Spawning new upgrader: " + newName);
        Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: "upgrader"}});        
    }

    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == "builder");
    console.log("Builders: " + builders.length);

    if(builders.length < 2) {
        var newName = "Builder" + Game.time;
        console.log("Spawning new builder: " + newName);
        Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: "builder"}});        
    }

    
    if(Game.spawns["Spawn1"].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns["Spawn1"].spawning.name];
        Game.spawns["Spawn1"].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns["Spawn1"].pos.x + 1, 
            Game.spawns["Spawn1"].pos.y, 
            {align: "left", opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == "harvester") {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == "upgrader") {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == "builder") {
            roleBuilder.run(creep);
        }
    }
    // for(var name in Game.rooms) {
    //     console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    // }
}