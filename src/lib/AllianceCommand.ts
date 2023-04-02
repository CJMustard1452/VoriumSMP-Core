import { CommandContext, CommandPermissionLevel } from "bdsx/bds/command";
import { Command } from "./Command";
import { command } from "bdsx/command";
import { ServerPlayer } from "bdsx/bds/player";

const options = ["subCommands", "create", "destroy", "invite"]

export default class AllianceCommand extends Command<typeof options> {
    constructor() {
        super(
            "alliance",
            "The alliance command",
            CommandPermissionLevel.Admin,
            {},
            command.enum("subCommands", "create", "destroy", "invite") // TODO ugh
        );
    }

    protected run(ctx: CommandContext): void {
        if (ctx.origin instanceof ServerPlayer) {
            const sub = this.subCommands!;
            switch (this.subCommands?.name) {
                case "create":
                    this.create(ctx);

            }
        }
    }

    private create(ctx: CommandContext): void {

    }

    protected allow(ctx: CommandContext): boolean {
        // Implement your permission logic here
        return true;
    }
}