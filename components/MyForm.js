import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Button, TextInput, Image } from "react-native";

export default function MyForm() {
    const [formData, setFormData] = useState({ id: '', name: '', email: '', phone: '' });
    const [displayData, setDisplayData] = useState(null);

    const handleChange = (field, value) => {
        setFormData(prevState => ({ ...prevState, [field]: value }));
    };

    const handlePress = () => {
        setDisplayData(formData);
        setFormData({ id: '', name: '', email: '', phone: '' });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Formulario NFL</Text>
            <Image source={{ uri: 'https://play-lh.googleusercontent.com/aJid7LFfO4qTtH8u2lzU_dwjAnmAnpv7a7EAk9YBRupWyYyghj5OoapiVSNMN9w0CeLe' }} style={styles.image} />
            <TextInput
                placeholder='ID'
                value={formData.id}
                onChangeText={(value) => handleChange('id', value)}
                style={styles.input}
            />
            <TextInput
                placeholder='Nombre'
                value={formData.name}
                onChangeText={(value) => handleChange('name', value)}
                style={styles.input}
            />
            <TextInput
                placeholder='Email'
                value={formData.email}
                onChangeText={(value) => handleChange('email', value)}
                style={styles.input}
                keyboardType='email-address'
            />
            <TextInput
                placeholder='Teléfono'
                value={formData.phone}
                onChangeText={(value) => handleChange('phone', value)}
                style={styles.input}
                keyboardType='phone-pad'
            />
            <Button title='Enviar' onPress={handlePress} color="#ff0000" />
            {displayData && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultTextBlack}>ID: {displayData.id}</Text>
                    <Text style={styles.resultTextBlack}>Nombre: {displayData.name}</Text>
                    <Text style={styles.resultTextBlack}>Email: {displayData.email}</Text>
                    <Text style={styles.resultTextBlack}>Teléfono: {displayData.phone}</Text>
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerText: {
        color: '#ff0000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
        borderRadius: 10,
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ff0000',
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
    resultContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ff0000',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        width: '80%',
        alignItems: 'center',
    },
    resultTextBlack: {
        color: '#000000',
        fontSize: 16,
    },
});
