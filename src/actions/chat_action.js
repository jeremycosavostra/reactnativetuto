const addChat = (newChat) => {

    return (dispatch, getState, getFirestore) => {

        const firestore = getFirestore();
        firestore.collection('chat').add({
            msg: newChat
        })
            .then(() => {
                console.log("chat action en action: ", newChat);
                dispatch({
                    type: "NEW_CHAT",
                    newChat
                })
            })
    }
}
export default addChat;
