// use company

db.companies.insertOne(
  {
    _id: 1,
    name: "Argusoft",
    employeeCount: 200,
    country: "India",
    state: "Gujrat",
  },
  { writeConcern: { w: 1, j: 0 } }
);
//   {
//     acknowledged: true,
//     insertedId: 1
//   }
//   company> db.companies.find()
//   [
//     {
//       _id: 1,
//       name: 'Argusoft',
//       employeeCount: 200,
//       country: 'India',
//       state: 'Gujrat'
//     }
//   ]

db.companies.insertMany([
  {
    _id: 2,
    name: "Microsoft",
    employeeCount: 2000,
    country: "India",
    state: "Bangalore",
  },
  {
    _id: 3,
    name: "Google",
    employeeCount: 2000,
    country: "US",
    state: "NewYork",
  },
]);
//  {
//     acknowledged: true,
//     insertedIds: {
//       '0': 2,
//       '1': 3
//     }
//   }

// company>  db.companies.find()
// [
//     {
//       _id: 1,
//       name: 'Argusoft',
//       employeeCount: 200,
//       country: 'India',
//       state: 'Gujrat'
//     },
//     {
//       _id: 2,
//       name: 'Microsoft',
//       employeeCount: 2000,
//       country: 'India',
//       state: 'Bangalore'
//     },
//     {
//       _id: 3,
//       name: 'Google',
//       employeeCount: 2000,
//       country: 'US',
//       state: 'NewYork'
//     }
//   ]

db.companies.insertMany(
  [
    {
      _id: 1,
      name: "Argusoft",
      employeeCount: 200,
      country: "India",
      state: "Gujrat",
    },
    {
      _id: 4,
      name: "Amazon",
      employeeCount: 1000,
      country: "India",
      state: "Maharashtra",
    },
  ],
  { ordered: false }
);
// E11000 duplicate key error collection: company.companies index: _id_ dup key: { _id: 1 }
// Result: BulkWriteResult {
//   insertedCount: 1,
//   matchedCount: 0,
//   modifiedCount: 0,
//   deletedCount: 0,
//   upsertedCount: 0,
//   upsertedIds: {},
//   insertedIds: { '0': 1, '1': 4 }
// }
// Write Errors: [
//   WriteError {
//     err: {
//       index: 0,
//       code: 11000,
//       errmsg: 'E11000 duplicate key error collection: company.companies index: _id_ dup key: { _id: 1 }',
//       errInfo: undefined,
//       op: {
//         _id: 1,
//         name: 'Argusoft',
//         employeeCount: 200,
//         country: 'India',
//         state: 'Gujrat'
//       }
//     }
//   }
// ]
// db.companies.find()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employeeCount: 200,
//     country: 'India',
//     state: 'Gujrat'
//   },
//   {
//     _id: 2,
//     name: 'Microsoft',
//     employeeCount: 2000,
//     country: 'India',
//     state: 'Bangalore'
//   },
//   {
//     _id: 3,
//     name: 'Google',
//     employeeCount: 2000,
//     country: 'US',
//     state: 'NewYork'
//   },
//   {
//     _id: 4,
//     name: 'Amazon',
//     employeeCount: 1000,
//     country: 'India',
//     state: 'Maharashtra'
//   }
// ]

