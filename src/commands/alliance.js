"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const nativetype_1 = require("bdsx/nativetype");
const create_1 = require("./sub/create");
const User_1 = require("../lib/User");
command_1.command.register("alliance", "Access to alliance sub-commands.")
    .overload((params, origin) => {
    (0, create_1.default)(new User_1.default(origin.getEntity()), params);
}, { option: command_1.command.enum("option.create", "create"), name: nativetype_1.CxxString })
    .overload(param => {
}, { option: command_1.command.enum("option.invite", "invite"), player: nativetype_1.CxxString })
    .overload(param => {
}, { option: command_1.command.enum("option.remove", "remove"), player: nativetype_1.CxxString })
    .overload(param => {
}, { option: command_1.command.enum("option.accept", "accept"), name: nativetype_1.CxxString })
    .overload(param => {
}, { option: command_1.command.enum("option.uninvite", "uninvite"), player: nativetype_1.CxxString })
    .overload(param => {
}, { option: command_1.command.enum("option.info", "info") })
    .overload(param => {
}, { option: command_1.command.enum("option.leave", "leave") })
    .overload(param => {
}, { option: command_1.command.enum("option.disband", "disband") });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsaWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGxpYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVNBLDBDQUF1QztBQUN2QyxnREFBNEM7QUFDNUMseUNBQWtDO0FBRWxDLHNDQUErQjtBQUUvQixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsa0NBQWtDLENBQUM7S0FDM0QsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3pCLElBQUEsZ0JBQU0sRUFBQyxJQUFJLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDaEUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVMsRUFBRSxDQUFDO0tBQ3ZFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUVsQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxzQkFBUyxFQUFFLENBQUM7S0FDekUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBRWxCLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLHNCQUFTLEVBQUUsQ0FBQztLQUN6RSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFFbEIsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQVMsRUFBRSxDQUFDO0tBQ3ZFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUVsQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLHNCQUFTLEVBQUUsQ0FBQztLQUM3RSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFFbEIsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO0tBQ2xELFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUVsQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDcEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBRWxCLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMifQ==