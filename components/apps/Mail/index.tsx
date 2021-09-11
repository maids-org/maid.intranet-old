import StyledMail from "components/apps/Mail/StyledMail";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";
import Image from "next/image";
import { useState } from "react";

const Mail = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    // eslint-disable-next-line no-empty-pattern
    processes: { [id]: {} = {} },
  } = useProcesses();

  let codeWindow: Window | null;
  const [autoOpen, setAutoOpen] = useState(false);
  const windowSettings: { target: string; features: string } = {
    target: "mailWindow",
    features:
      "width=1200,height=900,toolbar=no,menubar=no,resizable=yes,status=0,location=0,toolbar=no,titlebar=0,directories=0",
  };

  if (!autoOpen) {
    setAutoOpen(true);
    codeWindow = window.open(
      "https://outlook.office.com/mail",
      windowSettings.target,
      windowSettings.features
    );
  }

  return (
    <StyledMail>
      <article
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "50px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/icons/48x48/mail.png"
            alt="Mail"
            layout="fixed"
            width="64"
            height="64"
          />
          <h2>
            In order to let the mail application work correctly, we opened it in
            a new global window! Further improvements will be supplemented
            later...
          </h2>
          <br />
          <h3>
            If an external window did not appear, press &quot;Move to the
            window&quot; button below:
          </h3>
          <button
            type="button"
            style={{
              margin: 10,
              padding: 10,
              background: "white",
              color: "black",
              border: "none",
              borderRadius: 5,
            }}
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              codeWindow = window.open(
                "https://outlook.office.com/mail",
                windowSettings.target,
                windowSettings.features
              );
            }}
          >
            Move to the window
          </button>
        </div>
      </article>
    </StyledMail>
  );
};

export default Mail;
