import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default function App (){
return (
  <View style = {estilo.tela}>
  <Text style = {estilo.titulo}> Dicas Para Se Compreender Melhor Qualquer Conteúdo Proposto:</Text>
  <Text style = {estilo.titulo1}> Procure Estudar Em Locais Silenciosos:</Text>
  <Text style = {estilo.titulo2}> Por mais relativo que seja esse item, estudar em ambientes calmos e tranquilos te ajuda a ter uma maior concentração, possibilitando um melhor entendimento sobre o assunto abordado; </Text>
  <Text style= {estilo.titulo3}> Compartilhe o que você estudou com algum colega: </Text>
  <Text style= {estilo.titulo4}> Depois de te entendido a parte téórica, procure explicar a uma pessoa (seja um amigo, familiar, namorada, dentre outros) tudo o que você entendeu. Lembre-se: Não basta somente saber a parte teórica se você não sabe aplicá-la na prática (no seu cotidiano), então pratique desde já e terá
resultados satisfatórios!! </Text>
  </View>
);
}

const estilo = StyleSheet.create({
tela:{
flex:1,
padding: 30,
textAlign: 'center',
backgroundColor: '#B0E0E6',
},
titulo:{
 fontSize: 30,
 textAlign: 'center',
 color: '#000080',
 fontWeight: 'bold',
},
titulo1:{ 
 paddingTop: 30,
 paddingBottom: 30,
 fontSize: 20,
 fontWeight: 'bold',
 textAlign: 'left',
},
titulo2:{ 
 fontSize: 20,
 textAlign: 'left',
},
titulo3:{
 paddingTop: 30,
 paddingBottom: 30,
 fontSize: 20,
 fontWeight: 'bold',
 textAlign: 'left', 
},
titulo4:{
 fontSize: 20,
 textAlign: 'left',  
}
});


