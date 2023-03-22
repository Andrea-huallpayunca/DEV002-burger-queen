import { useState } from "react";
import { Encabezado } from "../Encabezado/Encabezado";
import { ModalSalirP } from "../Encabezado/Perfil/ModalSalir";
import styles from "./Kitchen.module.css"
import { PedidosPorCocinar } from "./PedidosPorCocinar";

export function Kitchen(){
    const Vistas=[""]
    const Stylos=[
        styles.Sup
    ]
    const [modal, setModal]=useState("") 
    function CerrarM(){
        console.log('Click equis')
        setModal("")
    }
    function MostrarModal(){
        
        if(modal==""){
            console.log("mostrarModal")
            // setCard("")
            setModal(<ModalSalirP Equis={CerrarM}/>)
            
        } else{
            setModal("")
        }
    }

    return(
        <div className={styles.fondo}>
            <Encabezado  ModalSalir={MostrarModal} Subs={Vistas} Estilos={Stylos} clickVista={()=>{}} /> 
            <PedidosPorCocinar/>
            {modal}

        </div>
    )
}