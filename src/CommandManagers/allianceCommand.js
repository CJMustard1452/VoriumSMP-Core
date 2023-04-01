"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allianceCommand = void 0;
const disband_1 = require("./AllianceSubcommands/disband");
const invite_1 = require("./AllianceSubcommands/invite");
const create_1 = require("./AllianceSubcommands/create");
const remove_1 = require("./AllianceSubcommands/remove");
const leave_1 = require("./AllianceSubcommands/leave");
const info_1 = require("./AllianceSubcommands/info");
const fs_1 = require("fs");
class allianceCommand {
    constructor(command, commandContext) {
        this.allianceData = JSON.parse((0, fs_1.readFileSync)('../plugin_data/VoriumSMP-Core/alliancedata.json', 'utf-8'));
        const player = commandContext.origin.getEntity();
        if (!(player === null || player === void 0 ? void 0 : player.isPlayer()))
            return;
        switch (command.split(' ')[1]) {
            default:
                player.sendMessage('§l§3Alliance Sub-Commands:§r\n§c/alliance create (Alliance Name) §7 - Creates an alliance.\n§c/alliance disband §7- Deletes your alliance.\n§c/alliance invite (Player Name) §7- Invites choosen player.\n§c/alliance remove (Player Name) §7- Removes choosen player from your alliance.\n§c/alliance leave §7- Allowes you to leave your current alliance.\n§c/alliance info §7- Shows information about your current alliance.');
                break;
            case 'create':
                create_1.allianceCreate.init(player, commandContext, this.allianceData);
                break;
            case 'disband':
                disband_1.allianceDisband.init(player, commandContext, this.allianceData);
                break;
            case 'remove':
                remove_1.allianceRemove.init(player, commandContext, this.allianceData);
                break;
            case 'info':
                info_1.allianceInfo.init(player, commandContext, this.allianceData);
                break;
            case 'invite':
                invite_1.allianceInvite.init(player, commandContext, this.allianceData);
                break;
            case 'leave':
                leave_1.allianceLeave.init(player, commandContext, this.allianceData);
                break;
        }
    }
}
exports.allianceCommand = allianceCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsaWFuY2VDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsaWFuY2VDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUFnRTtBQUNoRSx5REFBOEQ7QUFDOUQseURBQThEO0FBQzlELHlEQUE4RDtBQUM5RCx1REFBNEQ7QUFDNUQscURBQTBEO0FBRTFELDJCQUErQjtBQUUvQixNQUFhLGVBQWU7SUFJeEIsWUFBbUIsT0FBZSxFQUFFLGNBQThCO1FBRmxFLGlCQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFBLGlCQUFZLEVBQUMsaURBQWlELEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUdoRyxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pELElBQUcsQ0FBQyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLEVBQUUsQ0FBQTtZQUFFLE9BQU87UUFDL0IsUUFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO1lBQ3pCO2dCQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsbWFBQW1hLENBQUMsQ0FBQztnQkFDNWIsTUFBTTtZQUNOLEtBQUssUUFBUTtnQkFDVCx1QkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0QsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVix5QkFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEUsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCx1QkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0QsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxtQkFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0QsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCx1QkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0QsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixxQkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUQsTUFBTTtTQUNiO0lBQ0wsQ0FBQztDQUNKO0FBL0JELDBDQStCQyJ9