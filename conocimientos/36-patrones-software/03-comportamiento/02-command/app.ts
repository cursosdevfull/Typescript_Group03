import { ActualizacionCatalogoCommand, Command, ExtornoCommand, NotificacionCommand, PedidoCommand, PostulanteCommand } from "./command";

const queue: Command[] = [
    new PedidoCommand({ pedidoId: 1, clienteId: 1, productos: ['producto1', 'producto2'] }),
    new ExtornoCommand({ pedidoId: 1, clienteId: 1 }),
    new PedidoCommand({ pedidoId: 2, clienteId: 2, productos: ['producto3', 'product o4'] }),
    new PedidoCommand({ pedidoId: 3, clienteId: 3, productos: ['producto5', 'producto6'] }),
    new PedidoCommand({ pedidoId: 4, clienteId: 4, productos: ['producto7', 'producto8'] }),
    new ActualizacionCatalogoCommand({ catalogoId: 1, productos: ['producto1', 'producto2', 'producto3', 'producto4', 'producto5', 'producto6', 'producto7', 'producto8'] }),
    new PostulanteCommand({ postulanteId: 1, datos: { nombre: 'nombre1', apellido: 'apellido1', edad: 20 } }),
    new NotificacionCommand({ sender: 'sender1', email: 'email1', subject: 'subject1', message: 'message1' }),
]

queue.forEach(command => command.execute())