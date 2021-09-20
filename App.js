
import * as React from 'react';
import { View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,TouchableOpacity,FlatList} from 'react-native';
  import { RFValue } from "react-native-responsive-fontsize";
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from './config'
import call from 'react-native-phone-call';
import AppHeader from './components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
      requestedBooksList : [],
      
      
    };
  }



  componentDidMount = () => {
    this.requestRef = db.collection("phones")
    .onSnapshot((snapshot)=>{
      var requestedBooksList = snapshot.docs.map((doc) =>
        doc.data()
        
       )
      this.setState({
        requestedBooksList : requestedBooksList
      });
      console.log(requestedBooksList)
    })
  };

  
  
  
    

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{

    return (
<View style={styles.callcontainer}>
        <Text style={styles.heading}>{item.name}: </Text>

      <TouchableOpacity style={styles.button}
              onPress ={()=>{
                {
                  const args = {
                  number:item.num.toString(),
                  prompt: true,
                };
                // Make a call
                call(args).catch(console.error);}
              }}
              >
                <Ionicons name={"call-outline"} size={RFValue(30)} color={"white"} />

              <Text style={styles.btntext}>{item.num}</Text>
            </TouchableOpacity>
            </View>
      
    )
  }

  render(){
    return(
      <SafeAreaProvider style={styles.container}>



<SafeAreaView style={styles.droidSafeArea} />
        <AppHeader/>
        <View style={{flex:1}}>
          {
            this.state.requestedBooksList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>No numbers found</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestedBooksList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(5)
  },
  subContainer:{
    display:'flex',
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  callcontainer:{
    marginTop:RFValue(5),
    flex:1,
    display:'flex',
    flexDirection:'row',
    marginBottom:60,
    
  },
  

  heading:{
    flex:0.3,
    marginTop: 10,
    fontSize: 30,
    paddingLeft: 30,
    fontWeight:'bold'
   
  },
  btntext:{
    color: "white",
    fontSize: RFValue(28),
    fontWeight:'400',
    marginLeft:50,
  },
  button:{
    flex:0.4,
    display:'flex',
    flexDirection:'row',
    paddingTop:10,
    
    paddingLeft:RFValue(10),
    width: 290,
    height: 100,
    borderRadius: 50,
    marginLeft: RFValue(50),
   
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})
