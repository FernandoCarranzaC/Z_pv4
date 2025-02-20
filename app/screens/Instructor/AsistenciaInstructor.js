import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import InstrAsist_Titulo from "../../Components/Instructor/Instr_Asist/InstrAsist_Titulo";
import InstrAsist_Grupo from "../../Components/Instructor/Instr_Asist/InstrAsist_Grupo";

export default function AsistenciaInstructor({route}) {
  const {idPers}=route.params;
     return (
   <View>
     <InstrAsist_Titulo/>
     <InstrAsist_Grupo idPers={idPers}/>
   </View>
  
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
  marginBottom: 100,
  },
  
});
