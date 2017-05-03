var socket = io();

    socket.on('connect', () => {
    console.log('Connected to server');
   
    socket.emit('createMessage', {
        from: 'JoeBlow@BlowingStuff.com',
        text: 'Got anything for me to blow? ;)'
    });
});

    socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('New Message:', message);
});
