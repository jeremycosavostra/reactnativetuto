const initialState = {
    thread: [
        { msg: "Hello first chat" }
    ]
}

const chatReducer = (state = initialState, action) => {

    if (action.type === "NEW_CHAT") {

        console.log("chatReducer : ", state)

        return Object.assign({}, state, {
            thread: [
                ...state.thread,
                {
                    id: new Date().getTime(),
                    msg: action.newChat
                }
            ]
        })
    }
    return state
}

export default chatReducer;
