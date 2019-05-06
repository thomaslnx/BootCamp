const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail({
      from: '"Marcos Moura" <marcosm@uft.edu.br>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      // html: `<p>Teste: ${content}</p>`
      template: 'purchase',
      context: { user, content, ad }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
