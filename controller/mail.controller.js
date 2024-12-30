const nodemailer = require("nodemailer");
const dotenv=require('dotenv');
const { response } = require("express");
dotenv.config();
const sendEmail=(FirstName,LastName,Email,PhoneNumber,CollegeName,selectedYear,Department,PortfolioLink,resume)=>{
    return new Promise ((resolve,reject)=>{
        
            const transporter = nodemailer.createTransport({
                service:"gmail",
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, 
                auth: {
                  user: `${process.env.EMAIL}`,
                  pass: `${process.env.PASSWORD}`
                },
                logger: true, 
                debug: true
              });
            
              async function main() {
                const info = await transporter.sendMail({
                  from: `${process.env.EMAIL}`, 
                  to: `${process.env.EMAIL}`, 
                  subject: "Hello ✔", 
                  text: "Hello world?",
                  html: `<p><strong>First Name:</strong> ${FirstName}</p>
                <p><strong>Last Name:</strong> ${LastName}</p>
                <p><strong>Email:</strong> ${Email}</p>
                <p><strong>Phone Number:</strong> ${PhoneNumber}</p>
                <p><strong>College Name:</strong> ${CollegeName}</p>
                <p><strong>Year:</strong> ${selectedYear}</p>
                <p><strong>Department:</strong> ${Department}</p>
                <p><strong>Portfolio Link:</strong> ${PortfolioLink}</p>
                <p><strong>Resume:</strong> ${resume.originalname}</p>`, 
                });
                // console.log("Message sent: %s", info.messageId);
              }
              
              main().catch(console.error);    
         
        }
       
    
    )

}

  //get methode
  const getMail=async (req,res)=>{
    res.send("getmail")
    }

    //post methode


    const postMail=async(req,res)=>{
      const {FirstName,LastName,Email,PhoneNumber,CollegeName,selectedYear,Department,PortfolioLink}=req.body
      const { file } = req
 console.log("..................."+FirstName,LastName,Email,PhoneNumber,CollegeName,selectedYear,Department,PortfolioLink)
      sendEmail(FirstName,LastName,Email,PhoneNumber,CollegeName,selectedYear,Department,PortfolioLink,file).then(
        (response)=>{response.send(response.message)}
    ).catch(err=>{
        res.status(500).send(err.message)
    })
    res.send(req.body)

    }
module.exports={
    getMail,
    postMail
}

