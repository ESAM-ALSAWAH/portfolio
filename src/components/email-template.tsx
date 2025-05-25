import * as React from "react";

interface EmailTemplateProps {
  message: string;
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  name,
}) => (
  <div>
    <h1>Hello, I am {name}</h1>
    <br />
    <p>{message}</p>
  </div>
);
