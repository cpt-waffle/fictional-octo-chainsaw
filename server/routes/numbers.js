const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  return res.json([1,2,3,4,5]);
})


module.exports = router;