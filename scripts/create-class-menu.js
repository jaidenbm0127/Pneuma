/// <reference types="@league-of-foundry-developers/foundry-vtt-types" />

class CreateClassMenu extends Application{
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
          title: "My Custom Dialog",
          template: "modules/pneuma/templates/create-class.html",
          width: 800,
          height: 1000,
          resizable: true
        });
    }
    

  /** Activate event listeners after rendering */
  activateListeners(html) {
    super.activateListeners(html);

    // Submit event handler
    html.find('button[data-action="submit"]').click(() => {
        const classData = {
            name: "Test Class",
            description: "test description",
            hitDie: "d8"
        }
        createWorldCompendiumAndInsertClass(classData)
      // You can add your logic to save or process the class name here
    });
  }
}

async function createWorldCompendiumAndInsertClass(classData) {
    const compendiumKey = "world.classes";  // The key for the compendium (world-scoped)
    let pack = game.packs.get(compendiumKey);
  
    // 1. Check if the compendium exists in the world
    if (!pack) {
      console.log("Compendium not found, creating a new one...");
  
      // 2. Create a new world-specific compendium if it doesn't exist
      pack = await CompendiumCollection.createCompendium({
        label: "Class Compendium",
        type: "Item",  // Compendium for storing items
        name: "classes",
        package: "world"  // Link this compendium to the world
      });
    }
  
    // 3. Create a new "Class" item
    const classItemData = {
        name: classData.name || "New Class",
        type: "class",
        system: {  // Change 'data' to 'system'
        description: {
            value: classData.description || "A new class description"
        },
        hitDie: classData.hitDie || "d8",  // Properly insert hitDie here under system
        },
        img: classData.img || "icons/svg/book.svg",  // Placeholder image
    };
  
  
    // 4. Create the item and add it to the compendium
    let classItem = await Item.create(classItemData, { temporary: true });
    await pack.importDocument(classItem);
  
    console.log("Class item added to the world compendium:", classItem);
}

new CreateClassMenu().render(true);
