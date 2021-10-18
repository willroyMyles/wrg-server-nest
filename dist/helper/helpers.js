"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = void 0;
const client_1 = require(".prisma/client");
const getStatus = (status) => {
    if (status == 'Status.OPEN')
        return client_1.Status.OPEN;
    if (status == 'Status.CANCELED')
        return client_1.Status.CANCELED;
    if (status == 'Status.COMPLETED')
        return client_1.Status.COMPLETED;
    if (status == 'Status.EXPIRED')
        return client_1.Status.EXPIRED;
    if (status == 'Status.PROCESSING')
        return client_1.Status.PROCESSING;
    return client_1.Status.OPEN;
};
exports.getStatus = getStatus;
//# sourceMappingURL=helpers.js.map