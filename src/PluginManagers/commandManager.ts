import { CommandContext } from "bdsx/bds/command";
import { allianceCommand } from "../CommandManagers/allianceCommand";

export class commandManager{

    public static init(command: String, commandContext: CommandContext) {
        switch(command.split(' ')[0].slice(1)){
            case 'alliance':
                new allianceCommand(command, commandContext);
            break;
        }
    }
}