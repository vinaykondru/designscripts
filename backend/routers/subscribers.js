// const express = require('express')
// const app = express()
// const router = express.Router()
// const Subscriber = require('../models/subscribers')
// router.get('/', async (req, res) => {
//     try {
//         const subscriber = await Subscriber.find()
//         res.status(200).json(subscriber)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })
// router.get('/:id',getSubscriber, (req, res) => {
//     res.json(res.subscriber)
// })
// router.post('/', async (req, res) => {
    
//         const subscriber = new Subscriber({
//             name:req.body.name,
//             channel:req.body.channel
//         })

//     try {
//         const newSubscriber = await subscriber.save()
//         res.status(200).json(newSubscriber)
//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
// })
// router.patch('/:id', getSubscriber,async (req, res) => {
//     if (req.body.name != null) {
//         res.subscriber.name=req.body.name
//     }
//     if (req.body.channel != null) {
//         res.subscriber.channel=req.body.channel
//     }
//     try {
//         const updatedSubscriber = await res.subscriber.save()
//         res.json(updatedSubscriber)
//     } catch (error) {
//         res.status(400).json({message:err.message})
//     }
// })
// router.delete('/:id', getSubscriber,async (req, res) => {
//     try {
//         await res.subscriber.remove()
//         res.json({message:'deleted'})
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })
// async function getSubscriber(req, res,next) {
//     let subscriber 
//     try {
//         subscriber = await Subscriber.findById(req.params.id)
//         if (subscriber ==null){
//             return res.status(404).json({message:'cannot find user'})
//         }
//     } catch(err) 
        
//      {
//          res.status(500).json({message:err.message})
        
//     }
//     res.subscriber=subscriber
//     next()
// }
// module.exports= router;
const express = require('express')
const app = express()
const router = express.Router()
const Subscriber = require('../models/subscribers')
router.get('/', async (req, res) => {
    try {
        const subscriber = await Subscriber.find()
        res.status(200).json(subscriber)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
router.get('/:id',getSubscriber, (req, res) => {
    res.json(res.subscriber)
})
router.post('/', async (req, res) => {
    
        const subscriber = new Subscriber({
            article:req.body.article
        })

    try {
        const newSubscriber = await subscriber.save()
        res.status(200).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.patch('/:id', getSubscriber,async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.article=req.body.article
    }
    if (req.body.channel != null) {
        res.subscriber.channel=req.body.channel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({message:err.message})
    }
})
router.delete('/:id', getSubscriber,async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({message:'deleted'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
async function getSubscriber(req, res,next) {
    let subscriber 
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber ==null){
            return res.status(404).json({message:'cannot find user'})
        }
    } catch(err) 
        
     {
         res.status(500).json({message:err.message})
        
    }
    res.subscriber=subscriber
    next()
}
module.exports= router;


