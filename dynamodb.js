var params = {
  TableName: "envios",
  KeySchema: [
    {
      AttributeName: "id",
      KeyType: "HASH",
    },
  ],
  AttributeDefinitions: [
    {
      AttributeName: "id",
      AttributeType: "S",
    },
    {
      AttributeName: "pendiente",
      AttributeType: "S",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  GlobalSecondaryIndexes: [
    {
      IndexName: "EnviosPendientesIndex",
      KeySchema: [
        {
          AttributeName: "id",
          KeyType: "HASH",
        },
        {
          AttributeName: "pendiente",
          KeyType: "RANGE",
        },
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY",
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    },
  ],
};
console.log("Creating table");
dynamodb.createTable(params, function (err, data) {
  if (err) ppJson(err);
  else ppJson(data);
  console.log("CreateTable returned");
});
