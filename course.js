const http = require ('http')

 const server = http.createServer(handleCourse)
const course=[{
id:1,
name:"Full Stack Web Devloper",
duration: "3 months",
timing:"9pm to 10pm",
price:"30,000"
},
{
   id:1,
   name:"Full Stack Web Devloper",
   duration: "3 months",
   timing:"9pm to 10pm",
   price:"30,000"},
   {
      id:2,
      name:"Full Stack Web Devloper",
      duration: "3 months",
      timing:"9pm to 10pm",
      price:"30,000"},
      {
         id:3,
         name:"Full Stack Web Devloper",
         duration: "3 months",
         timing:"9pm to 10pm",
         price:"30,000"},
         {
            id:4,
            name:"Full Stack Web Devloper",
            duration: "3 months",
            timing:"9pm to 10pm",
            price:"30,000"},
            {
               id:5,
               name:"Full Stack Web Devloper",
               duration: "3 months",
               timing:"9pm to 10pm",
               price:"30,000"}]

 function handleCourse(req, res){
   res.writeHead(200, {'content-Type':"application/json"})
    res.end(JSON.stringify(course))
 }

 server.listen(3000, () => {
    console.log("server is running !")
})