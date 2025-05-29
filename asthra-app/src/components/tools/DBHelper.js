import axios from "axios";

const postData = async (request) => {
  let requestMethod = "POST";
  if (request.url !== undefined && request.url != "") {
    if (!request?.headers) {
      request.data = { ...request.data, userId: +request.userId };
    }
    return axios({
      method: requestMethod || "POST",
      data: request.data,
      url: request.url,
      headers: request?.headers ? request.headers : null,
    })
      .then(async (response) => {
        let data = await response.data;
        if (data) {
          return data;
        } else {
          return data;
        }
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
};

const hosid = import.meta.env.VITE_hospid;
const userid = import.meta.env.VITE_userid;
const branchid = import.meta.env.VITE_branchid;
const mail = import.meta.env.VITE_mail;
const code = import.meta.env.VITE_code;

const req = {
  url: import.meta.env.VITE_DASHURL,
  method: "POST",
  data: {
    hospid: hosid,
    userid: userid,
    branchid: branchid,
  },
};

const logDet = {
  data: { email: mail, password: code },
  url: import.meta.env.VITE_LOGINURL,
  method: "POST",
};

let response;
await postData(logDet).then(async (e) => {
  response = await postData({
    ...req,
    ...{
      headers: {
        Authorization: `Bearer ${e?.token}`,
      },
    },
  });
});
console.log(response, "res", import.meta.env);

const DBHelper = {
  postData,
  response,
};

export default DBHelper;
