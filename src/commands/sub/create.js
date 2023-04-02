"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AllianceModule_1 = require("../../lib/AllianceModule");
const Util_1 = require("../../lib/Util");
const create = (user, params) => {
    if (AllianceModule_1.default.ownsAlliance(user.name)) {
        return; // do message
    }
    if (!params.name) {
        return; // do message
    }
    if (AllianceModule_1.default.exists(user.name)) {
        return; // do message
    }
    (0, Util_1.broadcast)("do message");
    AllianceModule_1.default.create(params.name, user.name);
};
exports.default = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkRBQXNEO0FBRXRELHlDQUEyQztBQUUzQyxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQVUsRUFBRSxNQUEyQixFQUFFLEVBQUU7SUFDdkQsSUFBSSx3QkFBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEMsT0FBTSxDQUFDLGFBQWE7S0FDdkI7SUFDRCxJQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNiLE9BQU0sQ0FBQyxhQUFhO0tBQ3ZCO0lBQ0QsSUFBSSx3QkFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEMsT0FBTSxDQUFDLGFBQWE7S0FDdkI7SUFFRCxJQUFBLGdCQUFTLEVBQUMsWUFBWSxDQUFDLENBQUE7SUFFdkIsd0JBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakQsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=