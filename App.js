import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, TextInput, Button, Alert } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView, styles.container]}>
      <LinearGradient style={[styles.container, { gap: 20 }]} start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      locations={[.5, 0.7]}
      colors={['#6441a5', 'black']}>
        <View style={{width:'100%', display:'flex',height:'10%', backgroundColor:'#6441a5',alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
        </View>
        <View style={styles.mainArea}>
          <Image source={{ uri: 'https://pngfre.com/wp-content/uploads/twitch-logo-png-from-pngfre-17-1024x619.png' }} style={{ width: 320,height:300}}></Image>
          <View style={styles.containerForm}>
            <Text style={{color:'white',fontSize:20}}>Usuario</Text>
              <TextInput style={styles.inputStyle}></TextInput>
            <Text style={{color:'white',fontSize:20}}>Senha</Text>
              <TextInput style={styles.inputStyle} secureTextEntry={true}>
                
              </TextInput>
            <Button title='Entrar'  onPress={()=> Alert.alert('Usuario logado! Seja bem vindo')}></Button>
          </View>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  safeAreaView: {
    paddingTop: Platform.OS === 'android' ? 35 : 0
  },
  mainArea:{
    display:'flex',
    alignItems:'center',
    gap:2
  },
  containerForm: {
    width:'70%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:4
  },
  inputStyle:{
    backgroundColor:'white',
    width:'70%',
    height:40,
    borderRadius:5,
    textAlign:'center'
  }
});