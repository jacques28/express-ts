import express from 'express';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
      message: 'test',
    });
  });

export default router;