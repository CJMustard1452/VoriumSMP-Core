"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const command_1 = require("bdsx/command");
class Command {
    constructor(name, description, permissionLevel, params, subCommands) {
        this.name = name;
        this.description = description;
        this.permissionLevel = permissionLevel;
        this.params = params;
        this.subCommands = subCommands;
    }
    execute() {
        try {
            const c = command_1.command.register(this.name, this.description, this.permissionLevel).overload((params, origin, out) => {
                console.log("Running");
            }, Object.assign(this.params));
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.Command = Command;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsMENBQXVDO0FBZW5DLE1BQXNCLE9BQU87SUFPekIsWUFBbUIsSUFBWSxFQUFFLFdBQW1CLEVBQUUsZUFBdUMsRUFBRSxNQUE0QyxFQUFFLFdBQW9DO1FBQzdLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTSxPQUFPO1FBQ1YsSUFBSTtZQUNBLE1BQU0sQ0FBQyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDM0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMxQixDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7Q0FTSjtBQWhDRCwwQkFnQ0MifQ==