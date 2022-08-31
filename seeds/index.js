const sequelize = require('../config/connection');
const { User , Post} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

// Ben's code -rework 
// var axios = require("axios").default
// var animeSeries =["Full Metal Alchemist Brotherhood","One Piece", "Bleach", "Dragon Ball Z","Dragon Ball"," Naruto Shippuded", "Naruto","Full Metal Alchemist"]
// var animeID = [5114,21 , 269 , 813 , 134 , 1735 , 20, 121]
// var animeEpCt = [64,1013,365,291,153,500,220, 51]
// let i=0
// let k=0
// getInfo()
// function getInfo(){
// // for (let k=0; k<animeID.length; k++){
// var id = animeID[k]
//   reccursion()
//   function reccursion(){
// if (k >= animeID.length)
//    { return
//      ;}
// else{
// if (i >=animeEpCt[k])
//     {
//       i=0
//       k=k+1
//       getInfo()
//     }
//    else
//    {
//      i=i+1
//  episode= i
//  // console.log(episode)
//   var dbBuild = "https://api.jikan.moe/v4/anime/"+id +"/episodes/"+episode
//   setTimeout(delay,5000)
//   //console.log(dbBuild)
//   function delay(){
//   axios.get(dbBuild)
//    // .then(function(response){
//    // return response.json()})
//     .then(
//       function(animeData){
//       function delayII(){
//         console.log(animeData.data)
//      var isFiller = animeData.data.filler
//      var description = animeData.data.synopsis
//      var epTit = animeData.data.title
//      var series = animeSeries[k]
//      var aniID = animeID[k]
//   //console.log(aniID)
//     axios.post("https://animefastforward.herokuapp.com/api/database/info", {
//       series,aniID, episode,isFiller,epTit,description})
//       .then (console.log)
//       .catch(console.error)
//     }setTimeout(delayII,1)
//   })
// reccursion()
// }
//    }
// }
// }
// }