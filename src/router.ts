/**
 * En esta parte podemos agregar todas las rutas que sean necesarias para nuentro 
 * proyecto
 *  **/

import { Router } from "express";
const router = Router()

/**Autenticacion y Registro */
router.post('/auth/registro',(req,res)=>{
    console.log(req.body)
})

export default router