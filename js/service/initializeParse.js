Parse.initialize(
  "tUg59uGQI7MdmGAu9zEynicEP9RAYM88h2ajcjfo",
  "2XCaj5CXHaVPt19GVVa80D9Lj645Zfg7tYc5lK7r"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// Create a new User
async function createParseUser() {
  // Creates a new Parse "User" object, which is created by default in your Parse app
  let user = new Parse.User();
  // Set the input values to the new "User" object
  user.set("username", document.getElementById("username").value);
  user.set("email", document.getElementById("email").value);
  user.set("password", document.getElementById("password").value);
  try {
    // Call the save method, which returns the saved object if successful
    user = await user.save();
    if (user !== null) {
      // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
      alert(
        `New object created with success! ObjectId: ${user.id}, ${user.get(
          "username"
        )}`
      );
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}
// Add on click listener to call the create parse user function
document
  .getElementById("createButton")
  .addEventListener("click", async function () {
    createParseUser();
  });

// Read this https://www.back4app.com/docs/javascript/parse-javascript-sdk
