// const multer  = require('multer')
// // const upload = multer({ dest: 'uploads/' })
// const aws = require('aws-sdk')
// const multerS3 = require('multer-s3')
// const s3 = new aws.S3({ /* ... */ })
// const dotenv = require('dotenv')
// dotenv.config()

// aws.config.update({
// secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// accessKeyId: process.env.ACCESS_KEY_ID
// })

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'ultimate-web-img',
//     acl: 'public-read',
//     // metadata: function (req, file, cb) {
//     //   cb(null, {fieldName: file.fieldname});
//     // },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString() + '-' + file.originalname)
//     }
//   })
// })

// module.exports = upload;



const dotenv = require('dotenv')
const multer  = require('multer')
const multerS3  = require('multer-s3')
const aws  = require('aws-sdk')
dotenv.config()

aws.config.update({
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
accessKeyId: process.env.ACCESS_KEY_ID
})

const s3 = new aws.S3()

const upload = multer({
storage: multerS3({
s3: s3,
bucket: 'ultimate-web-img',
acl: 'public-read',
// metadata: function(req, file, cb) {
// cb(null, { fieldName: file.fieldname });
// },
// Metadata: {OrgID: 'TEKKIHUT', PROFILE: 'HD'},
key: function (req, file, cb) {
cb(null, Date.now().toString() + '-' + file.originalname)
}
// key: (req, file, cb) => {
// cb(null, Date.now().toString())
// }
})
})

module.exports = upload;