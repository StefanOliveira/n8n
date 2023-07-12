// Create a Code node in Workflow to use this code

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: ''
});

const s3 = new AWS.S3();
const bucketName = ''; // Specify the bucket name
const folderName = ''; // Specify the folder name

// Create your own function to create a file or upload an existing file

try {
  var params = {
  Bucket: bucketName,
  Key: folderName + "/" + filename,
  Body: yourFile,
  ContentType: "",
  ACL: "", // Set the desired access control level
};
  console.log("Objeto para envio: ", params);

  await s3.putObject(params).promise();

  return {
    success: true
  }; 
} catch (error) {
  return {
    success: false,
    error: error.message
  }
}

return { json: opportunity };
