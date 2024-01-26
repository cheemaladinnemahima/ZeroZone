const express=require('express')
const bodyParser= require('body-parser');

const app = express(); 
app.use(bodyParser.json());


const {MongoClient,ObjectId}=require('mongodb');
let _userCollectionName="user";
const uri='mongodb://localhost:27017/zero_zoner';
const client=new MongoClient(uri);
client.connect().then(()=>{
    console.log("connection established");
 });

 let _db=client.db();

 //create colletion for users//
 let _userCollection=_db.collection(_userCollectionName);

//insert many user //
_userCollection.insertMany([
                          {
                              name:'Mahalakshmi',
                              email:'mahalakshmi@gmail.com',
                              phone:9493547484,
                              role:"Freelancer",
                              company:"Team-x"
                        },
                        {
                            name:'Madhava',
                            email:'madhava@gmail.com',
                            phone:8293547484,
                            role:"invester",
                            company:'Team-x'  
                        },
                        {
                            name:'Mallika',
                            email:'mallika@gmail.com',
                            phone:630056743,
                            role:'entrepreneur',
                            company:"Team-x"
}]).then(()=>{console.log("Users inserted successfully")});

//delete one user//
let id=new ObjectId("65b248c50a25e3c9295ae50d");

_userCollection.deleteOne({_id:id}).then(()=>{
    console.log(" Users deleted successfully");
}).catch(error=>{
    console.log(error);
   });

//create colletion for project//
let _projects=_db.collection("projects");
//insert  many projects// 

_projects.insertMany([
                       {
                         name :'Zerozoner',
                         description:'stat with zero end with success',
                         fileConcept:'concept1'
                         },
                         {
                        name :'Dryfruits',
                        description:'Dryfruits help for body',
                       fileConcept:'concept2'
                       },
                       {
                        name :'Gully store',
                        description:'Common people store',
                       fileConcept:'concept3'
                     },
    ]).then(()=>{console.log("Project inserted successfully")});

    //delete one project//
    let projectid=new ObjectId("65b29eb80d17b2dbb0dc255f");
     _projects.deleteOne({_id:projectid}).then(()=>{
       console.log("deleted")
      }).catch(error=>{
        console.log(error);
       });
    
     //create colletion for user wallets//
    let user_wallets=_db.collection("user_wallets");
    //insert many wallets//
    user_wallets.insertMany([
                     {
                      AccountNo:4577347610053,
                      BankName:'SBI',
                      AccountPersonName:'Mamatha',
                      Email:'mamatha@gmail.com'
                    },
                    {
                        AccountNo:4500004633001,
                        BankName:'SBI',
                        AccountPersonName:'Manasa',
                        Email:'manasa@gmail.com'
                      },
                      {
                        AccountNo:99933566660549,
                        BankName:'SBI',
                        AccountPersonName:'Mamatha',
                        Email:'mamatha@gmail.com'
                      }
                    ]).then(()=>{console.log("user_walets inserted successfully")})

    let waletsid=new ObjectId("65b2a4927009f38964c58ff8");
    user_wallets.deleteOne({_id:waletsid}).then(()=>{
     console.log("deleted user_wallets successfully");
                    });
 
//create colletion for transactions//            
let transactions=_db.collection("transactions");

//insert many transactions//
transactions.insertMany([
                {
                    TransactionId:1001,  
                    paymentMode:'net banking', 
                    amount:5000, 
                    DebitOrCreditNo:4532314356
                },
                {
                    TransactionId:1002,  
                    paymentMode:'cash', 
                    amount:10000, 
                    DebitOrCreditNo:3788454356
                },
                {
                    TransactionId:1003,  
                    paymentMode:'check', 
                    amount:5000, 
                    DebitOrCreditNo:9556673143
                }
   ]).then(()=>{console.log("user_transactions inserted successfully")});

   //delete one transaction//
   let transactionsid=new ObjectId("65b2a4927009f38964c58ffb");
    transactions.deleteOne({_id:transactionsid}).then(()=>{
      console.log("deleted transaction successfully")
      }).catch(error=>{
        console.log(error);

       });app.listen(3005,()=>{
    console.log("server running on 3005");
});
