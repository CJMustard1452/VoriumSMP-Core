"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandManager = void 0;
const allianceCommand_1 = require("../CommandManagers/allianceCommand");
class commandManager {
    static init(command, commandContext) {
        switch (command.split(' ')[0].slice(1)) {
            case 'alliance':
                new allianceCommand_1.allianceCommand(command, commandContext);
                break;
        }
    }
}
exports.commandManager = commandManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZE1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tYW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3RUFBcUU7QUFFckUsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBZSxFQUFFLGNBQThCO1FBQzlELFFBQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDbEMsS0FBSyxVQUFVO2dCQUNYLElBQUksaUNBQWUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ2pELE1BQU07U0FDVDtJQUNMLENBQUM7Q0FDSjtBQVRELHdDQVNDIn0=