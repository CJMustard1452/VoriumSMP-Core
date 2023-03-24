import { command } from "bdsx/command";
module.exports = {
    execute(){
        console.log("[VoriumCore] Enabled.");
        command.register('alliance', 'Provides access alliance commands.');
    }
}