import { toast } from "react-hot-toast";

import { AlertType } from "../enums/Alert";

export const Alert = (message: string, type: AlertType) => {
  if (type === AlertType.Success) {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
