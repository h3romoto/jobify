import express from 'express'
const router = express.Router()
import authenticateUser from '../middleware/auth.js'

import { 
  createJob, 
  getAllJobs, 
  updateJob, 
  deleteJob, 
  showStats } 
from '../controllers/jobsController.js'

router.route('/').post(authenticateUser, createJob).get(authenticateUser, getAllJobs)
// place stats above :id
router.route('/stats').get(authenticateUser, showStats)
router.route('/:id').delete(authenticateUser, deleteJob).patch(authenticateUser, updateJob)

export default router 
