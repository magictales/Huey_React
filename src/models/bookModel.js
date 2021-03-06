import Airtable from "airtable";
import { AIR_TABLE } from "lib/global";

const tableName = "BookList";

export const getBookList = ({ onFinish = () => {} } = {}) => {

  if (typeof onFinish !== "function") {
    onFinish = () => {};
  }
  fetch(
    `${AIR_TABLE.BASE_URL}/${AIR_TABLE.BASE_ID}/${tableName}?api_key=${AIR_TABLE.API_KEY}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      onFinish(data?.records ?? []);
    })
    .catch((err) => {
      console.log("Error getTableList");
      onFinish(false);
      // Error :(
    });
};

export const setBookList = ({ data = [], onFinish = () => {} } = {}) => {
  const base = new Airtable({ apiKey: AIR_TABLE.API_KEY }).base(
    AIR_TABLE.BASE_ID
  );

  base(tableName).create(data, function (err, records) {
    if (err) {
      console.error(err);
      onFinish(false, err);
      return;
    }
    records.forEach(function (record) {
      onFinish(record);
    });
  });
};
