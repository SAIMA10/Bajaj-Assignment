import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text } from 'react-native';

const LottieAnimation = () => {
    return (
        <View>
            <Text>Lottie</Text>
            <LottieView
            autoPlay
            style={{
                width: 400,
                height: 400,
            }}
            source={require('./assets/girl say hi.json')} >
            </LottieView>
        </View>
    )
};

export default LottieAnimation;