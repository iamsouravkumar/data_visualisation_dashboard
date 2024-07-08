// const mongoose = require('mongoose');
// const fs = require('fs');

// const dataSchema = new mongoose.Schema({
//     intensity: Number,
//     likelihood: Number,
//     relevance: Number,
//     start_year: Number,
//     end_year: Number,
//     country: String,
//     topic: String,
//     region: String,
//     city: String,
//     sector:String,
//     source:String,
// });

// const Data = mongoose.model('data', dataSchema);

// mongoose.connect('mongodb+srv://iamsouravkumar:pi1AG6S4fipFwvjs@cluster0.uchgg5z.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0', {
// });

// const insertData = async () => {
//     try {
//         const data = JSON.parse(fs.readFileSync('jsondata.json', 'utf8'));
//         for (const item of data) {
//             const document = new Data(item);
//             await document.save();
//         }
//         console.log('Data inserted successfully');
//     } catch (err) {
//         console.error('Error inserting data:', err);
//     } finally {
//         mongoose.connection.close();
//     }
// };

// mongoose.connection.on('connected', insertData);
