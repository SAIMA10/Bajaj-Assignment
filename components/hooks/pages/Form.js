import React from "react";
import { Formik } from 'formik';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import * as yup from 'yup';
// import LottieAnimation from "./LottieAnimation";


const reviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),
    body: yup.string()
    .required()
    .min(8),
    rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) >  0;
    }),
});


const ReviewForm = ({ addReview }) => {
    return (
        <View>
            <Formik
            initialValues={{title: '', body: '', rating: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => 
            { actions.resetForm();
            addReview(values);
            }}>
            {props => (
                <View>
                    <TextInput
                    style={styles1.input}
                    placeholder='Review title'
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}>
                    </TextInput>
                    <TextInput
                    style={styles1.input}
                    multiline
                    placeholder='Review details'
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}>
                    </TextInput>
                    <TextInput
                    style={styles1.input}
                    placeholder='Rating (1 - 5)'
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'>
                    </TextInput>
                    <Button color='maroon' title='Submit' onPress={props.handleSubmit}/>
                    <Text>Hello!</Text>
                </View>
            )}
            </Formik>
        </View>
    );
}

const styles1 = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    }
});

export default ReviewForm;