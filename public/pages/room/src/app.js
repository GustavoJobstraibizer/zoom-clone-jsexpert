const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");
  console.log("this is the room", room);

  // const recorderBtn = document.getElementById('record')
  // recorderBtn.addEventListener('click', recordClick(recorderBtn))

  // const socketUrl = "http://localhost:3000";
  const socketUrl = "https://morning-ocean-11158.herokuapp.com/";
  const socketBuilder = new SocketBuilder({ socketUrl });

  const peerConfig = Object.values({
    id: undefined,
    config: {
      host: "peaceful-savannah-09162.herokuapp.com",
      secure: true,
      // port: 9000,
      // host: "localhost",
      path: "/",
    },
  });

  const peerBuilder = new PeerBuilder({ peerConfig });

  const view = new View();
  const media = new Media();
  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder,
  };

  Business.initialize(deps);
};

window.onload = onload;
