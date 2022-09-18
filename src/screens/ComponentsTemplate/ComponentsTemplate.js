import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import ExemploComponente from '../../components/ExemploComponente'


const ComponentsTemplate = () => {
    return (
        <View>
            <ExemploComponente />
            <ExemploComponente />
        </View>
    );
};

export default ComponentsTemplate;
