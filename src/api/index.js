import { pricingData } from "../data/pricingData";

export const mockApiCall = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: pricingData
      });
    }, 1000); // Simulate a 1-second delay
  });
};
