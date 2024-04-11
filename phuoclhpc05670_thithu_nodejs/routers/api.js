const express = require('express');
const multer = require("multer");
const upload = multer({ dest: "./images/" });
const hop_dongcontroller = require("../controllers/api/hop_dongcontroller");

const router = express.Router();

router.get('/hop_dong', hop_dongcontroller.gethop_dong);
router.put('/hop_dong/:id', upload.single('image'), hop_dongcontroller.updatehop_dong);
router.delete('/hop_dong/:id', hop_dongcontroller.deletehop_dong);
router.post('/hop_dong',hop_dongcontroller.checkInput, hop_dongcontroller.posthop_dong);
// // router.patch('/posts/:id', Postcontroller.getPosts);
router.get('/hop_dong/:id', hop_dongcontroller.gethop_dongById);

module.exports = router;