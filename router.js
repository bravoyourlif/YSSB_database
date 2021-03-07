'use strict';
const express = require('express');
const router = express.Router();

const index = require('./routers/index');

const manager_page_list = require('./routers/manager_page_list');
const get_client_profile =require('./routers/get_client_profile');
const get_freelancer_profile =require('./routers/get_freelancer_profile');
const get_request_list = require('./routers/get_request_list');
const get_request_info = require('./routers/get_request_info');
const get_view_message = require('./routers/get_view_message');
const file_uplaod = require('./routers/file_upload');

router.use('/', index);

router.use('/manager_page_list', manager_page_list);
router.use('/get_client_profile', get_client_profile);
router.use('/get_freelancer_profile', get_freelancer_profile);
router.use('/get_request_list', get_request_list);
router.use('/get_request_info', get_request_info);
router.use('/get_view_message', get_view_message);
router.use('/file_upload', file_uplaod);


module.exports = router;
