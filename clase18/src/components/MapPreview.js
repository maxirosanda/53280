import { StyleSheet, Image} from 'react-native'

const MapPreview = ({latitude,longitude}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=15
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${latitude},${longitude}
    &key=AIzaSyCBZPbHfFf3Ogj7fE-BpCLibDEndbErOFU`

  return (
    <Image source={latitude ? {uri:mapPreviewUrl} : require("../../assets/map.jpg")} style={styles.image}/>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300   
     }
})