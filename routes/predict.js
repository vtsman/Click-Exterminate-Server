var express = require('express');

var bayes = require('bayes');
var fs = require('fs');

var classifier = bayes();

process.on('SIGINT', function () {
    fs.writeFileSync("./classData.json", classifier.toJson());
});
process.on('exit', function () {
    fs.writeFileSync("./classData.json", classifier.toJson());
});

fs.exists("./classData.json", function(x){
    if(x){
        fs.readFile("./classData.json", function(err, data){
           // var obj = JSON.parse(data);
           // if(obj != undefined)
           // classifier = bayes.fromJson(data);
        })
    }
})

var trainingshite = "New President Is 'Hours Away' From Royal Pregnancy, How The World's Most Extreme Baby Moms Lost Weight, John McCain Speaks Out In His Own Words, Miley Cyrus Turns 13, A Tour Of The Future Of Hot Dogs In The United States, Keeping Out The American Dream, How To Get Your Kids To See The Light, U.S. And China Top Oil Companies To Hold Major Gas Crisis For North Korea, This Guy Thinks His Cat Was Drunk For His Five Years, He Gets A Sex Assault At A Home, WATCH: Gay Teens Made Emotional Letter To J.K. Williams, Residents Can't Remember If They Lost Their Wine At The Same Time, How To Get T-Pain, Taylor Swift Becomes New Face Of Victim Of Peace Talks, John McCain Warns Supreme Court To Stand Up For Birth Control Reform, How To Use The Screen On The IPhone 3 Music Player, Con Games: Van Ray Police Officer Looking To Fight Violence, Islamic State Kills Four In Gaza, Syria \"Done\", U.S. Students' Latest Aid Problem, Tips From Two And A Half Men: Getting Real, WATCH: Mitt Romney's New Book, Israeli Forces: Muslim-American Wife's Murder To Be Shot In The U.S., Mary J. Williams On Coming Out As A Woman, Peter King: 'Rush To Be An American', 'Shark Week': Top 5 Super Bowl Results, All The Hollywood News For May 2nd, 2015, 'China:' The Great Ban, David Cameron Defends Possible Gay Issues, When Nick Met Voice Was The Worst Movies 2014, Weird And Wild Moments From College Football Week 3, Rick Scott: I Am 100 % A Lot More Than The Right, New Hampshire Teen In Court After Killing Of Police Officer, How To Not Let A Baby Away, Photo Of World's Most Controversial Money, Are You Using The N * * * T - Bomb?, Resident Evil 6 (Look At The Good People), Gay-Rights Congress Is Still Fighting The House, Building Stress? Do Your Work, Don't Ask For Help, Analyst: \"We're A Boy Nation\", Massive 'Batman Vs. Batman' Teaser Is Epic, Powerful, And King, 22 Things That Will Make You Miss Porn All Summer To Use, Little Girl Makes Red Carpet Debut, Charlie Brown Goes To Space, Anderson Cooper On The Many Faces Of Matt O ' Scott, Weird Things Couples Do On Valentine's Day, Adorable Kid Has A '3-Word' & Celebrates Her Cup Plans, What Do Many White People Still Have Now?, What Are Santa's Future And What It Means For You, And Why We Should Care, The 16 Best Cities For A Restaurant In A Kitchen"
var gu = "The 2016 Race, Economic View, Public Health, The 2016 Race, Mental Leaps, Survey Says?, Economic Trends, The 2016 Race, The 2016 Race, The New Health Care, The 2016 Race, Economic View, The 2016 Race, The 2016 Race, The 2016 Race, Public Health, Chilling Effect, Cost of College, The 2016 Race, The 2016 Race, No. 37: Big Wedding or Small?, How One Stupid Tweet Blew Up Justine Sacco’s Life, Inside Amazon: Wrestling Big Ideas in a Bruising Workplace, To Fall in Love With Anyone, Do This, The Mixed-Up Brothers of Bogotá, South Carolina Officer Is Charged With Murder of Walter Scott, The Moral Bucket List, The Lonely Death of George Bell, 52 Places to Go in 2015, My Own Life, Germanwings Pilot Was Locked Out of Cockpit Before Crash in France, SEAL Team 6: A Secret History of Quiet Killings and Blurred Lines, ISIS Enshrines a Theology of Rape, The Last Day of Her Life, Inside America’s Toughest Federal Prison, The Price of Nice Nails, Paris Attacks Kill More Than 100, Police Say; Border Controls Tightened, ISIS Women and Enforcers in Syria Recount Collaboration, Anguish and Escape, Poor Little Rich Women, Supreme Court Ruling Makes Same-Sex Marriage a Right Nationwide, A Company Copes With Backlash Against the Raise That Roared, The Strange Case of Anna Stubblefield, She Answered His Ad for a Roommate, Moved In and Never Left, Church Massacre Suspect Held as Charleston Grieves, The Best and Worst Places to Grow Up: How Your Area Compares, John Boehner, House Speaker, Will Resign From Congress, San Bernardino Shooting Kills at Least 14; Two Suspects Are Dead, A Baby Dies at Day Care, and a Mother Asks Why She Had to Leave Him So Soon, Why Our Children Don’t Think There Are Moral Facts, U.S. Soldiers Told to Ignore Sexual Abuse of Boys by Afghan Allies, Suicide on Campus and the Pressure of Perfection, How Nonemployed Americans Spend Their Weekdays: Men vs. Women, Fatal Descent of Germanwings Plane Was ‘Deliberate,’ French Authorities Say, Drug Goes From $13.50 a Tablet to $750, Overnight, A Renegade Trawler, Hunted for 10,000 Miles by Vigilantes, Leonard Nimoy, Spock of ‘Star Trek,’ Dies at 83, Why I Defaulted on My Student Loans, I Am Not Charlie Hebdo, A Quick Puzzle to Test Your Problem Solving, Tom Brady Cannot Stop, The Wedding Toast I’ll Never Give, In Zimbabwe, We Don’t Cry for Lions, Greece’s Debt Crisis Explained, The Real Reason College Tuition Costs So Much , Pink Slips at Disney. But First, Training Foreign Replacements., What Makes a Woman?, Airbnb Horror Story Points to Need for Precautions, Searching for Sex, Bill Cosby, in Deposition, Said Drugs and Fame Helped Him Seduce Women, Angelina Jolie Pitt: Diary of a Surgery, The Right Dose of Exercise for a Longer Life, Three Teams of Coordinated Attackers Carried Out Assault on Paris, Officials Say; Hollande Blames ISIS, Terrorists Strike Charlie Hebdo Newspaper in Paris, Leaving 12 Dead, Robert Durst of HBO’s ‘The Jinx’ Says He ‘Killed Them All’, The Families Funding the 2016 Presidential Election, Jihad and Girl Power: How ISIS Lured 3 London Girls, One Twin Exercises, the Other Doesn’t, The Megyn Kelly Moment, A Life in Motion, Stopped Cold, Jon Stewart and ‘The Daily Show’: 9 Essential Moments, The Agency, San Bernardino Suspects Left Trail of Clues, but No Clear Motive, How to Figure Out Cheryl’s Birthday, Mars Shows Signs of Having Flowing Water, Possible Niches for Life, NASA Says, The Stanford Undergraduate and the Mentor, Exes Explain Ghosting, the Ultimate Silent Treatment, After Indicting 14 Soccer Officials, U.S. Vows to End Graft in FIFA, Clerk in Kentucky Chooses Jail Over Deal on Same-Sex Marriage, Lost Brother in Yosemite, France Strikes ISIS Targets in Syria in Retaliation for Attacks, A Math Problem From Singapore Goes Viral: When Is Cheryl’s Birthday?, A Shot, a Glimpse of an AK-47, and U.S. Servicemen Pounced on Gunman on Train to France, In College and Hiding From Scary Ideas, How to Survive the College Admissions Madness, California Drought Tests History of Endless Growth, Ex-Broadcaster Kills 2 on Air in Virginia Shooting; Takes Own Life, 6 Baltimore Police Officers Charged in Freddie Gray Death, Stream of Foreign Wealth Flows to Elite New York Real Estate, End the Gun Epidemic in America, How They Got Their Guns, How to Live Wisely, Why a Generation of Adoptees Is Returning to South Korea, The Singular Mind of Terry Tao, Illuminating North Korea, Oregon Killer Described as Man of Few Words, Except on Topic of Guns, The Myth of Big, Bad Gluten, One Company’s New Minimum Wage: $70,000 a Year, ISIS and the Lonely Young American, The Closing of the Canadian Mind, He’s the Last Boxer to Beat Floyd Mayweather Jr., and He So Regrets It, Co-Pilot in Germanwings Crash Hid Mental Illness From Employer, Authorities Say, Iran and the Obama Doctrine, Couple Kept Tight Lid on Plans for San Bernardino Shooting, What Do We Really Know About Osama bin Laden’s Death?, French Police Storm Hostage Sites, Killing Gunmen, Screen Addiction Is Taking a Toll on Children, Vaccine Critics Turn Defensive Over Measles , A Very Revealing Conversation With Rihanna, Stowaways and Crimes Aboard a Scofflaw Ship, Benghazi Panel Engages Clinton in Tense Session, News Analysis, The 2016 Race, Michael Cosgrove, ACW, Sivaram Pochiraju, Annalise, Pilgrim, kaw7, The Poet McTeagle, Think Positive, APS, Glen, Sivaram Pochiraju, Glen, dcl, Dr. Stephen Sklarow, Matt Ng, Lena Lingard, Sherrie Noble, Dennis, third.coast, linda, third.coast, DW, Howard G, Laura, Jim, Glen, C Wolfe, Steve, Lex, GMarie, The 2016 Race"
trainingshite.split(", ").forEach(function(title){
    classifier.learn(title, 'clickbait')
})
gu.split(", ").forEach(function(title){
    classifier.learn(title, 'fine')
})

