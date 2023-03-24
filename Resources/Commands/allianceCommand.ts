import { CommandContext } from "bdsx/bds/command";
module.exports = {
    execute(command: string, playerName: string, commandContext: CommandContext) {
        const player = commandContext.origin.getEntity();
        if(!player?.isPlayer()) return;
        switch(command.split(' ')[1]){
            default:
                player.sendMessage("§a========= §c§lAlliance Sub-Commands§r §a==========\n§c/alliance create (Alliance Name) §7- Creates an alliance.\n§c/alliance delete §7- Deletes your alliance.\n§c/alliance invite (Player Name) §7- Invites choosen player.\n§c/alliance leave §7- Lets you leave your current alliance.\n§c/alliance customize §7- Opens the customization menu.\n§a==========================================")
                break;
        }
    }
}