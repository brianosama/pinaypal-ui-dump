import { Box, Text } from '@gluestack-ui/themed';
import { BaseScreenWithBackground } from '../../screens/generic/basescreen';
import { Dimensions, Image, } from 'react-native';
import { verticalScale } from '../../helpers/ScaleHelper';
import { StyleSheet } from "react-native";
import React from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState, useRef } from 'react';
import HideAdsIcon from '../../assets/icons/hideds.png'; // Import local image
import UnliLikes from '../../assets/icons/unlilikes.png'; // Import local image
import MsgMatch from '../../assets/icons/msgmatch.png'; // Import local image
import SeeLikes from '../../assets/icons/seelikes.png'; // Import local image
import { NextButton } from '../../components/FormElements';
import { Stack, router } from "expo-router";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/icons/pp-logo-white-2.png')}
    />
  );
}


export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


const data = [
  {
    id: 1,
    name: 'HideAds',
    image: HideAdsIcon,
  },
  {
    id: 2,
    name: 'Unlimited Likes',
    image: UnliLikes,
  },
  {
    id: 3,
    name: 'See who likes you',
    image: MsgMatch,
  },
  {
    id: 4,
    name: 'Message before matching',
    image: SeeLikes,
  },
];

const renderItem = ({ item }) => {
  const isRemoteImage = typeof item.image === 'string' && item.image.startsWith('http');
  return (
    <Box
      style={{
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      {isRemoteImage ? (
        <Image source={{ uri: item.image }} style={{ width: 300, height: 250 }} />
      ) : (
        <Image source={item.image} style={{ width: 300, height: 250 }} />
      )}

    </Box>
  );
};

export default function Page() {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <BaseScreenWithBackground>
      <Box mt={verticalScale(20)}>
        <Box mt={verticalScale(30)} alignSelf="stretch" pt={verticalScale(10)}>
          <Text pt={10} color="#000" textAlign="center" fontSize={26} fontFamily="Poppins_600SemiBold">
            {"Special Offer: "} </Text>
          <Text pt={10} mt={5} color="#000" textAlign="center" fontSize={26} fontFamily="Poppins_600SemiBold">
            {"Activate Your 8-Day Trial"}
          </Text>
          <Text pt={10} mt={5} color="#000" textAlign="center" fontSize={26} fontFamily="Poppins_600SemiBold">
            {"Pass Now!"}
          </Text>

          <Box>
            <Box style={{
              paddingTop: 80,
              alignItems: 'center'
            }}>
              <Carousel
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={index => setIndex(index)} ooooooo
                autoplay={true}
                autoplayInterval={2000}
                loop={true}
              />
              <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#000',
                }}
                tappableDots={true}
                inactiveDotStyle={{
                  backgroundColor: 'black',
                  // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </Box>
            <Box>
              <Text
                fontFamily="Poppins_400Regular"
                color="#000"
                fontSize={20}
                textAlign="center"
                lineHeight={28}
              >
                {"To avail this limited-time offer, simply add your credit card details now. Don't worry, no charges will be deducted during your trial period."}
              </Text>
            </Box>
            <Box mt={verticalScale(30)} alignSelf='center'>
              <NextButton label={"Continue"} onPress={() => {
                router.push("/(reg)/paymethod");
              }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </BaseScreenWithBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});