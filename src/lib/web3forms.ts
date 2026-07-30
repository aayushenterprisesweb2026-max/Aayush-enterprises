const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "fdb99eec-d3f3-433f-a163-bdc52a8fdc1b";

type Web3FormsFields = Record<string, string>;

export const submitWeb3Form = async (
  subject: string,
  fields: Web3FormsFields,
) => {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: "Aayush Enterprises Website",
      ...fields,
    }),
  });

  const result = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit the form.");
  }
};
