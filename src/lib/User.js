"use strict";
var _User_player;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class User {
    constructor(player) {
        _User_player.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _User_player, player, "f");
    }
    get name() {
        return tslib_1.__classPrivateFieldGet(this, _User_player, "f").getName();
    }
    get xuid() {
        return tslib_1.__classPrivateFieldGet(this, _User_player, "f").getXuid();
    }
}
exports.default = User;
_User_player = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQXFCLElBQUk7SUFHckIsWUFBbUIsTUFBb0I7UUFGdkMsK0JBQXNCO1FBR2xCLCtCQUFBLElBQUksZ0JBQVcsTUFBTSxNQUFBLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNYLE9BQU8sK0JBQUEsSUFBSSxvQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDWCxPQUFPLCtCQUFBLElBQUksb0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFkRCx1QkFjQyJ9