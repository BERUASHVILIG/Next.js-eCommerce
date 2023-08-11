import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sknyQqTKUIhnru9NKYxQECczD21WJdbW0rjjSgeimyJojuFt8dRxAPpLTRuWTHTHAMSWp9lAdzuVshHSHeSdzy5LPYGV04bqLWoAMFFCnrwYmgc07IJ9rzKzRXDqXKGg8RFqSLfEUmHlLvpssFT1x6UbXXiPmAjGiRPe4dMvFS8bbPXg9CLZ",
})
