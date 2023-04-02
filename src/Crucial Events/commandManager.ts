import { allianceCommand } from "../Commands/allianceCommand";
import { CommandContext } from "bdsx/bds/command";

export class commandManager {

    public static init(command: String, commandContext: CommandContext): void {
        if(command.split(' ')[0].slice(1) == 'alliance') {
            new allianceCommand(command, commandContext);
        }
    }
}