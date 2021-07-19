// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const commandExists = require('command-exists-promise');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "Blade" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('bladeLang.checkBladeInstalled', function () {
    commandExists('blade')
      .then(exists => {
        if (exists) {
          vscode.window.showInformationMessage('Congratulations! Blade programming language is installed.');
        } else {
          vscode.window.showErrorMessage('Blade programming language is not installed.');
        }
      })
      .catch(err => {
        vscode.window.showErrorMessage('Command not supported.');
      });
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
  activate,
  deactivate
}
