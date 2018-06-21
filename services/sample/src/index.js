import mongoose, { Schema } from 'mongoose';

console.log('Hello World!!');

// ******** Mongo ********
const TestSchema = new Schema(
  {
    test: {
      tag: {
        type: String,
        required: true,
      },
      testname: {
        type: String,
        lowercase: true,
      },
    },
  }
);

const Test = mongoose.model('Test', TestSchema);

// connect to Mongo
// const db =
mongoose.connect('mongodb://mongo:27017');

const newTest = new Test();
newTest.test.tag = 'abc';
newTest.test.testname = 'def';
newTest.save(newTest, (err) => {
  if (err) {
    console.log(err.message);
  }
});
