const OfficialService = require('../services/official.service')

const service = new OfficialService();

const getByIdNumber = async (req, res) => {
    try {
        const response =  await service.getByIdNumber(req.body);
        res.json({
            succes: true,
            data: response
        })
    } catch (error) {
        res.status(500).send(
            {
                succes: false,
                message: error.message
            }
        );
    }
}

module.exports = { getByIdNumber };