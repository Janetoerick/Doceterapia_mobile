import { createStackNavigator } from '@react-navigation/stack'

import FindNome from './findNome'
import FindPalheta from './findPalheta'

const Stack = createStackNavigator()


export default function CreateNegocio(){
    return (
        <Stack.Navigator
            initialRouteName='Escolher nome'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Escolher nome"
                component={FindNome} />
            <Stack.Screen name="Escolher palheta" component={FindPalheta} />
        </Stack.Navigator>
    )
}