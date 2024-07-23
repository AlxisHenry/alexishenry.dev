import { useState } from "preact/hooks";

import { Title } from "./Title";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Select } from "../ui/Select";
import { Spinner } from "../ui/Spinner";
import { useRoute } from "preact-iso";
import { useData } from "../../hooks/useData";
import { type ContactFormField } from "../../types";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { contact } = useData();

  const route = useRoute();
  const { sent = false } = route.query;

  const onSubmit = () => {
    setIsSubmitting(true);
  };

  let nextUrl = location.origin + "/contact?sent=true";

  const getComponentFromField = (field: ContactFormField) => {
    switch (field.type) {
      case "text":
      case "email":
        return <Input placeholder={field.placeholder} name={field.name} />;
      case "select":
        return <Select options={field?.options || []} placeholder={field.placeholder} name={field.name} />;
      case "textarea":
        return <TextArea placeholder={field.placeholder} name={field.name} />;
      default:
        return null;
    }
  }

  const firstRowElements = contact.fields.filter((field) => field.inFirstRow);
  const subElements = contact.fields.filter((field) => !field.inFirstRow);

  return (
    <section class={"mb-14"} id={"contact"}>
      <Title content={contact.title} />
      <p class={"mt-8"} dangerouslySetInnerHTML={{ __html: contact.description }} />
      {sent ? (
        <p class={"mt-8 bg-green-100 p-4 rounded-lg border border-green-200"} dangerouslySetInnerHTML={{ __html: contact.submitted }} />
      ) : (
        <form
          class={"mt-8"}
          action={"https://formsubmit.co/3d56f781c802302b665ebc5d9bf1dcb9 "}
          method={"POST"}
          onSubmit={onSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={nextUrl} />
          <div class={"grid grid-cols-2 gap-2"}>
            {firstRowElements.map((field) => getComponentFromField(field))}
          </div>
          {subElements.map((field) => getComponentFromField(field))}
          <div class={"flex justify-start mt-2"}>
            <Button submitting={isSubmitting}>
              {contact.submitMessage} {isSubmitting && <Spinner />}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};
