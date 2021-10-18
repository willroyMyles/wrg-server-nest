import { Status } from ".prisma/client"


export const getStatus =(status : string) => {
    if(status == 'Status.OPEN') return Status.OPEN;
    if(status == 'Status.CANCELED') return Status.CANCELED;
    if(status == 'Status.COMPLETED') return Status.COMPLETED;
    if(status == 'Status.EXPIRED') return Status.EXPIRED;
    if(status == 'Status.PROCESSING') return Status.PROCESSING;
    return Status.OPEN;
}