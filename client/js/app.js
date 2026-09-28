// InfraClicker Client Script
const projectTitle = "InfraClicker";
const sampleItemCount = 3;
const baseProductionMultiplier = 1; // Base production rate
const gameEnabled = false; // Master game bool


let autoClicker1UPC = 1; // AutoClicker Units per cycle
let autoClicker1CT = 5; // AutoClicker Cycle Time in seconds
let autoClicker1Cost = 10;
let autoClicker1UPS = autoClicker1UPC / autoClicker1CT; // AutoClicker Units per second

// Temp UPS console log
console.log(`AutoClicker 1 produces ${autoClicker1UPS} units per second.`);
// Temporary if/else based on sampleItemCount
if (sampleItemCount < 3)
{
    console.log("Sample item count is less than 3, consider adding more items.");
} else if (sampleItemCount >= 3)
{
    console.log("Sample item count at least 3 and is sufficient.");
}