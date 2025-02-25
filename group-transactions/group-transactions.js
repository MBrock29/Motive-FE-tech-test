// To be fetched from https://gist.githubusercontent.com/simeor/5dd52dccdf5c4b4183ab2f2e80728bec/raw/5d042617ce514687fedffba35ec04539cb173481/data.json
const data = [
  {
    id: "852e8426-89c5-4cfa-a3bb-994b77d9114e",
    paymentDate: "2020-10-09T00:00:00.000Z",
    amount: 48,
    merchant: "Marks & Spencer",
    category: "Food",
  },
  {
    id: "8bd5bc94-bef5-4929-a18b-672537621a8e",
    paymentDate: "2020-10-29T00:00:00.000Z",
    amount: 5,
    merchant: "Bob's Salon",
    category: "Miscellaneous",
  },
  {
    id: "8bad87f9-1a1e-4c1a-8053-a949f44d35f5",
    paymentDate: "2020-10-30T00:00:00.000Z",
    amount: 2287,
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: "3c6ebe7d-7dfe-4c10-8ff9-2db69f8f9698",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 7,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "fbf5f95a-7a2a-42e1-bc95-ba4c6cf8c56e",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 7,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "9e5fd067-f730-4199-a4c1-c169e56d5a94",
    paymentDate: "2020-11-02T00:00:00.000Z",
    amount: 7,
    merchant: "Marks & Spencer",
    category: "Food",
  },
  {
    id: "d21a7012-c8a8-4cec-bece-99a97159b72e",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 7,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "4713d24a-8baf-4852-a68e-7b3791d53d2e",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 7,
    merchant: "Marks & Spencer",
    category: "Food",
  },
  {
    id: "831567f4-acdf-4260-a38f-fee80ab577ea",
    paymentDate: "2020-11-02T00:00:00.000Z",
    amount: 10,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "f4baeb79-4f0b-4118-a501-cce2c2ac511c",
    paymentDate: "2020-10-19T00:00:00.000Z",
    amount: 11,
    merchant: "Bob's Salon",
    category: "Miscellaneous",
  },
  {
    id: "1a444d30-c221-4112-8d0c-97589452ee91",
    paymentDate: "2020-10-09T00:00:00.000Z",
    amount: 13,
    merchant: "Marks & Spencer",
    category: "Food",
  },
  {
    id: "aeffd859-0a34-4eb0-bee1-144f2ed59299",
    paymentDate: "2020-11-02T00:00:00.000Z",
    amount: 28,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "13b4bb1e-356f-4707-9827-264daf28d6c2",
    paymentDate: "2020-10-13T00:00:00.000Z",
    amount: 4,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "02e72cee-72ca-41cd-8fc0-57785667aeed",
    paymentDate: "2020-10-28T00:00:00.000Z",
    amount: 100,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "2c539532-5dd1-40e9-818f-6d4780dd3daa",
    paymentDate: "2020-10-20T00:00:00.000Z",
    amount: 190,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "af352baf-325d-4f2a-8007-67c767cebecd",
    paymentDate: "2020-10-16T00:00:00.000Z",
    amount: 6,
    merchant: "Bob's Salon",
    category: "Miscellaneous",
  },
  {
    id: "089df4d9-4cc5-47e4-b79a-e4411a7ad529",
    paymentDate: "2020-11-02T00:00:00.000Z",
    amount: 21,
    merchant: "Bob's Salon",
    category: "Miscellaneous",
  },
  {
    id: "92bacace-35c6-496c-ab73-4c69840970d5",
    paymentDate: "2020-10-19T00:00:00.000Z",
    amount: 7,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "959e8310-1c13-4bc6-97e1-9cb5fec15a45",
    paymentDate: "2020-10-09T00:00:00.000Z",
    amount: 50,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "2abb6416-197e-4e13-a597-ae34ad287300",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 28,
    merchant: "Marks & Spencer",
    category: "Food",
  },
  {
    id: "4f108ecb-552c-42a9-aa7a-f9a2e454024b",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 28,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "849c8a00-0bbb-4c65-a3e4-172b1fe93f56",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 21,
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: "969deae9-a944-486f-aeb9-2441e565fee3",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Marks & Spencer",
    category: "Food",
  },
  {
    id: "2d3bd3ed-3062-4ddc-a869-5794d06ff243",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 28,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "95e72f41-3101-4b92-aab4-44f8b155abac",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "faca2cae-722a-4c20-8510-4b8f8200d254",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "f011733d-c908-4bf5-88fc-7fdad91ee010",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 28,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "0fe05bbf-f00a-4c98-a3f4-9136f0b70b05",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "cd463f0d-9488-4844-be26-e1a09d90aa42",
    paymentDate: "2020-10-12T00:00:00.000Z",
    amount: 34,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "a82984bf-b461-49cc-98e2-03eea7f5d8ac",
    paymentDate: "2020-10-12T00:00:00.000Z",
    amount: 13,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "fddc7bd4-979b-47db-8de8-e4dbbaaf7160",
    paymentDate: "2020-10-09T00:00:00.000Z",
    amount: 26,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "6186b06f-2937-4d51-bce0-e14a6c38f358",
    paymentDate: "2020-10-22T00:00:00.000Z",
    amount: 17,
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: "61817cf8-9154-4db1-a9e3-016fd9a6b449",
    paymentDate: "2020-10-09T00:00:00.000Z",
    amount: 12,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "d169d2a9-d5dd-4f37-bc7d-85bd14641b9a",
    paymentDate: "2020-10-14T00:00:00.000Z",
    amount: 51,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "e70560f9-9d2d-4833-a427-68082fdf8b4c",
    paymentDate: "2020-11-02T00:00:00.000Z",
    amount: 920,
    merchant: "Bob's Salon",
    category: "Miscellaneous",
  },
  {
    id: "882c0873-ca89-4875-ac73-4d85a9559ba5",
    paymentDate: "2020-10-13T00:00:00.000Z",
    amount: 17,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "9e0fd258-9c74-4e54-83ae-d2fae72ad64d",
    paymentDate: "2020-10-09T00:00:00.000Z",
    amount: 8,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "31e09f70-ecad-4ab7-acf6-586ff9163adf",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 6,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "cc59047a-d8cd-4959-9d4d-fbe035a96766",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: "155c1605-a61c-4d5f-801b-f191cda8760f",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 6,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "c74e2018-d8f2-4307-a6d6-62e938a8acf5",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Marks & Spencer",
    category: "Food",
  },
  {
    id: "f112292d-a01b-493a-a935-74d7f10c91ac",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 6,
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: "e435bde2-7066-4abf-a992-8078a9dd7592",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "35997491-7daf-424b-9f76-cdf7b02eefeb",
    paymentDate: "2020-11-02T00:00:00.000Z",
    amount: 6,
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: "732bf4e5-66e9-4de7-a875-662d44bbb9ad",
    paymentDate: "2020-11-02T00:00:00.000Z",
    amount: 10,
    merchant: "Charitable Donations Co.",
    category: "Charity",
  },
  {
    id: "c90d4190-98c6-4a8c-8deb-8dfb2cc7f385",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 10,
    merchant: "Tesco Ltd",
    category: "Food",
  },
  {
    id: "157186ce-8d92-44ce-b846-13ca102dc2a9",
    paymentDate: "2020-10-19T00:00:00.000Z",
    amount: 1,
    merchant: "TFL London",
    category: "Transport",
  },
  {
    id: "614ee47a-9c7a-4336-b446-c08dedfc8040",
    paymentDate: "2020-11-04T00:00:00.000Z",
    amount: 6,
    merchant: "TFL London",
    category: "Travel",
  },
  {
    id: "c47fe27d-dc67-4a1a-8da8-5c0371f86c15",
    paymentDate: "2020-10-30T00:00:00.000Z",
    amount: 4,
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: "8a1445cf-6c6f-4ab6-ab1a-87a1b7b93520",
    paymentDate: "2020-10-16T00:00:00.000Z",
    amount: 19,
    merchant: "Marks & Spencer",
    category: "Food",
  },
];

// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch(
//     "https://gist.githubusercontent.com/simeor/5dd52dccdf5c4b4183ab2f2e80728bec/raw/5d042617ce514687fedffba35ec04539cb173481/data.json"
//   )
//     .then((response) => response.json())
//     .then((data) => setData(data));
// }, []);

const groupTransactionsByMerchant = () =>
  data.reduce(function (previousValue, currentValue) {
    let merchant = currentValue.merchant;
    if (!previousValue.hasOwnProperty(merchant)) {
      previousValue[merchant] = { transactions: [], count: 0 };
    }
    previousValue[merchant].transactions.push(currentValue);
    previousValue[merchant].count++;

    return previousValue;
  }, {});

const groupTransactionsByDate = () => {
  const info = data.reduce((itemsIterated, { paymentDate, merchant }) => {
    const date = new Date(paymentDate).toLocaleString().split(",")[0];
    if (!itemsIterated[paymentDate]) {
      itemsIterated[paymentDate] = {
        date: date,
        transactions: [],
        count: 0,
      };
    }
    itemsIterated[paymentDate].transactions.push(merchant);
    itemsIterated[paymentDate].count++;
    return itemsIterated;
  }, {});
  return Object.values(info);
};

module.exports = {
  groupTransactionsByMerchant,
  groupTransactionsByDate,
  data,
};
