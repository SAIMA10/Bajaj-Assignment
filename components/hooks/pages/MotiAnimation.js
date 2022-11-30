import React from 'react';
import {View} from 'react-native'
import { MotiView } from 'moti';

const MotiAnimation = () => {
    return (
        <View>
        <MotiView
        from={{
            scale: 0.1,
            opacity: .5,
        }}
        animate={{
            scale: 1, 
            opacity: 1
        }}
        transition={{
            type: 'timing',
            duration: 1500,
        }}
        style={{
            width: 100,
            height: 100,
            backgroundColor: 'black',
            borderRadius: 10,
            paddingRight: 50,
        }}>
        </MotiView>
        </View>
    )
};

export default MotiAnimation;