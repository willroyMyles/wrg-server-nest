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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const websockets_1 = require("@nestjs/websockets");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const message_service_1 = require("./message.service");
let MessagesWebsocet = class MessagesWebsocet {
    constructor(messageService) {
        this.messageService = messageService;
        this.server = http_1.createServer();
    }
    handleConnection(client, ...args) {
        client.onAny((args) => {
            console.log(args);
        });
    }
    handleSimpleEvent(data, client) {
        client.join(data);
        client.on(data, args => {
            client.in(data).emit(data, args);
        });
        return `you joined room ${data}`;
    }
    handleEvent(data, client) {
        client.join(data);
        client.on(data, async (args) => {
            console.log(`from room ${args} ${client.listenerCount(data)}`);
            console.log(client.rooms.size);
            var msg = await this.messageService.addToConversation(args.id, args);
            console.log(msg);
            client.emit(data, msg);
            client.in(data).emit(data, msg);
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
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_a = typeof http_1.Server !== "undefined" && http_1.Server) === "function" ? _a : Object)
], MessagesWebsocet.prototype, "wss", void 0);
__decorate([
    websockets_1.SubscribeMessage('simple'),
    __param(0, websockets_1.MessageBody()), __param(1, websockets_1.ConnectedSocket()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MessagesWebsocet.prototype, "handleSimpleEvent", null);
__decorate([
    websockets_1.SubscribeMessage('create'),
    __param(0, websockets_1.MessageBody()), __param(1, websockets_1.ConnectedSocket()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], MessagesWebsocet.prototype, "handleEvent", null);
__decorate([
    websockets_1.SubscribeMessage('leave'),
    __param(0, websockets_1.MessageBody()), __param(1, websockets_1.ConnectedSocket()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], MessagesWebsocet.prototype, "handleLeave", null);
MessagesWebsocet = __decorate([
    websockets_1.WebSocketGateway({ namespace: "msg", transports: ["websocket"] }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessagesWebsocet);
exports.default = MessagesWebsocet;
//# sourceMappingURL=messages.websocket.js.map