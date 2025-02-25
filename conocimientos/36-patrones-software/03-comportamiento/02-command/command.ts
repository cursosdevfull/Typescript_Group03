type TPayload = {
    payload: Record<string, any>
}

export type TPedido = {
    pedidoId: number;
    clienteId: number;
    productos: string[];
}

export type TExtorno = {
    pedidoId: number;
    clienteId: number;
}

export type TActualizacionCatalogo = {
    catalogoId: number;
    productos: string[];
}

export type TPostulante = {
    postulanteId: number;
    datos: Record<string, any>;
}

export type TNotificacion = {
    sender: string;
    email: string;
    subject: string;
    message: string;
}

export abstract class Command {
    protected queueTarget!: string
    protected mensaje!: TPayload

    execute() {
        console.log(`Command ${this.queueTarget} executed with payload: ${JSON.stringify(this.mensaje)}`)
    }
}

export class PedidoCommand extends Command {
    constructor(payload: TPedido) {
        super()
        this.queueTarget = 'pedido'
        this.mensaje = { payload }
    }
}

export class ExtornoCommand extends Command {
    constructor(payload: TExtorno) {
        super()
        this.queueTarget = 'extorno'
        this.mensaje = { payload }
    }
}

export class ActualizacionCatalogoCommand extends Command {
    constructor(payload: TActualizacionCatalogo) {
        super()
        this.queueTarget = 'actualizacionCatalogo'
        this.mensaje = { payload }
    }
}

export class PostulanteCommand extends Command {
    constructor(payload: TPostulante) {
        super()
        this.queueTarget = 'postulante'
        this.mensaje = { payload }
    }
}

export class NotificacionCommand extends Command {
    constructor(payload: TNotificacion) {
        super()
        this.queueTarget = 'notificacion'
        this.mensaje = { payload }
    }
}