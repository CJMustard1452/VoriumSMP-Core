import { CommandContext } from "bdsx/bds/command";
module.exports = {
    execute(command: string, player: string, commandContext: CommandContext) {
        switch(command.split(' ')[0].slice(1)){
            case 'alliance':
                require('./allianceCommand').execute(command, player, commandContext)
        }
    }
}