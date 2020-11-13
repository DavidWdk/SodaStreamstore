//MAAK DIT SCHERM EEN MODAL
//IS DEZE FOTO COPYRIGHT-FREE?
//SHADUWEN OP ANDROID DOOR PADDING

import React from 'react'
import { StyleSheet, Image } from 'react-native'

import { AppText, AppTitle } from "../components/fonts"
import ScrollScreen from "../components/screenStyling/ScrollScreen"
import CustomHeader from "../components/CustomHeader"
import HugeButton from "../components/HugeButton"
import defaultStyles from "../config/styles"

function DonateScreen(props) {
    return (
        <ScrollScreen style={[defaultStyles.screenContainer]}>
            <CustomHeader title="Doneren" />

            <AppTitle>Doneer aan The Plastic Soup Foundation</AppTitle>
            <AppText style={defaultStyles.lineWhitespace}>De tsunami van plasticsoep zo snel mogelijk stoppen! Dát is kort gezegd de missie van Plastic Soup Foundation. Lukt dat niet, dan zadelen we toekomstige generaties op met de gevolgen van een verschrikkelijke plaag. Plastic Soup Foundation is daarmee een ‘single issue’-milieuorganisatie. We houden ons met één ding bezig: het stoppen van de plasticvervuiling bij de bron.</AppText>
            <Image style={styles.image} source={{ uri: "https://www.europarl.europa.eu/resources/library/images/20181008PHT15277/20181008PHT15277_original.jpg" }} />
            <AppText>De bron van die plasticvervuiling zijn we trouwens vaak zelf; de plasticsoep begint al voor je eigen deur op de stoep. Met SodaStream zet je al een flinke stap in de goede richting - hiermee verminder je jouw eigen plastic voetafdruk. Echter is dit voor ons niet genoeg, help The Plastic Soup Foundation daarom door jouw spaarpunten te doneren.</AppText>
            <HugeButton title="Doneer uw toegoed aan" boldTitle="Plastic Soup Foundation" />

        </ScrollScreen>
    )
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'cover',
        marginVertical: 16,
    },
})

export default DonateScreen