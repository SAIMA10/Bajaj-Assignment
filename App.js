// import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import HomeScreen from './components/hooks/pages/Home';
import ReviewForm from "./components/hooks/pages/Form";
import LottieAnimation from "./components/hooks/pages/LottieAnimation";
import MotiAnimation from "./components/hooks/pages/MotiAnimation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <QueryClientProvider client={queryClient}>
        <LottieAnimation/>
        <MotiAnimation />
        <HomeScreen />
          <Image style={styles.image}
            source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/test-617d8.appspot.com/o/KdV41W.jpg?alt=media&token=1b3b05bb-8aab-4d55-a3ba-3007607eec68'
          }}
        />
        <ReviewForm />
      </QueryClientProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,  
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 50
  },
  scrollView: {
    backgroundColor: '#e6dce5'
  },
  block: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  }
});

export default App;