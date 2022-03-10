import { OnGatewayConnection } from "@nestjs/websockets";
import { Server } from "http";
import { Socket } from "socket.io";
import { MessageService } from "./message.service";
export default class MessagesWebsocet implements OnGatewayConnection {
    private messageService;
    constructor(messageService: MessageService);
    wss: Server;
    server: Server;
    handleConnection(client: Socket, ...args: any[]): void;
    handleSimpleEvent(data: string, client: Socket): string;
    handleEvent(data: string, client: Socket): string;
    handleLeave(data: string, client: Socket): void;
}
