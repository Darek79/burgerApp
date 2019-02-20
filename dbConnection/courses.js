// async function createCourse() {
//     const course = new Course({
//         name: 'angular course',
//         author: 'darek',
//         tags: ['angular','frontend'],
//         isPublished: true
//     });

//     const result = await course.save();
//     console.log(result);
    
// }

// async function getCourses() {
//      const courses = await Course
//      .find({author: 'darek',isPublished:true})
//      .limit(10)
//      .sort({name:1})
//      .select({name:1,tags:1})
//      console.log(courses);
// }
// getCourses();

// app.post('/add',(req,res)=>{
//     var prod = new Products({
//         product: req.body.product,
//         brand: req.body.brand,
//         sizes: req.body.sizes,
//         amount: req.body.amount
//     });
//     prod.save()
//     .then((req)=>{
//         res.send(req);
//     })
//     .catch((e)=>{
//         console.log('not saved',e);
//     })

// });

// app.get('/get',(req,res)=>{
//     Products.find({
//         brand: req.body.brand
//     })
//     .then((prod)=>{
//         res.send({prod})
//     })
//     .catch((e)=>{
//         res.status(400).send(e);
//     })
// })