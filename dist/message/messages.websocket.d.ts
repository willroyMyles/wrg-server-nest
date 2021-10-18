/// <reference types="node" />
import { OnGatewayConnection } from "@nestjs/websockets";
import { Server } from "http";
import { Socket } from "socket.io";
export default class MessagesWebsocet implements OnGatewayConnection {
    wss: Server;
    server: Server;
    handleConnection(client: Socket, ...args: any[]): void;
    handleEvent(data: string, client: Socket): string;
    handleLeave(data: string, client: Socket): void;
}
