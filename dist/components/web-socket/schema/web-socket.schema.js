"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketSchema = exports.Socket = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("../../user/schema/user.schema");
let Socket = class Socket {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Socket id of the user.' }),
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Socket.prototype, "socketId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name for the user.' }),
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: user_schema_1.User.name
    }),
    __metadata("design:type", String)
], Socket.prototype, "playerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The status of the document.' }),
    (0, mongoose_1.Prop)({ default: true, index: true }),
    __metadata("design:type", Boolean)
], Socket.prototype, "is_active", void 0);
Socket = __decorate([
    (0, mongoose_1.Schema)({ collection: 'sockets', timestamps: true })
], Socket);
exports.Socket = Socket;
exports.SocketSchema = mongoose_1.SchemaFactory.createForClass(Socket);
//# sourceMappingURL=web-socket.schema.js.map