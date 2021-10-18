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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const websockets_1 = require("@nestjs/websockets");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
let MessagesWebsocet = class MessagesWebsocet {
    constructor() {
        this.server = (0, http_1.createServer)();
    }
    handleConnection(client, ...args) {
        client.onAny((args) => {
            console.log(args);
        });
    }
    handleEvent(data, client) {
        client.join(data);
        client.on(data, (args) => {
            console.log(`from room ${args}`);
            client.emit(data, "hello you =]");
            client.send(`your data is!!!!!!!!`);
        });
        return `you joined room ${data}`;
    }
    handleLeave(data, client) {
        console.log(client.listenerCount(data));
        client.emit(data, `you left room ${data}`);
        client.leave(data);
        if (client.listenerCount(data) == 0) {
            client.removeListener(data, (args) => null);
            client.disconnect(true);
        }
        console.log(client.listenerCount(data));
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", http_1.Server)
], MessagesWebsocet.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('create'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_a = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], MessagesWebsocet.prototype, "handleEvent", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leave'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MessagesWebsocet.prototype, "handleLeave", null);
MessagesWebsocet = __decorate([
    (0, websockets_1.WebSocketGateway)(4000, { namespace: "msg", transports: ["websocket"] })
], MessagesWebsocet);
exports.default = MessagesWebsocet;
//# sourceMappingURL=messages.websocket.js.map