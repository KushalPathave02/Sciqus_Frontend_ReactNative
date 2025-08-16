import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const ImageCarousel = () => {
        const data = [
        { color: 'lightblue', text: 'Slide 1' },
        { color: 'lightgreen', text: 'Slide 2' },
        { color: 'lightpink', text: 'Slide 3' },
    ];

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={Dimensions.get('window').width - 64} // Adjust for padding (16*2 for mainContent, 16*2 for contentBlock)
                height={150}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View
                        style={[styles.itemContainer, { backgroundColor: item.color }]}
                    >
                        <Text style={styles.itemText}>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150, // Set a fixed height for the container
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ImageCarousel;
