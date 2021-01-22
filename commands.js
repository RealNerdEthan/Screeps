//console command to create creeps
Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Harvester1" );
Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Upgrader1");
Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Builder1");

//console commands to assign roles within the creep memory object
Game.creeps["Harvester1"].memory.role = "harvester";
Game.creeps["Upgrader1"].memory.role = "upgrader";
Game.creeps["Builder1"].memory.role = "builder";

//Spawn a creep AND assign a role right away 
Game.spawns["Spawn1"].spawnCreep( [WORK, CARRY, MOVE], "Harvester1", { memory: { role: "harvester" } } );
Game.spawns["Spawn1"].spawnCreep( [WORK, CARRY, MOVE], "Upgrader", { memory: { role: "upgrader" } } );
Game.spawns["Spawn1"].spawnCreep( [WORK, CARRY, MOVE], "Builder1", { memory: { role: "builder" } } );

//Spawn a harvester with many more work parts
Game.spawns["Spawn1"].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], "HarvesterBig", {memory: {role: "harvester"}});

//Active safe mode to give yourself time to write better defence code (limited usage and last a few hours)(can attack enemies when we're in safe mode:
Game.spawns["Spawn1"].room.controller.activateSafeMode();

//Create constuction site (for a tower):
Game.spawns["Spawn1"].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );