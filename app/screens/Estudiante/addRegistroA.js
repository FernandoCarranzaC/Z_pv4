import React from "react";
import { View } from "react-native";
import AddRegA_Titulos from "../../Components/Estudiante/Actividad/addRegA_Titulo";
import AddRegA_Actividad from "../../Components/Estudiante/Actividad/addRegA_Actividad";

export default function addRegistroA({route}) {
 const{idDepto,idEst}=route.params;
  return(
    <View>
      <AddRegA_Titulos/>
      <AddRegA_Actividad idDepto={idDepto} idEst={idEst}/>
    </View>

   
    );
}

