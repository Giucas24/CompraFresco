const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    nomeProdotto: String,
    descrizione: String,
    provenienza: String,
    metodoColtivazione: String,
    certificazioni: [String],
    valoriNutrizionali: {
        calorie: String,
        carboidrati: String,
        zuccheri: String,
        fibre: String,
        vitaminaC: String,
        potassio: String
    },
    beneficiSalute: String,
    stagionalita: String,
    disponibilita: String,
    usoInCucina: String,
    conservazione: String,
    prezzo: Number,
    valutazione: Number,
    imgSrc: String,
    quantita: String,
    curiosita: String,
    varieta: [String],
    servizioClienti: String,
    politicaReso: String,
    nomeVenditore: String,
    categoria: String,
    numeroRecensioni: String,
    indirizzoTerreno: String
})


module.exports = mongoose.model("Product", productSchema)