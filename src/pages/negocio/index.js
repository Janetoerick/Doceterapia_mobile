import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './home/home'

const Tab = createBottomTabNavigator()

export default function Negocio() {
    return (
        <Tab.Navigator
            tabBarStyle={{ backgroundColor: '#fff' }}
            screenOptions={{
                tabBarShowLabel: false,
                unmountOnBlur: true,
                headerShown: false,
                tabBarStyle: { borderTopColor: "#9dc7ca", backgroundColor: "#ffffff" },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Icon name="home" color="#1985A1" size={30} />
                        }
                        return <Icon name="home" color="#000" size={26} />
                    },
                }}
            />
            <Tab.Screen
                name="Estoque"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Icon name="briefcase" color="#1985A1" size={30} />
                        }
                        return <Icon name="briefcase" color="#000" size={26} />
                    },
                }}
            />
            <Tab.Screen
                name="Clientes"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Icon name="users" color="#1985A1" size={30} />
                        }
                        return <Icon name="users" color="#000" size={26} />
                    },
                }}
            />
            <Tab.Screen
                name="Graficos"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Icon name="bar-chart" color="#1985A1" size={30} />
                        }
                        return <Icon name="bar-chart" color="#000" size={26} />
                    },
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Icon name="gear" color="#1985A1" size={30} />
                        }
                        return <Icon name="gear" color="#000" size={26} />
                    },
                }}
            />
        </Tab.Navigator>
    )
}