db.companies.insertOne(
  {
    _id: 5,
    name: "Netflix",
    employeeCount: 500,
    country: "India",
    state: "Maharashtra",
  },
  { writeConcern: { j: 0 } }
);
// { acknowledged: true, insertedId: 5 }
// company> db.companies.find()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employeeCount: 200,
//     country: 'India',
//     state: 'Gujrat'
//   },
//   {
//     _id: 2,
//     name: 'Microsoft',
//     employeeCount: 2000,
//     country: 'India',
//     state: 'Bangalore'
//   },
//   {
//     _id: 3,
//     name: 'Google',
//     employeeCount: 2000,
//     country: 'US',
//     state: 'NewYork'
//   },
//   {
//     _id: 4,
//     name: 'Amazon',
//     employeeCount: 1000,
//     country: 'India',
//     state: 'Maharashtra'
//   },
//   {
//     _id: 5,
//     name: 'Netflix',
//     employeeCount: 500,
//     country: 'India',
//     state: 'Maharashtra'
//   }
// ]
db.companies.insertOne(
  {
    _id: 6,
    name: "Adobe",
    employeeCount: 600,
    country: "India",
    state: "Maharashtra",
  },
  { writeConcern: { j: 1 } }
);
// { acknowledged: true, insertedId: 6 }
// company> db.companies.find()
// [
//   {
//     _id: 1,
//     name: 'Argusoft',
//     employeeCount: 200,
//     country: 'India',
//     state: 'Gujrat'
//   },
//   {
//     _id: 2,
//     name: 'Microsoft',
//     employeeCount: 2000,
//     country: 'India',
//     state: 'Bangalore'
//   },
//   {
//     _id: 3,
//     name: 'Google',
//     employeeCount: 2000,
//     country: 'US',
//     state: 'NewYork'
//   },
//   {
//     _id: 4,
//     name: 'Amazon',
//     employeeCount: 1000,
//     country: 'India',
//     state: 'Maharashtra'
//   },
//   {
//     _id: 5,
//     name: 'Netflix',
//     employeeCount: 500,
//     country: 'India',
//     state: 'Maharashtra'
//   },
//   {
//     _id: 6,
//     name: 'Adobe',
//     employeeCount: 600,
//     country: 'India',
//     state: 'Maharashtra'
//   }
// ]

db.movieStarts.find({ "rating.average": { $gt: 9.2 }, runtime: { $lt: 100 } });
db.movieStarts.find(
  { "rating.average": { $gt: 9.2 }, runtime: { $lt: 100 } },
  { _id: 1 }
);
// [
//   { _id: ObjectId("64d339a0658205fceaebec46") },
//   { _id: ObjectId("64d339a0658205fceaebec91") },
//   { _id: ObjectId("64d339a0658205fceaebec99") },
//   { _id: ObjectId("64d339a0658205fceaebec9a") },
//   { _id: ObjectId("64d339a0658205fceaebecb3") },
//   { _id: ObjectId("64d339a0658205fceaebecbf") }
// ]

db.movieStarts.find({ $or: [{ genres: "Drama" }, { genres: "Action" }] });
db.movieStarts
  .find({ $or: [{ genres: "Drama" }, { genres: "Action" }] })
  .count();
// 177

db.movieStarts.find({
  "meta.rating": { $gt: 9.2 },
  "meta.runtime": { $lt: 100 },
});
// [
//   {
//     _id: ObjectId("64d33d5c2eeab8f36a1f27c3"),
//     title: 'Supercharged Teaching',
//     meta: { rating: 9.3, aired: 2016, runtime: 60 },
//     visitors: 370000,
//     expectedVisitors: 1000000,
//     genre: [ 'thriller', 'action' ]
//   }
// ]

db.movieStarts.find({ $or: [{ genre: "drama" }, { genre: "action" }] });
// [
//   {
//     _id: ObjectId("64d33d5c2eeab8f36a1f27c3"),
//     title: 'Supercharged Teaching',
//     meta: { rating: 9.3, aired: 2016, runtime: 60 },
//     visitors: 370000,
//     expectedVisitors: 1000000,
//     genre: [ 'thriller', 'action' ]
//   },
//   {
//     _id: ObjectId("64d33d5c2eeab8f36a1f27c4"),
//     title: 'Teach me if you can',
//     meta: { rating: 8.5, aired: 2014, runtime: 90 },
//     visitors: 590378,
//     expectedVisitors: 500000,
//     genre: [ 'action', 'thriller' ]
//   },
//   {
//     _id: ObjectId("64d33d5c2eeab8f36a1f27c5"),
//     title: 'The Last Student Returns',
//     meta: { rating: 9.5, aired: 2018, runtime: 100 },
//     visitors: 1300000,
//     expectedVisitors: 1550000,
//     genre: [ 'thriller', 'drama', 'action' ]
//   }
// ]

db.movieStarts.find({ $expr: { $gt: ["$visitors", "$expectedVisitors"] } });
// [
//   {
//     _id: ObjectId("64d33d5c2eeab8f36a1f27c4"),
//     title: 'Teach me if you can',
//     meta: { rating: 8.5, aired: 2014, runtime: 90 },
//     visitors: 590378,
//     expectedVisitors: 500000,
//     genre: [ 'action', 'thriller' ]
//   }
// ]

