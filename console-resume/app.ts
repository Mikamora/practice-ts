let me : me = {
    Name: "Michael Richardson",
    Career: "Software Dev Student at Innovate Bham",
    Description: "I am a business minded individual with a lot of potential to devote toward a company."
}
let myInterests : Array<string> = ["TV", "Video Games", "Rock Climbing", "Streaming on Twitch"];

console.log("Name: " + me.Name.toUpperCase());
console.log("Career: " + me.Career);
console.log("Description: " + me.Description);
console.log(" ");

console.log("My Interests:");
for (let i = 0; i < myInterests.length; i++) {
    console.log(" * " + myInterests[i]);
}
console.log(" ");

console.log("My Previous Experience:");
displayPosition("Paraprofessional", "Greystone Elementary School", "Helped administer tests and other resources to special needs students");
displayPosition("Full-Time Sales Associate", "H&M", "Established sales, worked a cash register, learned to multi-task effectively");
displayPosition("Vet Technician", "Cat Haven Vet Clinic", "Administered vaccines, helped with surgeries, reception");
console.log(" ");

console.log("My Skills:");
displaySkill("percussion", true);
displaySkill("JavaScript", true);
displaySkill("CSS", false);
displaySkill("HTML", false);
displaySkill("Patience", true);
displaySkill("Team Oriented", true);
displaySkill("Leadership", true);

function displayPosition(title: string, name: string, description: string) {
    console.log(" * " + title + " at " + name + " - " + description + ".");
}
function displaySkill(skill: string, cool: boolean) {
    if (cool == true) {
        console.log(" * BAM: " + skill);
    } else {
        console.log(" * " + skill);
    }
}
interface me {
    Name: string,
    Career: string,
    Description: string
}