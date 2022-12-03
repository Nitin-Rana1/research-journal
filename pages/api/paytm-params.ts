import { CleaningServices } from "@mui/icons-material";
import { setIndexConfiguration } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import Config from "../../config";
import PaytmChecksum from "../../PaytmChecksum";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { custId } = req.query;
  console.log("server", custId);
  const orderId = `Ord_${Date.now()}`;
  const amount = "2000";
  const paytmParams: any = {};
  paytmParams.body = {
    requestType: "Payment",
    mid: Config.MID,
    websiteName: Config.WEBSITE,
    orderId,
    callbackUrl: "/api/callback",
    txnAmount: {
      value: amount,
      currency: "INR",
    },
    userInfo: {
      custId,
    },
  };
  const checksum = await PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    Config.MKEY
  );
  paytmParams.head = {
    signature: checksum,
  };
  const post_res = await fetch(
    `https://${Config.ENV}:443/theia/api/v1/initiateTransaction?mid=${Config.MID}&orderId=${orderId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paytmParams),
    }
  );
  const obj = await post_res.json();
  const data = {
    env: Config.ENV,
    mid: Config.MID,
    amount,
    orderId,
    txnToken: obj.body.txnToken,
  };
  console.log(data);
  res.send(data);
}
