import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Separator } from './components/Separator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}
      >
        Yop!
      </Text>
      <Separator color='blue' />
      <TouchableOpacity>
        <Image
          style={{ width: 200, height: 300 }}
          source={{
            uri: "https://www.santevet.com/upload/admin/images/article/Chat%202/portrait_chat/les_5_sens_du_chat.jpg"
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
