const app = require('express')();
const axios = require('axios');
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Server running on port ${PORT}!`)
)

app.get("/api/GetGameInfo/:universeId", (req, res) => {
    let gameData;
    const { universeId } = req.params;
    axios.get('https://games.roblox.com/v1/games?universeIds='+universeId)
  .then(function (response) {
    gameData = response.data.data[0];
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
    console.log(gameData);
    res.status(200).send({
        gameInfo: gameData
    });
  });
});