const fs = require("fs");
const officialsData = fs.readFileSync("./src/db/data/officials.json", "utf-8");
const parsedData = JSON.parse(officialsData);

class OfficialService {
    constructor() {}

    async getByIdNumber(data) {
        try {
            const result = parsedData.find(
                (official) => official.identificationNumber == data.identificationNumber
            )
            return result;
        } catch (error) {
            console.log('error al ejecutar consulta: ', error);
            throw error;
        }
    }
}

module.exports = OfficialService;