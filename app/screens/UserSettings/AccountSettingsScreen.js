import React from 'react'
import { StyleSheet } from 'react-native'

import Screen from "../../components/screenStyling/Screen"
import CustomHeader from "../../components/CustomHeader"
import AppFlatlist from "../../components/lists/AppFlatlist"

const data = [{
    id: 1,
    title: "Factuurgegevens",
    icon: "script-text-outline",
},
{
    id: 2,
    title: "Alternatief afleveradres",
    icon: "home-outline",
},
{
    id: 3,
    title: "Wachtwoord veranderen",
    icon: "lock",
}]

function AccountSettingsScreen(props) {
    return (
        <Screen>

            <AppFlatlist data={data}
                ListHeaderComponent={<CustomHeader style={styles.header} title="Accountinstellingen" />}
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    header: {
        paddingLeft: 8,
    },
})

export default AccountSettingsScreen