// BoxOfficeExtend Database
db.movieStarts.find({ genre: { $size: 2 } });
// [
//   {
//     _id: ObjectId("64d351e30d2102b3971a4c6c"),
//     title: 'Supercharged Teaching',
//     meta: { rating: 9.3, aired: 2016, runtime: 60 },
//     visitors: 370000,
//     expectedVisitors: 1000000,
//     genre: [ 'thriller', 'action' ],
//     ratings: [ 10, 9, 9 ]
//   },
//   {
//     _id: ObjectId("64d351e30d2102b3971a4c6d"),
//     title: 'Teach me if you can',
//     meta: { rating: 8, aired: 2014, runtime: 90 },
//     visitors: 590378,
//     expectedVisitors: 500000,
//     genre: [ 'action', 'thriller' ],
//     ratings: [ 8, 8 ]
//   }
// ]
db.movieStarts.find({ "meta.aired": 2018 });
// [
//   {
//     _id: ObjectId("64d351e30d2102b3971a4c6e"),
//     title: 'The Last Student Returns',
//     meta: { rating: 9.5, aired: 2018, runtime: 100 },
//     visitors: 1300000,
//     expectedVisitors: 1550000,
//     genre: [ 'thriller', 'drama', 'action' ],
//     ratings: [ 10, 9 ]
//   }
// ]

db.movieStarts.find({ ratings: { $elemMatch: { $gt: 8, $lt: 10 } } });
// [
//   {
//     _id: ObjectId("64d351e30d2102b3971a4c6c"),
//     title: 'Supercharged Teaching',
//     meta: { rating: 9.3, aired: 2016, runtime: 60 },
//     visitors: 370000,
//     expectedVisitors: 1000000,
//     genre: [ 'thriller', 'action' ],
//     ratings: [ 10, 9, 9 ]
//   },
//   {
//     _id: ObjectId("64d351e30d2102b3971a4c6e"),
//     title: 'The Last Student Returns',
//     meta: { rating: 9.5, aired: 2018, runtime: 100 },
//     visitors: 1300000,
//     expectedVisitors: 1550000,
//     genre: [ 'thriller', 'drama', 'action' ],
//     ratings: [ 10, 9 ]
//   }
// ]

db.persons.updateMany(
  { name: "Bravo" },
  { $set: { hobbies: ["Badminton"], requiresTeam: "true" } },
  { upsert: true }
);
// {
//   acknowledged: true,
//   insertedId: ObjectId("64d36106ee5fe5c963e9eb3b"),
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 1
// }
// users> db.persons.find()
// [
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b5"),
//     name: 'Max',
//     hobbies: [
//       { title: 'Sports', frequency: 3 },
//       { title: 'Cooking', frequency: 6 }
//     ],
//     phone: 131782734
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b6"),
//     name: 'Manuel',
//     hobbies: [
//       { title: 'Cooking', frequency: 5 },
//       { title: 'Cars', frequency: 2 }
//     ],
//     phone: '012177972',
//     age: 30
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b7"),
//     name: 'Anna',
//     hobbies: [
//       { title: 'Sports', frequency: 2 },
//       { title: 'Yoga', frequency: 3 }
//     ],
//     phone: '80811987291',
//     age: null
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b8"),
//     name: 'Chris',
//     hobbies: [ 'Sports', 'Cooking', 'Hiking' ]
//   },
//   {
//     _id: ObjectId("64d35f66ee5fe5c963e9e9dc"),
//     name: 'Miller',
//     requiresTeam: 'No',
//     hobbies: [ 'Badminton' ]
//   },
//   {
//     _id: ObjectId("64d36106ee5fe5c963e9eb3b"),
//     name: 'Bravo',
//     hobbies: [ 'Badminton' ],
//     requiresTeam: 'true'
//   }
// ]

