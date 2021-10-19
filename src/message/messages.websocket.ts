import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer,  } from "@nestjs/websockets";
import { createServer, Server } from "http";
import {Socket  } from "socket.io"
import { MessageService } from "./message.service";

@WebSocketGateway({namespace : "msg" ,transports : ["websocket"]})
export default class MessagesWebsocet implements OnGatewayConnection {

    constructor(private messageService : MessageService){}

    @WebSocketServer()
    wss : Server;

    server : Server = createServer();

    

    
    handleConnection(client: Socket, ...args: any[]) {
        client.onAny((args)=>{
            console.log(args);
            
        })
        
    }

    @SubscribeMessage('simple')
    handleSimpleEvent(@MessageBody() data : string, @ConnectedSocket() client : Socket){
        client.join(data);

        client.on(data, args => {
            client.emit(data, args)
            client.in(data).emit(data, args)
        })
    }

    @SubscribeMessage('create')
    handleEvent(@MessageBody() data : string, @ConnectedSocket() client : Socket){

        client.join(data);
        
        client.on(data, async (args)=>{
            console.log(`from room ${args} ${client.listenerCount(data)}`);
            console.log(client.rooms.size);

            //get message and send to databse
            var msg = await this.messageService.addToConversation(args.id, args);
            console.log(msg);
            


            client.emit(data, msg)
            client.in(data).emit(data, msg)
                        
        })
        return `you joined room ${data}`;
    }

    @SubscribeMessage('leave')
    handleLeave(@MessageBody() data : string, @ConnectedSocket() client : Socket){
        console.log(client.listenerCount(data));
        client.emit(data, `you left room ${data}`)
        client.leave(data);        
        
        if(client.listenerCount(data) == 0 ){
            client.removeListener(data, (args)=> null);
            client.disconnect(true);
        }

        console.log(client.listenerCount(data));

    }

    

    
}

