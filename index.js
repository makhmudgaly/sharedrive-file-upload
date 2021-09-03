const spsave = require("spsave").spsave;

const coreOptions = {
    siteUrl: '[sp url]'
  };
  const creds = {
    username: '[username]',
    password: '[password]'
  };
  
  const fileOptions = {
    folder: 'SiteAssets',
    fileName: 'file.txt',
    fileContent: 'hello world'
  };
  spsave(coreOptions, creds, fileOptions)
  .then(function(){
      console.log('saved');
  })
  .catch(function(err){
      console.log(err);
  });