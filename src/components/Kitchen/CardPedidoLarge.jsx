import { CambiarPropState, CambiarPropTimeEnCocina, EnviandoHora } from "../../app/firestore"
import "./CardPedidoLarge.css"
export function CardPedidoLarge({pedido,quitarPedido, MostrarModal}){
    function Listo(e){
        e.preventDefault()
        const date = new Date();
        const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        let horita=hour+":"+minutes+":"+seconds

        let start=pedido.time[0]
        // let finish=horita
    
        let dividiendoStart=start.split(":")
        let horaStart=Number(dividiendoStart[0])
        let minutosStart=Number(dividiendoStart[1])
        let segStart=Number(dividiendoStart[2])
    
        // let dividiendoFinish=finish.split(":")
        // let horaFinish=Number(dividiendoFinish[0])
        // let minutosFinish=Number(dividiendoFinish[1])
        // let segFinish=Number(dividiendoFinish[2])

        const tiempo= (hour-horaStart)+":"+(minutes-minutosStart)+":"+(seconds-segStart)

        EnviandoHora(pedido.pedido,horita)
        CambiarPropTimeEnCocina(pedido.pedido,tiempo)
        CambiarPropState(pedido.pedido,"Listo para servirse")

        quitarPedido(pedido.pedido)
        MostrarModal(pedido, horita)
        
        }
    
    return(
        <div className="column all">
            <div className="column fondo" key={"01"}>
                <div className="row espacio text" key={"01"}>
                    <p className="bold non">Pedido #</p>
                    <p className="non">{pedido.pedido}</p>
                </div>
                {/* <div><p>Cliente:</p><p>{pedido.cliente}</p></div> */}
                <div className="column espacio" key={"02"}>
                    <div className=" row  between text bold"> <p className="non">Productos</p> <p className="non">Unidades</p></div>
                    <div className="white">
                    {pedido.productos.map((producto, i)=> {
                        return(
                            <div className="row between" key={i}>
                                <p className="textMini" key={i}>{producto.item}</p>
                                <p className="puntos" key={i+1}></p>
                                <p className="textMini" key={i+2}>{producto.quantity}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="row espacio text" key={"03"}>
                    <p className="bold non" key={"01"}>Tiempo de inicio: </p> <p key={"02"} className="non">{pedido.time[0]}</p> 
                </div>
            </div>
            <button className="bttn text" key={"02"} onClick={Listo}>Listo para servirse</button>
        </div>
    )
}