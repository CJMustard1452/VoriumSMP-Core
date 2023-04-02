import { RelativeFloat } from "bdsx/bds/blockpos";
import { ActorCommandSelector, ActorWildcardCommandSelector, CommandContext, CommandPermissionLevel, CommandRawText, PlayerCommandSelector } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { CommandEnum } from "bdsx/commandenum";
import { int32_t, float32_t, bool_t, CxxString } from "bdsx/nativetype";

export type CommandParameter =
    typeof int32_t |
    typeof float32_t|
    typeof bool_t |
    typeof CxxString |
    typeof ActorWildcardCommandSelector |
    typeof PlayerCommandSelector |
    typeof ActorCommandSelector |
    typeof RelativeFloat |
    typeof CommandRawText

    export abstract class Command<V extends string[] = []> {
        public name: string;
        public description: string;
        public permissionLevel: CommandPermissionLevel;
        public params: { [name: string]: CommandParameter };
        public subCommands?: CommandEnum<V[number]>

        public constructor(name: string, description: string, permissionLevel: CommandPermissionLevel, params: { [name: string]: CommandParameter }, subCommands?: CommandEnum<V[number]>) {
            this.name = name;
            this.description = description;
            this.permissionLevel = permissionLevel;
            this.params = params;
            this.subCommands = subCommands;
        }

        public execute(): void {
            try {
                const c = command.register(this.name, this.description, this.permissionLevel).overload((params, origin, out) => {
                    console.log("Running")
                }, Object.assign(this.params));
            } catch (err) {
                console.error(err);
            }
        }

        /** @function run Runs the command given the context */
        protected abstract run(ctx: CommandContext): void;

        /** @function allow Checks if the source of the context can run the command.
         * If the source of the context cannot run the command, the command will not be run
         */
        protected abstract allow(ctx: CommandContext): boolean;
    }