import "../styles/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }}/>

      <Stack.Screen 
        name="segunda" 
        options={{ headerShown: false }}/>

      <Stack.Screen 
        name="terceira" 
        options={{ headerShown: false }}/>

      <Stack.Screen 
        name="quarta" 
        options={{ headerShown: false }}/>

      <Stack.Screen 
        name="quinta" 
        options={{ headerShown: false }}/>

    </Stack>
  );
}
