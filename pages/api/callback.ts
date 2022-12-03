import { NextApiRequest, NextApiResponse } from "next";
import PaytmChecksum from "../../PaytmChecksum";
import Config from "../../config";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const checksum = data.CHECKSUMHASH;
  delete data.CHECKSUMHASH;
  const verifyChecksum = PaytmChecksum.verifySignature(
    { ...data },
    Config.MKEY,
    checksum
  );
  if (verifyChecksum) {
    res.redirect("/success");
  } else {
    res.redirect("/failure");
  }
}
