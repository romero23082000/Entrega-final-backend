const mongoose = require("mongoose");
const petsSchema  = mongoose.Schema({
    name_pet:{
        type: String
    },
    raza_pet:{
        type: String
    },
    age_pet:{
        type: String
    },
    color_pet:{
        type: String
    },
    weight_pet:{
        type: String
    },
    datBith_pet:{
        type: String
    }
})
module.exports = mongoose.model("Pet", petsSchema);
