/**
 * show help
 *
 * @param  {string} help messaeg if specifying a message
 * @return {string} full help message
 */
exports.show_help = (text) => {
   if (text)
      console.log(require('chalk').yellow.bold(text))
   else
      require('yargs').showHelp()
}
