import { FormEvent, useState } from "react";

import { useData } from "@/hooks";
import { type ContactFormField } from "@/types";

import { Title } from "@/components/sections";
import { Button, Input, TextArea, Select, Spinner } from "@/components/ui";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({});
  const [sent, setSent] = useState(false);

  const { contact } = useData();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok && response.status === 200) {
          setSent(true);
          setIsSubmitting(false);
        } else {
          throw new Error("Une erreur est survenue");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const getComponentFromField = (field: ContactFormField) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <Input
            key={field.name}
            onChange={onChange}
            placeholder={field.placeholder}
            name={field.name}
          />
        );
      case "select":
        return (
          <Select
            key={field.name}
            onChange={onChange}
            options={field?.options || []}
            placeholder={field.placeholder}
            name={field.name}
          />
        );
      case "textarea":
        return (
          <TextArea
            key={field.name}
            onChange={onChange}
            placeholder={field.placeholder}
            name={field.name}
          />
        );
      default:
        return null;
    }
  };

  const firstRowElements = contact.fields.filter((field) => field.inFirstRow);
  const subElements = contact.fields.filter((field) => !field.inFirstRow);

  return (
    <section className={"mb-14"} id={"contact"}>
      <Title content={contact.title} />
      <p
        className={"mt-8"}
        dangerouslySetInnerHTML={{ __html: contact.description }}
      />
      {sent ? (
        <p
          className={"mt-8 bg-green-100 p-4 rounded-lg border border-green-200"}
          dangerouslySetInnerHTML={{ __html: contact.submitted }}
        />
      ) : (
        <form className={"mt-8"} onSubmit={onSubmit}>
          <div className={"grid grid-cols-2 gap-2"}>
            {firstRowElements.map((field) => getComponentFromField(field))}
          </div>
          {subElements.map((field) => getComponentFromField(field))}
          <div className={"flex justify-start mt-2"}>
            <Button submitting={isSubmitting}>
              {contact.submitMessage} {isSubmitting && <Spinner />}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};