db.persons.updateMany(
  { requiresTeam: "true" },
  { $set: { NumberOfPlayers: 2 } }
);
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// users> db.persons.find()
// [
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b5"),
//     name: 'Max',
//     hobbies: [
//       { title: 'Sports', frequency: 3 },
//       { title: 'Cooking', frequency: 6 }
//     ],
//     phone: 131782734
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b6"),
//     name: 'Manuel',
//     hobbies: [
//       { title: 'Cooking', frequency: 5 },
//       { title: 'Cars', frequency: 2 }
//     ],
//     phone: '012177972',
//     age: 30
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b7"),
//     name: 'Anna',
//     hobbies: [
//       { title: 'Sports', frequency: 2 },
//       { title: 'Yoga', frequency: 3 }
//     ],
//     phone: '80811987291',
//     age: null
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b8"),
//     name: 'Chris',
//     hobbies: [ 'Sports', 'Cooking', 'Hiking' ]
//   },
//   {
//     _id: ObjectId("64d35f66ee5fe5c963e9e9dc"),
//     name: 'Miller',
//     requiresTeam: 'No',
//     hobbies: [ 'Badminton' ]
//   },
//   {
//     _id: ObjectId("64d36106ee5fe5c963e9eb3b"),
//     name: 'Bravo',
//     hobbies: [ 'Badminton' ],
//     requiresTeam: 'true',
//     NumberOfPlayers: 2
//   }
// ]

db.persons.updateMany(
  { requiresTeam: { $exists: true } },
  { $inc: { NumberOfPlayers: 10 } }
);
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 2,
//   modifiedCount: 2,
//   upsertedCount: 0
// }

db.persons.find();
// [
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b5"),
//     name: 'Max',
//     hobbies: [
//       { title: 'Sports', frequency: 3 },
//       { title: 'Cooking', frequency: 6 }
//     ],
//     phone: 131782734
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b6"),
//     name: 'Manuel',
//     hobbies: [
//       { title: 'Cooking', frequency: 5 },
//       { title: 'Cars', frequency: 2 }
//     ],
//     phone: '012177972',
//     age: 30
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b7"),
//     name: 'Anna',
//     hobbies: [
//       { title: 'Sports', frequency: 2 },
//       { title: 'Yoga', frequency: 3 }
//     ],
//     phone: '80811987291',
//     age: null
//   },
//   {
//     _id: ObjectId("64d35e469c679b7d9b9ce4b8"),
//     name: 'Chris',
//     hobbies: [ 'Sports', 'Cooking', 'Hiking' ]
//   },
//   {
//     _id: ObjectId("64d35f66ee5fe5c963e9e9dc"),
//     name: 'Miller',
//     requiresTeam: 'No',
//     hobbies: [ 'Badminton' ],
//     NumberOfPlayers: 10
//   },
//   {
//     _id: ObjectId("64d36106ee5fe5c963e9eb3b"),
//     name: 'Bravo',
//     hobbies: [ 'Badminton' ],
//     requiresTeam: 'true',
//     NumberOfPlayers: 12
//   }
// ]

db.persons.aggregate([
  { $match: { "dob.age": { $gt: 50 } } },
  {
    $group: {
      _id: "$gender",
      count: { $count: {} },
      average_age: { $avg: "$dob.age" },
    },
  },
  { $sort: { count: -1 } },
]);
// [
//   { _id: 'male', count: 1079, average_age: 62.066728452270624 },
//   { _id: 'female', count: 1125, average_age: 61.90577777777778 }
// ]

db.persons
  .aggregate([
    { $match: { "dob.age": { $gt: 50 } } },
    {
      $group: {
        _id: { gender: "$gender" },
        numPersons: { $sum: 1 },
        avgAge: { $avg: "$dob.age" },
      },
    },
    { $sort: { numPersons: -1 } },
  ])
  .pretty();
// [
//   {
//     _id: { gender: 'female' },
//     numPersons: 1125,
//     avgAge: 61.90577777777778
//   },
//   {
//     _id: { gender: 'male' },
//     numPersons: 1079,
//     avgAge: 62.066728452270624
//   }
// ]

db.persons.aggregate([
  {
    $project: {
      email: 1,
      DOB: {
        $dateToString: {
          format: "%Y-%m-%d",
          date: { $convert: { input: "$dob.date", to: "date" } },
        },
      },
    },
  },
  {
    $limit: 3,
  },
]);
// [
//   {
//     _id: ObjectId("64d471dfdb0e222f863b0fe7"),
//     email: 'victor.pedersen@example.com',
//     DOB: '1959-02-19'
//   },
//   {
//     _id: ObjectId("64d471dfdb0e222f863b0fe8"),
//     email: 'gideon.vandrongelen@example.com',
//     DOB: '1971-03-28'
//   },
//   {
//     _id: ObjectId("64d471dfdb0e222f863b0fe9"),
//     email: 'پریا.پارسا@example.com',
//     DOB: '1962-01-10'
//   }
// ]
