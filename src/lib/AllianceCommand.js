"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const Command_1 = require("./Command");
const command_2 = require("bdsx/command");
const player_1 = require("bdsx/bds/player");
const options = ["subCommands", "create", "destroy", "invite"];
class AllianceCommand extends Command_1.Command {
    constructor() {
        super("alliance", "The alliance command", command_1.CommandPermissionLevel.Admin, {}, command_2.command.enum("subCommands", "create", "destroy", "invite") // TODO ugh
        );
    }
    run(ctx) {
        var _a;
        if (ctx.origin instanceof player_1.ServerPlayer) {
            const sub = this.subCommands;
            switch ((_a = this.subCommands) === null || _a === void 0 ? void 0 : _a.name) {
                case "create":
                    this.create(ctx);
            }
        }
    }
    create(ctx) {
    }
    allow(ctx) {
        // Implement your permission logic here
        return true;
    }
}
exports.default = AllianceCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsaWFuY2VDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWxsaWFuY2VDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTBFO0FBQzFFLHVDQUFvQztBQUNwQywwQ0FBdUM7QUFDdkMsNENBQStDO0FBRS9DLE1BQU0sT0FBTyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFFOUQsTUFBcUIsZUFBZ0IsU0FBUSxpQkFBdUI7SUFDaEU7UUFDSSxLQUFLLENBQ0QsVUFBVSxFQUNWLHNCQUFzQixFQUN0QixnQ0FBc0IsQ0FBQyxLQUFLLEVBQzVCLEVBQUUsRUFDRixpQkFBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxXQUFXO1NBQ3pFLENBQUM7SUFDTixDQUFDO0lBRVMsR0FBRyxDQUFDLEdBQW1COztRQUM3QixJQUFJLEdBQUcsQ0FBQyxNQUFNLFlBQVkscUJBQVksRUFBRTtZQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBWSxDQUFDO1lBQzlCLFFBQVEsTUFBQSxJQUFJLENBQUMsV0FBVywwQ0FBRSxJQUFJLEVBQUU7Z0JBQzVCLEtBQUssUUFBUTtvQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRXhCO1NBQ0o7SUFDTCxDQUFDO0lBRU8sTUFBTSxDQUFDLEdBQW1CO0lBRWxDLENBQUM7SUFFUyxLQUFLLENBQUMsR0FBbUI7UUFDL0IsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQTlCRCxrQ0E4QkMifQ==