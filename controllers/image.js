const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '525220c95f1740699a5c26e1421c5cfc'
});

const handleApiCall = ( req, res) => {
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then( response => {
            if( response){
                res.json(response)
            }
        })
        .catch(err => res.status(400).json('Api does not work'))
}

   
const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then( entries => {
        res.json( entries[0])
    })
    .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}