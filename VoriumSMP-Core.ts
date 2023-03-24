import { events } from "bdsx/event";

events.serverOpen.on(() => {
    require('./Resources/Events/serverOpen').execute();
});

events.command.on((command, player, commandContext)=>{
    require('./Resources/Commands/commandManager').execute(command, player, commandContext);
    if(require('./Configuration/WhitelistedCommands.json').includes(command.split(' ')[0].slice(1))) return 0;
});

events.playerSleepInBed.on(event => {
    require('./Resources/Events/onSleep').execute(event.player);
});


