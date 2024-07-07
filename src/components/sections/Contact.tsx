import { Title } from "./index";
import { Button, Input, TextArea } from "../ui";

export const Contact = () => {
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
      <form class={"mt-8"}>
        <div class={"grid grid-cols-2 gap-4"}>
          <Input placeholder={"Nom & Prénom"} />
          <Input placeholder={"Email"} />
        </div>
        <TextArea placeholder={"Description du projet"} />
        <div class={"flex justify-start mt-2"}>
          <Button>Soumettre ma demande</Button>
        </div>
      </form>
    </section>
  );
};
