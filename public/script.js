const socket = io('/')
// undefined - server takes care of id
// connecting to peer server - takes all webrtc info from the user and converts it to simple id
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})


myPeer.on('open', id => {
    // room id, user id (pass ids whenever we join)
    socket.emit('join-room', ROOM_ID, id)

})

socket.on('user-connected', userId => {
    console.log('User id: ' + userId)
})