/// <reference types="@league-of-foundry-developers/foundry-vtt-types" />

Hooks.on('renderSidebarTab', (app, html) => {
  if (app.options.id === "compendium") {
    const buttonContainer = html.find(".directory-footer");

    // Create a new button
    const myButton = $(`<button class="my-custom-button"><i class="fas fa-cogs"></i> Add class/subclass </button>`);

    // Add a click event to your button
    myButton.on("click", () => {
      // Render the Application (the new dialog)
      new MainMenuApplication().render(true);
    });

    // Append the button to the container
    buttonContainer.append(myButton);
  }
});

