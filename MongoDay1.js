db.patients.insertMany([
  {
    firstName: "Max",
    lastName: "Miller",
    age: 26,
    history: [{ disease: "headache", treatment: "..." }],
  },
  {
    firstName: "David",
    lastName: "Miller",
    age: 27,
    history: [{ disease: "cold", treatment: "..." }],
  },
  {
    firstName: "John",
    lastName: "Miller",
    age: 29,
    history: [{ disease: "flu", treatment: "..." }],
  },
]);

db.patients.updateOne(
  { firstName: "David" },
  {
    $set: { age: 25 },
    $push: { history: { disease: "sugar", treatment: "..." } },
  }
);

// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// hospital> db.patients.find()
// [
//   {
//     _id: ObjectId("64d20074ad6e462142d2a8f9"),
//     firstName: 'Max',
//     lastName: 'Miller',
//     age: 26,
//     history: [ { disease: 'headache', treatment: '...' } ]
//   },
//   {
//     _id: ObjectId("64d20074ad6e462142d2a8fa"),
//     firstName: 'David',
//     lastName: 'Miller',
//     age: 25,
//     history: [
//       { disease: 'cold', treatment: '...' },
//       { disease: 'sugar', treatment: '...' }
//     ]
//   },
//   {
//     _id: ObjectId("64d20074ad6e462142d2a8fb"),
//     firstName: 'John',
//     lastName: 'Miller',
//     age: 29,
//     history: [ { disease: 'flu', treatment: '...' } ]
//   }
// ]

db.patients.find({ age: { $gt: 25 } });
// [
//   {
//     _id: ObjectId("64d20074ad6e462142d2a8f9"),
//     firstName: 'Max',
//     lastName: 'Miller',
//     age: 26,
//     history: [ { disease: 'headache', treatment: '...' } ]
//   },
//   {
//     _id: ObjectId("64d20074ad6e462142d2a8fb"),
//     firstName: 'John',
//     lastName: 'Miller',
//     age: 29,
//     history: [ { disease: 'flu', treatment: '...' } ]
//   }
// ]

db.patients.deleteMany({ "history.disease": "cold" });
// { acknowledged: true, deletedCount: 1 }

// db.patients.find()
// [
//   {
//     _id: ObjectId("64d20074ad6e462142d2a8f9"),
//     firstName: 'Max',
//     lastName: 'Miller',
//     age: 26,
//     history: [ { disease: 'headache', treatment: '...' } ]
//   },
//   {
//     _id: ObjectId("64d20074ad6e462142d2a8fb"),
//     firstName: 'John',
//     lastName: 'Miller',
//     age: 29,
//     history: [ { disease: 'flu', treatment: '...' } ]
//   }
// ]

    
