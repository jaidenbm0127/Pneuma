/// <reference types="@league-of-foundry-developers/foundry-vtt-types" />

class MainMenuApplication extends Application {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        title: "My Custom Dialog",
        template: "modules/pneuma/templates/main-menu.html",
        width: 600,
        height: 400,
        resizable: true
      });
    }
  
    activateListeners(html) {
      super.activateListeners(html);
      
      // Bind button click handlers here
      html.find('button[data-action="newClass"]').click(() => {
        this.openCreateClassMenu();
      });
  
      html.find('button[data-action="viewClasses"]').click(() => {
        this.openViewClassesMenu();
      });
  
      html.find('button[data-action="createSubclass"]').click(() => {
        this.openCreateSubclassMenu();
      });

      html.find('button[data-action="viewSubclasses"]').click(() => {
        this.openViewSubclassesMenu();
      });
    }
  
    openCreateClassMenu() {
      new CreateClassMenu().render(true);
    }
  
    openViewClassesMenu() {
      console.log("View Classes clicked");
    }
  
    openCreateSubclassMenu() {
      console.log("Create Subclass clicked");
    }

    openViewSubclassesMenu(){
        console.log("View Subclasses clicked");
    }
  }
  
  // Exporting the class is not necessary; the script will load globally
  window.MainMenuApplication = MainMenuApplication;
  