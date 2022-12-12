const express = require("express");
const path=require("path");
const mongoose=require("mongoose");
const app=express();
const port=process.env.PORT ||3005
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded());

// create database
mongoose.connect('mongodb://localhost:27017/resume_builder',{  //for connection with mongod
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false 
}).then(()=>{
    console.log("connection succesfull");
}).catch((error)=>{
    console.log(error);
})
// define moongosse schema
const ContactSchema=new mongoose.Schema({
    fullname: String,
    email: String,
    mobilenumber: String,
    remark: String
});
 //create the model for schema
const Index = mongoose.model('contact', ContactSchema); 

//setting path

app.set("view engine","html")
app.set('views',path.join(__dirname,'/'));
app.use(express.static(__dirname + '/public'));
//  <link rel="stylesheet" type="text/css" href="style.css" /> 
//routing
//app.get(path,callback)
// app.get(console.log("chal jaa bhai"));
app.get("/",(req,res)=>{
   res.sendFile("login.html", {root : __dirname + '/'});
})
app.get("/index.html",(req,res)=>{
    res.sendFile("index.html", {root : __dirname + ''});
})
app.get("/about.html",(req,res)=>{
    res.sendFile("about.html", {root : __dirname + ''});
})
app.get("/faq.html",(req,res)=>{
    res.sendFile("faq.html", {root : __dirname + ''});
})
app.get("/resume_steps.html",(req,res)=>{
    res.sendFile("resume_steps.html", {root : __dirname + ''});
})
app.get("/resume.html",(req,res)=>{
    res.sendFile("resume.html", {root : __dirname + ''});
})
app.get("/contact.html",(req,res)=>{
    res.sendFile("contact.html", {root : __dirname + ''});
})
app.get("/template1.html",(req,res)=>{
    res.sendFile("template1.html", {root : __dirname + '/template'});
})
app.get("/template2.html",(req,res)=>{
    res.sendFile("template2.html", {root : __dirname + '/template'});
})
app.get("/template3.html",(req,res)=>{
    res.sendFile("template3.html", {root : __dirname + '/template'});
})
app.get("/template4.html",(req,res)=>{
    res.sendFile("template4.html", {root : __dirname + '/template'});
})
app.get("/template5.html",(req,res)=>{
    res.sendFile("template5.html", {root : __dirname + '/template'});
})
app.get("/template6.html",(req,res)=>{
    res.sendFile("template6.html", {root : __dirname + '/template'});
})
app.get("/template7.html",(req,res)=>{
    res.sendFile("template7.html", {root : __dirname + '/template'});
})
app.get("/template8.html",(req,res)=>{
    res.sendFile("template8.html", {root : __dirname + '/template'});
})
app.get("/template9.html",(req,res)=>{
    res.sendFile("template9.html", {root : __dirname + '/template'});
})
app.get("/template10.html",(req,res)=>{
    res.sendFile("template10.html", {root : __dirname + '/template'});
})
app.get("/template11.html",(req,res)=>{
    res.sendFile("template11.html", {root : __dirname + '/template'});
})
app.get("/template12.html",(req,res)=>{
    res.sendFile("template12.html", {root : __dirname + '/template'});
})
app.get("/template13.html",(req,res)=>{
    res.sendFile("template13.html", {root : __dirname + '/template'});
})
app.get("/template14.html",(req,res)=>{
    res.sendFile("template14.html", {root : __dirname + '/template'});
})
app.get("/privacy.html",(req,res)=>{
    res.sendFile("privacy.html", {root : __dirname + '/'});
})
// contact form ka datapabase ke liye
app.post("/contact.html",(req, res)=>{

    
    const myData = new Index({
        fullname :req.body.fullname,
        email :req.body.email,
        mobilenumber :req.body.mobilenumber,
        remark :req.body.remark
    });
    myData.save().then(()=>{
    res.send("your response is recorded")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});

// template2 ke database ke liye
// define moongosse schema
const Template2Schema=new mongoose.Schema({
    address:String,
        phone:String,
        email:String,
        summary:String,
        job1_date_deatil:String,
        job1_title_deatil:String,
        job1_address_deatil:String,
        job1_experience_deatil1:String,
        job1_experience_deatil2:String,
        job2_date_deatil:String,
        job2_title_deatil:String,
        job2_address_deatil:String,
        job2_experience_deatil1:String,
        job2_experience_deatil2:String,
        education_date_deatil:String,
        education_title_deatil:String,
        education_address_deatil:String,
        education_experience_deatil:String,
        honor_date_deatil:String,
        honor_title_deatil:String,
        honor_address_deatil:String,
        honor_experience_deatil:String,
        course_date_deatil:String,
        course_title_deatil:String,
        course_address_deatil:String,
        course_experience_deatil:String
     
});
 //create the model for schema
const temp2 = mongoose.model('template2', Template2Schema);
app.post("/template2.html",(req, res)=>{

    
    const myData1= new temp2({

    address :req.body.address,
    phone:req.body.phone,
    email:req.body.email,
    summary:req.body.summary,
    job1_date_deatil:req.body.job1_date_deatil,
    job1_title_deatil:req.body.job1_title_deatil,
    job1_address_deatil:req.body.job1_addres,
    job1_experience_deatil1:req.body.job1_experience_deatil1,
    job1_experience_deatil2:req.body.job1_experience_deatil2,
    job2_date_deatil:req.body.job2_date_deatil,
    job2_title_deatil:req.body.job2_title_deatil,
    job2_address_deatil:req.body.job2_address_deatil,
    job2_experience_deatil1:req.body.job2_experience_deatil1,
    job2_experience_deatil2:req.body.job2_experience_deatil2,
    education_date_deatil:req.body.education_date_deatil,
    education_title_deatil:req.body.education_title_deatil,
    education_address_deatil:req.body.education_address_deatil,
    education_experience_deatil:req.body.education_experience_deatil,
    honor_date_deatil:req.body.honor_date_deatil,
    honor_title_deatil:req.body.honor_title_deatil,
    honor_address_deatil:req.body.honor_address_deatil,
    honor_experience_deatil:req.body.honor_experience_deatil,
    course_date_deatil:req.body.course_date_deatil,
    course_title_deatil:req.body.course_title_deatil,
    course_address_deatil:req.course_address_deatil,
    course_experience_deatil:req.body.course_experience_deatil

        
    });
    myData1.save().then(()=>{
    res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});

// 
// template1 ke database ke liye
// define moongosse schema
const Template1Schema=new mongoose.Schema({
        name:String,
        best_skill:String,
        email:String,
        phonenumber:String,
        address:String,
        linkedin:String,
        github:String,
        education_name:String,
        education_college:String,
        education_percentage:String,
        profile:String,
        project1:String,
        project1_area:String,
        project2:String,
        project2_area:String,
        project3:String,
        project3_area:String,
        skill1:String,
        skill2:String,
        skill3:String,
        skill4:String,
        skill5:String,
        skill_other:String,
        experience1_company:String,
        experience1_duration:String,
        experience1_discription:String,
        experience2_company:String,
        experience2_duration:String,
        experience2_discription:String
     
});
//create the model for schema
const temp1 = mongoose.model('template1', Template1Schema);
app.post("/template1.html",(req, res)=>{

    
    const myData2= new temp1({

        name :req.body.name,
        best_skill :req.body.best_skill,
        address :req.body.address,
        phone:req.body.phonenumber,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        address:req.body.address,
        linkedin:req.body.linkedin,
        github:req.body.github,
        education_name:req.body.education_name,
        education_college:req.body.education_college,
        education_percentage:req.body.education_percentage,
        profile:req.body.profile,
        project1:req.body. project1,
        project1_area:req.body.project1_area,
        project2:req.body.project2,
        project2_area:req.body.project2_area,
        project3:req.body.project3,
        project3_area:req.body. project3_area,
        skill1:req.body.skill1,
        skill2:req.body.skill2,
        skill3:req.body.skill3,
        skill4:req.body.skill4,
        skill5:req.body.skill5,
        skill_other:req.body.skill_other,
        experience1_company:req.body.experience1_company,
        experience1_duration:req.body.experience1_duration,
        experience1_discription:req.body.experience1_discription,
        experience2_company:req.body.experience2_company,
        experience2_duration:req.body.experience2_duration,
        experience2_discription:req.body.experience2_discription   
    });
    myData2.save().then(()=>{
    res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});

// template3 ke database ke liye
// define moongosse schema
const Template3Schema=new mongoose.Schema({
    name:String,
    
    email:String,
    phone:String,
    designation:String,
    your_objective:String,
    experience:String,
    exp_descp:String,
    exp1_descp:String,
    profile:String,
    company1_name:String,
    company1_designation:String,
    company1_duration:String,
    company2_name:String,
    company2_designation:String,
    company2_duration:String,
    degree:String,
    collegename:String,
    percentage:String,
    ProgrammingLang:String,
    DBs:String,
    OS:String,
    WebTech:String,
    Ides:String,
    projectname:String,
    project_description:String,
    technology:String
 
});
//create the model for schema
const temp3 = mongoose.model('template3', Template3Schema);
app.post("/template3.html",(req, res)=>{

    
    const myData3= new temp3({

        name:req.body.name,
    
    email:req.body.email,
    phone:req.body.phone,
    designation:req.body.designation,
    your_objective:req.body.your_objective,
    experience:req.body.experience,
    exp_descp:req.body.exp_descp,
    exp1_descp:req.body.exp_descp,
    profile:req.body.profile,
    company1_name:req.body.company1_name,
    company1_designation:req.body.company1_designation,
    company1_duration:req.body.company1_duration,
    company2_name:req.body.company2_name,
    company2_designation:req.body.company2_designation,
    company2_duration:req.body. company2_duration,
    degree:req.body.degree,
    collegename:req.body.collegename,
    percentage:req.body.percentage,
    ProgrammingLang:req.body.ProgrammingLan,
    DBs:req.body.DBs,
    OS:req.body.OS,
    WebTech:req.body.WebTech,
    Ides:req.body.Ides,
    projectname:req.body. projectname,
    project_description:req.body.project_description,
    technology:req.body. technology
    });
    myData3.save().then(()=>{
    res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});

// template4 ke database ke liye
// define moongosse schema
const Template4Schema=new mongoose.Schema({
        name:String,
        email:String,
        phonenumber:String,
        address:String,
        linkedin:String,
        github:String,
        profile:String,
        duration1:String,
        company1_name:String,
        company1_position:String,
        company1_experience:String,
        duration2:String,
        company2_name:String,
        company2_position:String,
        company2_experience:String,
        school_duration:String,
        
        school_name:String,
        school_achievements:String,
        college_duration:String,
        college_name:String,
        college_achievements:String,
        
        skill_1:String,
        skill_2:String,
        skill_3:String,
        skill_4:String,
        skill_5:String,
        skill_6:String
 
});
//create the model for schema
const temp4 = mongoose.model('template4', Template4Schema);
app.post("/template4.html",(req, res)=>{

    
    const myData4= new temp4({

        name:req.body.name,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        address:req.body.address,
        linkedin:req.body.linkedin,
        github:req.body.github,
        profile:req.body. profile,
        duration1:req.body.duration1,
        company1_name:req.body.company1_name,
        company1_position:req.body.company1_position,
        company1_experience:req.body.company1_experience,
        duration2:req.body.duration2,
        company2_name:req.body.company2_name,
        company2_position:req.body.company2_position,
        company2_experience:req.body.company2_experience,
        school_duration:req.body.school_duration,
        
        school_name:req.body.school_name,
        school_achievements:req.body.school_achievements,
        college_duration:req.body.college_duration,
        college_name:req.body.college_name,
        college_achievements:req.body.college_achievements,
        
        skill_1:req.body.skill_1,
        skill_2:req.body.skill_2,
        skill_3:req.body.skill_3,
        skill_4:req.body.skill_4,
        skill_5:req.body.skill_5,
        skill_6:req.body.skill_6
    });
    myData4.save
    myData4.save().then(()=>{
        res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});

//template5 ke database ke liye
// define moongosse schema
const Template5Schema=new mongoose.Schema({
        name:String,
        post:String,
        work:String,
        address:String,
        linkedin:String,
        email:String,
        phone:String,
        insta:String,
        course1:String,
        cduration1:String,
        course2:String,
        cduration2:String,
        course3:String,
        cduration3:String,
        institure1:String,
        subject1:String,
        
        institute2:String,
        subject2:String,
        institute3:String,
        subject3:String,
        wpost1:String,
        
        wduration1:String,
        wpost2:String,
        wduration2:String,
        wpost3:String,
        wduration3:String,
        company1:String,
        achievment1:String,
        company2:String,
        achievment2:String,
        company3:String,
        achievment3:String,
        
        google_analytics:String,
        public_spealing:String,
        email_marketing:String,
        team_work:String,
        interest1:String,
        interest2:String,
        interest3:String,
        interest4:String,
        interest5:String,
        interest6:String,
        options_outlined:String,
        options_outlined1:String,
        options_outlined2:String,

 
});

//create the model for schema
const temp5 = mongoose.model('template5', Template5Schema);
app.post("/template5.html",(req, res)=>{

    
    const myData5= new temp5({

        name:req.body.name,
        post:req.body.post,
        work:req.body.work,
        address:req.body.address,
        linkedin:req.body.linkedin,
        email:req.body.email,
        phone:req.body.phone,
        insta:req.body.insta,
        course1:req.body.course1,
        cduration1:req.body.cduration1,
        course2:req.body.course2,
        cduration2:req.body.cduration2,
        course3:req.body.course3,
        cduration3:req.body.cduration3,
        institure1:req.body.institure1,
        subject1:req.body.subject1,
        
        institute2:req.body.institute2,
        subject2:req.body.subject2,
        institute3:req.body.institute3,
        subject3:req.body.subject3,
        wpost1:req.body.wpost1,
        
        wduration1:req.body.wduration1,
        wpost2:req.body.wpost2,
        wduration2:req.body.wduration2,
        wpost3:req.body.wpost3,
        wduration3:req.body.wduration3,
        company1:req.body.company1,
        achievment1:req.body.achievment1,
        company2:req.body.company2,
        achievment2:req.body.achievment2,
        company3:req.body.company3,
        achievment3:req.body.achievment3,
        
        google_analytics:req.body.google_analytics,
        public_spealing:req.body.public_spealing,
        email_marketing:req.body.email_marketing,
        team_work:req.body.team_work,
        interest1:req.body.interest1,
        interest2:req.body.interest2,
        interest3:req.body.interest3,
        interest4:req.body.interest4,
        interest5:req.body.interest5,
        interest6:req.body.interest6,
        options_outlined:req.body.options_outlined,
        options_outlined1:req.body.options_outlined1,
        options_outlined2:req.body.options_outlined2,

    });
    myData5.save().then(()=>{
    res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});

//template6 ke database ke liye
// define moongosse schema
const Template6Schema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    address:String,
    linkedin:String,
    email:String,
    phone:String,
    twitter:String,
    objective:String,
    degree1:String,
    school1:String,
    date1:String,
    coursachievement1e3:String,
    degree2:String,
    school2:String,
    date2:String,
    
    achievement2:String,
    job1:String,
    company1:String,
    date3:String,
    responsibility1:String,
    
    job2:String,
    company2:String,
    date4:String,
    responsibility2:String,
    skill1:String,
    skill2:String,
    skill3:String,
    skill4:String,
    skill5:String,
    skill6:String,
    activity:String,
    
    

});

//create the model for schema
const temp6 = mongoose.model('template6', Template6Schema);
app.post("/template6.html",(req, res)=>{

    
    const myData6= new temp6({

        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address:req.body.address,
        linkedin:req.body.linkedin,
        email:req.body.email,
        phone:req.body.phone,
        twitter:req.body.twitter,
        objective:req.body.objective,
        degree1:req.body.degree1,
        school1:req.body.school1,
        date1:req.body.date1,
        achievement1:req.body.achievement1,
        degree2:req.body.degree2,
        school2:req.body.school2,
        date2:req.body.date2,
        
        achievement2:req.body.achievement2,
        job1:req.body.job1,
        company1:req.body.company1,
        date3:req.body.date3,
        responsibility1:req.body.responsibility1,
        
        job2:req.body.job2,
        company2:req.body.company2,
        date4:req.body.date4,
        responsibility2:req.body.responsibility2,
        skill1:req.body.skill1,
        skill2:req.body.skill2,
        skill3:req.body.skill3,
        skill4:req.body.skill4,
        skill5:req.body.skill5,
        skill6:req.body.skill6,
        activity:   req.body. activity,

    });
    myData6.save().then(()=>{
    res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});


//template7 ke database ke liye
// define moongosse schema
const Template7Schema=new mongoose.Schema({
    name:String,
    address:String,
    linkedin:String,
    email:String,
    phone:String,
    github:String,
    profile:String,
    company1_duration:String,
    company1_position:String,
    company1_name:String,
    company1_experience:String,
    company2_duration:String,
    company2_position:String,
    company2_name:String,
    
    company2_experience:String,
    school_duration:String,
    School_name:String,
    school_achievements:String,
    college_duration:String,
    
    college_name:String,
    college_achievements:String,
    
    skill_1:String,
    skill_2:String,
    skill_3:String,
    skill_4:String,
    skill_5:String,
    skill_6:String,
    
    

});

//create the model for schema
const temp7 = mongoose.model('template7', Template7Schema);
app.post("/template7.html",(req, res)=>{

    
    const myData7= new temp7({

    name:req.body.name,
    address:req.body.address,
    linkedin:req.body.linkedin,
    email:req.body.email,
    phone:req.body.phone,
    github:req.body.github,
    profile:req.body.profile,
    company1_duration:req.body.company1_duration,
    company1_position:req.body.company1_position,
    company1_name:req.body.company1_name,
    company1_experience:req.body.company1_experience,
    company2_duration:req.body.company2_duration,
    company2_position:req.body.company2_position,
    company2_name:req.body.company2_name,
    
    company2_experience:req.body.company2_experience,
    school_duration:req.body.school_duration,
    School_name:req.body.School_name,
    school_achievements:req.body.school_achievements,
    college_duration:req.body.college_duration,
    
    college_name:req.body.college_name,
    college_achievements:req.body.college_achievements,
    
    skill_1:req.body.skill_1,
    skill_2:req.body.skill_2,
    skill_3:req.body.skill_3,
    skill_4:req.body.skill_4,
    skill_5:req.body.skill_5,
    skill_6:req.body.skill_6,
    

    });
    myData7.save().then(()=>{
    res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});

//template8 ke database ke liye
// define moongosse schema
const Template8Schema=new mongoose.Schema({
    name:String,
    
    email:String,
    phonenumber:String,
    
    designation:String,
    your_objective:String,
    Job1:String,
    Duration1:String,
    experience1_description:String,
    desc1_1:String,
    desc1_2:String,
    
    Job2:String,
    Duration2:String,
    experience2_description:String,
    desc2_1:String,
    desc2_2:String,
    
    Job3:String,
    Duration3:String,
    
    experience3_description:String,
    desc3_1:String,
    desc3_2:String,
    College:String,
    Duration4:String,
    
    
    

});

//create the model for schema
const temp8 = mongoose.model('template8', Template8Schema);
app.post("/template8.html",(req, res)=>{

    
    const myData8= new temp8({

        name:req.body.name,
    
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        
        designation:req.body.designation,
        your_objective:req.body.your_objective,
        Job1:req.body.Job1,
        Duration1:req.body.Duration1,
        experience1_description:req.body.experience1_description,
        desc1_1:req.body.desc1_1,
        desc1_2:req.body.desc1_2,
        
        Job2:req.body.Job2,
        Duration2:req.body.Duration2,
        experience2_description:req.body.experience2_description,
        desc2_1:req.body.desc2_1,
        desc2_2:req.body.desc2_2,
        
        Job3:req.body.Job3,
        Duration3:req.body.Duration3,
        
        experience3_description:req.body.experience3_description,
        desc3_1:req.body.desc3_1,
        desc3_2:req.body.desc3_2,
        College:req.body.College,
        Duration4:req.body.Duration4,
    

    });
    myData8.save().then(()=>{
    res.send("submit successfully")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")})
});
//server create
app.listen(3000,()=>{
    console.log(`Server is listening on port ${3000}`);
});


