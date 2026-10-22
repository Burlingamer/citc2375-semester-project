const items = [
    starterClicker = { 
        id: 0, 
        name: "Starter Clicker",
        desc: "Manual unit generator, starter item.",
        type: "generator",
        subtype: "manual", // generators can either be manual or auto
        yType: "unit", // yield type
        level: 0,
        count: 0,
        UPC: 1,
        cycleTime: 1,
        cost: 10,
        yModifier: 1, // Yield Modifier, should be kept at 1 for most generators
        PCPC: 0 // Power Consumption per cycle, for future use with power management
    },
    autoclicker = { 
        id: 1, 
        name: "AutoClicker",
        desc: "Standard auto unit generator.",
        type: "generator",
        subtype: "auto",
        yType: "unit",
        level: 0,
        count: 0,
        UPC: 1,
        cycleTime: 5,
        cost: 20,
        yModifier: 1, 
        PCPC: 0 
    },
    overclock = { 
        id: 2, 
        name: "Overclock",
        desc: "Time-based consumable that temporarily boosts unit production.",
        type: "consumable", // consumable type, only used once.
        subtype: "manual", 
        yType: "unit", //affects
        level: 0,
        count: 0,
        UPC: 0,
        cycleTime: 10,
        cost: 50,
        yModifier: 2, // doubles production for a limited time
        PCPC: 0
    },
    starterCrank = {
        id: 3,
        name: "Starter Crank",
        desc: "Cheap super low power generator to support advanced upgrades.",
        type: "generator",
        subtype: "manual",
        yType: "power",
        level: 0,
        count: 0,
        UPC: 0.5,
        cycleTime: 0.25,
        cost: 100,
        yModifier: 1,
        PCPC: 0 // self sustainable
    },
    assembler ={
        id: 4,
        name: "Assembler",
        desc: "Advanced auto generator that produces units at a higher rate.",
        type: "generator",
        subtype: "auto",
        yType: "unit",
        level: 0,
        count: 0,
        UPC: 2,
        cycleTime: 1,
        cost: 50,
        yModifier: 1,
        PCPC: 0.05
    },
    powerSurge ={
        id: 5,
        name: "Power Surge",
        desc: "Time-based consumable that temporarily boosts power production.",
        type: "consumable",
        subtype: "manual",
        yType: "power",
        level: 0,
        count: 0,
        UPC: 0,
        cycleTime: 5,
        cost: 100,
        yModifier: 3, // triples production for a limited time
        PCPC: 0
    }

]
// Function to get an item by its id, should return single match.
function getItemById(id) { 
    return items.find(item => item.id === id);
}
// Function to get items by their type, returns array of matches.
function getItemByType(type) { 
    return items.filter(item => item.type === type);
}
// Summary function
function generateItemSummary() {
    console.log(`Generating item summary for ${items.length} items...`);
    for(item of items) {
        console.log(`-- Item: ${item.name} --`);
        let itemUPS;
        if(item.type === "generator") {
            itemUPS = item.UPC / item.cycleTime;
        } else {
            itemUPS = "Consumable, not applicable.";
        }
        console.log(`Units per Second: ${itemUPS}`);
    }
}

function JSONifyItems() {
    let itemsJSON = JSON.stringify(items, null, 2);
    let itemsJSONParsed = JSON.parse(itemsJSON);
    // Return for string insertion
    return itemsJSONParsed[0].desc;
}




