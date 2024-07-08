import { useState } from "preact/hooks";

import { Title } from "./Title";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Select } from "../ui/Select";
import { Spinner } from "../ui/Spinner";
import { useRoute } from "preact-iso";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const route = useRoute();
  const { sent = false } = route.query;

  const onSubmit = () => {
    setIsSubmitting(true);
  };

  let nextUrl = location.origin + "/contact?sent=true";

  return (
    <section class={"mb-14"} id={"contact"}>
      <Title>
        <span class={"text-blue-500"}>Contactez</span>-moi
      </Title>
      <p class={"mt-8"}>
        Vous avez une idée ? Un projet ? Découvrons ensemble comment je peux
        vous aider ! <br /> Merci de donner un maximum de détail sur le projet
        afin que je puisse évaluer correctement la charge de travail que
        représente votre projet. Cela permettra aussi d'avoir un premier
        chiffrage au plus prêt du devis final.
      </p>
      {sent ? (
        <p class={"mt-8 bg-green-100 p-4 rounded-lg border border-green-200"}>
          J'ai bien reçu votre demande, je vous recontacterai dans les plus
          brefs délais. Merci !
        </p>
      ) : (
        <form
          class={"mt-4"}
          action={"https://formsubmit.co/3d56f781c802302b665ebc5d9bf1dcb9 "}
          method={"POST"}
          onSubmit={onSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={nextUrl} />
          <div class={"grid grid-cols-2 gap-4"}>
            <Input placeholder={"Nom & Prénom"} name="name" />
            <Input placeholder={"Email"} type="email" name="email" />
          </div>
          <Select placeholder={"Que puis-je faire pour vous ?"} name="reason" />
          <TextArea placeholder={"Description du projet"} name="description" />
          <div class={"flex justify-start mt-2"}>
            <Button submitting={isSubmitting}>
              Soumettre ma demande {isSubmitting && <Spinner />}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
};
