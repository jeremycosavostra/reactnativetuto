import React from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet, Text, View, TextInput,
    Keyboard, KeyboardAvoidingView, FlatList, TouchableOpacity
} from 'react-native';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';



import addChat from './actions/chat_action';

class Main extends React.Component {

    state = {
        chat_input: "",
    }

    onNewChat = () => {

        this.props.addChat(
            this.state.chat_input
        )
        this.setState({
            chat_input: ""
        });
        Keyboard.dismiss();
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.row}>
                <Text style={styles.message}>{item.msg}</Text>
            </View>
        );
    }

    render() {

        const { thread } = this.props;

        if (!thread) {
            return <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={thread}
                    renderItem={this.renderItem}
                    inverted
                />
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.footer}>
                        <TextInput
                            value={this.state.chat_input}
                            onChangeText={text => this.setState({ chat_input: text })}
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Type something nice"
                        />
                        <TouchableOpacity onPress={this.onNewChat.bind(this)}>
                            <Text style={styles.send}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    message: {
        fontSize: 18,
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 18,
        flex: 1,
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
    },
});


const mapDispatchToProps = (dispatch) => {
    return {
        addChat: () => dispatch(addChat("Hello World"))
    }
}
const mapStateToProps = (state) => {
    return {
        thread: state.firestore.ordered.chat
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'chat', limit: 10 },
    ]))(Main);




