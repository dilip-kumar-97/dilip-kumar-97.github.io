export interface details {
    Address: String,
    Education: [{
        Institute: String,
        Study: String,
        passedOut: String
    }
    ],
    Language: [String],
    Location: String,
    Professional_Traits: [String],
    Skills: [String],
    age: String,
    mailId: String,
    name: String,
    mobileNumber: number,
    profile: String,
    DateOfBirth:String,
    workExperiance:[
        {
            companyName:String,
            period:String,
            role:String,
            roleDescription:[]
        }
    ]

}