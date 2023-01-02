import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Auth0 from 'react-native-authzero';
console.log({Auth0})
const {logout, login, multiply, useAuth0}= Auth0

multiply(3,4).then((product)=> {
  console.log(product)
})

logout().then((result)=> {
  console.log({result})
})

login().then((resultLogin) => { console.log({resultLogin}) })

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const useAuth0Methods = useAuth0()
  console.debug("useAuth0Methods:", useAuth0Methods);


  React.useEffect(() => {
  //  multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