var router = express.Router();

global.Buffer = global.Buffer || require('buffer').Buffer;

if (typeof btoa === 'undefined') {
    global.btoa = function (str) {
        return new Buffer(str).toString('base64');
    };
}

if (typeof atob === 'undefined') {
    global.atob = function (b64Encoded) {
        return new Buffer(b64Encoded, 'base64').toString();
    };
}

/*var gcloud = require('google-cloud');
var prediction = gcloud.prediction;
var predictionClient = prediction({
    projectId: 'image-project-145816',
    keyFilename: '/Users/Spencer/Downloads/predict.json'
});*/

//var model = predictionClient.model('clickbait');

//if(!model.exists)

//console.log(JSON.stringify(model));

/* GET home page. */
var out = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    /*model.query(atob(req.originalUrl.substr("/predict/".length)), function(err, result){
        if(!err){
            res.send(JSON.stringify(result));
        }
        else{
            res.send(JSON.stringify(err));
        }
    })*/
    res.send(classifier.categorize(atob(req.originalUrl.substr("/predict/".length))));
}

var train = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var obj = JSON.parse(atob(req.originalUrl.substr("/train/".length)));
    console.log(JSON.stringify(obj));
    /*model.train(obj.cat, obj.data, function(err) {
        console.log(err);
        model.analyze(function(err, result, response){
            if(!err){
                res.send(JSON.stringify(result));
            }
            else{
                res.send(JSON.stringify(err))
            }
        })
    });*/
    classifier.learn(obj.data, obj.cat);
    res.send("OK!");
}

module.exports = {"out": out, "train": train};
