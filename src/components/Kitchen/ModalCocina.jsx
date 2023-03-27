import { CambiarPropTimeEnCocina } from "../../app/firestore"

export function ModalCocina({Equis, pedido}){
    let start=pedido.time[0]
    let last=pedido.time.length
    let finish=pedido.time[last-1]

    let calculo=pedido["time en cocina"]

    let dividiendoStart=start.split(":")
    let horaStart=Number(dividiendoStart[0])
    let minutosStart=Number(dividiendoStart[1])
    let segStart=Number(dividiendoStart[2])

    let dividiendoFinish=finish.split(":")
    let horaFinish=Number(dividiendoFinish[0])
    let minutosFinish=Number(dividiendoFinish[1])
    let segFinish=Number(dividiendoFinish[2])

    const tiempo= (horaFinish-horaStart)+":"+(minutosFinish-minutosStart)+":"+(segFinish-segStart)
    function EnviarTimeCalculado(){
        // CambiarPropTimeEnCocina(pedido.pedido,tiempo)
        Equis()
    }
    return(
        <div className="fondoModal">
            <div className="Modal">
                {/* <button key="01" onClick={Equis} className="btnX">X</button> */}
                <p key="02" className="text">Resumen de la operación:</p>
                
                <p key="03"  className="text">Inicio: {start}</p>
                <p key="04"  className="text">Fin: {finish}</p> 
                <p key={"05"} className="text">Cálculo: {tiempo}</p> 
                <p key={"05-1"} className="text">CálculoProp: {calculo}</p> 
                <button key="06" className="btn" onClick={EnviarTimeCalculado}>Siguiente</button>
            </div>
        </div>
    )
}