// import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import styles from "./Login.module.css" 

export function SignIn({Ingresar, Registrate}){
    const[email, setEmail]=useState("")
    const[contraseña, setContraseña]= useState("")
    function handleInputChangeE(e){
        setEmail(e.target.value)
    }
    function handleInputChangeC(e){
        setContraseña(e.target.value)
    }
    
    useEffect(() => {
        // const connection = createConnection(serverUrl, roomId);
        // connection.connect();
        // return () => {
        //   connection.disconnect();
        // };
        
      }, []);

      // ...
    
//     useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         console.log('user is logged in')
//         setUser(user)
//       } else {
//         console.log('user is logged out')
//         setUser(false)
//       }
//     })
//   }, [])

    return (
        <div> 
        <form className={styles.form}>
            {/* <input className={styles.input} placeholder="Nombre"/> */}
            <input className={styles.input} placeholder="Correo" value={email} onChange={handleInputChangeE}/>
            <input className={styles.input} type="password" placeholder="Contraseña" value={contraseña} onChange={handleInputChangeC}/>
            {/* <Link to="/Area"> */}
            <button className={styles.btn} onClick={(e)=>Ingresar(e,email,contraseña)}>Ingresar</button>
            {/* </Link> */}
        </form>
        <p className={styles.text}>¿No tienes una cuenta? <span className={styles.span} onClick={Registrate}>Regístrate</span></p>
    </div>
    )
}