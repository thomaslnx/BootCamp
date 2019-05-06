const Purchase = require('../models/Purchase')

class ApproveController {
  async update (areq, res) {
    const { id } = req.params

    const { ad } = await Purchase.findById(id).populate({
      path: 'ad',
      populate: {
        path: 'author'
      }
    })

    if (!ad.author._id.equals(req.userId)) {
      return res.status(401).json({ error: "You're not the ad author" })
    }

    if (ad.purchaseBy) {
      return res
        .status(400)
        .json({ error: 'This ad ha already been purchased' })
    }

    ad.purchaseBu = id

    await ad.save()

    return res.json(ad)
  }
}

module.exports = new ApproveController()
