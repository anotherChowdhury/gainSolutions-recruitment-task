import mongoose from 'mongoose'

async function connectToDatabase() {
  mongoose.connect(
    'mongodb://localhost:27017/GainSolutions',
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err
      console.log('Connection Successful')
    }
  )
}

export default connectToDatabase
