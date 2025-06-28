import inquirer from "inquirer";
import qrImage from "qr-image";

inquirer
  .prompt([
    {
        message: "Type your  URL: ",
        name: "URL"
    },
    {
        message: "What's your name: ",
        name: "USER"
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const user = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });