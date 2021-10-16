import React, {useState} from 'react';
import {
    StyleSheet,
    View, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StatusBar,
    Platform,
    FlatList,
    ImageBackground
} from 'react-native'
import{
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
    
} from '@expo-google-fonts/inter'
import {images, icons, COLORS, SIZES, FONTS} from '../constants';

const ItemDetail = ({route, navigation}) => {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold
    })

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: 10, marginTop: SIZES.padding }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={() => {console.log('menu clicked')}}>
                        <Image 
                            source={icons.menu}
                            resizeMode= "contain"
                            style={{
                                tintColor: COLORS.white,
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {console.log('search clicked')}}>
                        <Image 
                            source={icons.search}
                            resizeMode= "contain"
                            style={{
                                tintColor: COLORS.white,
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderInfo() {
        let {itemInfo} = route.params;
        
        if(itemInfo) {
            return (
                    <ImageBackground 
                        source={itemInfo.image}
                        resizeMode= "cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                    {renderHeader()}

                    {/* product tag */}
                    <View
                        style={{
                            position: 'absolute',
                            top: '46%',
                            left: '15%',
                            borderRadius: 80,
                            backgroundColor: COLORS.lightGray2,
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 20,
                                backgroundColor: COLORS.blue,
                                width: 10,
                                height: 10
                            }}
                        >

                        </View>
                    </View>
                        <View
                            style={{
                                position: 'absolute',
                                top: '43%',
                                left: '30%',
                                flexDirection: 'row',
                                padding: SIZES.radius *1.5,
                                backgroundColor: COLORS.transparentLightGray1,
                                width: '55%',
                                borderRadius: 10
                            }}
                        >
                            <View style={{ flex: 2}}>
                                <Text style={{ color: COLORS.darkGray, ...FONTS.h4}}>{itemInfo.productName}</Text>
                            </View>
                            <View style={{ flex: 1.5,alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                <Text style={{ color: COLORS.darkGreen, ...FONTS.h3}}>${itemInfo.price.toFixed(2)}</Text>
                            </View>
                        </View>

                        <View 
                            style={{
                                position: 'absolute',
                                bottom: '20%',
                                left: SIZES.padding,
                                right: SIZES.padding
                            }}
                        >
                            <Text style={{color: COLORS.lightGray2, ...FONTS.body2}}>Furniture</Text>
                            <Text style={{ marginTop: SIZES.radius ,color: COLORS.white, ...FONTS.h1}}>{itemInfo.productName}</Text>
                        </View>
                    
                    </ImageBackground>
                
            )
        }else{
            <View></View>
        }
    }
    function renderFooter(){
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: SIZES.padding,
                    right: SIZES.padding,
                    borderRadius: 35,
                    flexDirection: 'row',
                    height: 60,
                    backgroundColor: COLORS.white
                }}
            >
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image 
                            source={icons.dashboard}
                            style={{
                                tintColor: COLORS.gray,
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            backgroundColor: COLORS.primary,
                            borderRadius: 10
                        }}
                    >
                        <Image 
                            source={icons.plus}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity >
                            <Image 
                                source={icons.user}
                                style={{
                                    tintColor: COLORS.gray,
                                    width: 20,
                                    height: 20
                                }}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    
        return(
            <View style={{ flex: 1, backgroundColor: COLORS.white}}>
                
                {renderInfo()}
                {renderFooter()}
            </View>
        )
    
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:  COLORS.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
export default ItemDetail;