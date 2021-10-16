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
    FlatList
} from 'react-native'
import{
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
    
} from '@expo-google-fonts/inter'
import {images, icons, COLORS, SIZES, FONTS} from '../constants';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
    const renderItem = ({item}) => (
        <TouchableOpacity
            style={{marginHorizontal: SIZES.padding}}
            onPress={() => onPress(item)}
        >
            <Text style={{ color: COLORS.secondary, ...FONTS.body3}}>{item.name}</Text>
            {
                selectedTab.id == item.id &&
                <View style={{ alignItems: 'center', marginTop: 5}}>
                    <View style={{ width: 10,height: 10, borderRadius:5, backgroundColor: COLORS.blue}}></View>
                </View>
            }
        </TouchableOpacity>
    )
    return(
        <View style={{marginTop:5}}>
            <FlatList 
                data={tabList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor = {item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

const ScrollableCard = ({navigation, productList}) => {
    const renderCard = ({item}) => (
        <TouchableOpacity 
            style={{ marginLeft: SIZES.padding, marginRight: SIZES.padding}}
            onPress={() => navigation.navigate("ItemDetail", {"itemInfo": item})}
        >
            <View style={{ width: SIZES.width /2}}>
                <Image 
                    source={item.image}
                    resizeMode= "cover"
                    style={{ width: '100%', height: '100%', borderRadius: SIZES.radius *2,}}
                />
                <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%'}}>
                    <Text style={{ color: COLORS.lightGray2, ...FONTS.h3}}>Furniture</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.h2}}>{item.productName}</Text>
                </View>
                <View 
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        borderRadius: 15,
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        backgroundColor: COLORS.transparentLightGray
                    }}
                >
                    <Text>${item.price.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    return(
        <View style={{ marginTop: SIZES.padding}}>
            <FlatList 
                data={productList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.productId.toString()}
                renderItem={renderCard}
            />
        </View>
    )
}


const HOME = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold
    })

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Color',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Color',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Color',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: "chairs",
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Color',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Color',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Color',
                price: 10.00,
                image: images.whiteChair,
            },
        ]
    })

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: 10}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={() => {console.log('menu clicked')}}>
                        <Image 
                            source={icons.menu}
                            resizeMode= "contain"
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {console.log('cart clicked')}}>
                        <Image 
                            source={icons.cart}
                            resizeMode= "contain"
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderTitle(title) {
        return(
            <View style={{ marginHorizontal: SIZES.padding,}}>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle}}>Collection of</Text>
                <Text  style={{ color: COLORS.black, ...FONTS.h1}}>{title}</Text>
            </View>
        )
    }
    function renderPromotionCard() {
        return (
            <View
                style={[styles.shadow,{
                    flexDirection:'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 100,
                    marginBottom: 5,
                    borderRadius: 20,
                    backgroundColor: COLORS.white,
                }]}
            >
                <View
                    style={{
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.lightGray2,
                        borderRadius: 20
                    }}
                >
                    <Image 
                        source={images.sofa}
                        resizeMode= "contain"
                        style={{
                            width: '60%',
                            height: '60%'
                        }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
                    <Text style={{ ...FONTS.h3}}>Special Offer</Text>
                    <Text style={{ ...FONTS.body3}}>Adding to your Cart</Text>
                </View>
                <View style={{ marginRight: SIZES.radius, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: '70%',
                                borderRadius: 10,
                                backgroundColor: COLORS.primary,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => console.log('promo clicked!')}
                        >
                            <Image 
                                source={icons.chevron}
                                resizeMode= "contain"
                                style={{
                                    width: '50%',
                                    height: '50%'
                                }}
                            />

                        </TouchableOpacity>
                </View>
            </View>
        )
    }
    if(!fontsLoaded) {
        return null
    }else{
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar 
                    barStyle="dark-content"                   
                    backgroundColor= "#a6c13c"
                    translucent={true}
                />
                {renderHeader()}
                {renderTitle(selectedTab.title)}
                <ScrollableTab 
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
                />
                <View style={{ flex: 1}}>
                    <ScrollableCard 
                        navigation={navigation}
                        productList={selectedTab.productList}
                    />
                </View>
                {/* promotion card */}
                <View style={{ height: '19%',justifyContent: 'flex-end'}}>
                    {renderPromotionCard()}
                </View>
            </SafeAreaView>
        )
    }
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        
    }
})
export default HOME;