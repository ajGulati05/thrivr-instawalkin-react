import { notification } from "antd";

const pNotification = ({ type, message, description }) => {
  notification[type]({
    message: message || "Notification",
    description: description
  });
};

export default pNotification;
