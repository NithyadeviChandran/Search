import React from "react";
import { Link } from "react-router-dom";

function NewPage() {
  return (
   
  
    <div
      className="min-h-screen bg-white-100 p-4"
      style={{ paddingTop: "80px" }}
    >
       
      <h1 className="text-3xl">Wie erkenne ich Pflegebedürftigkeit?</h1>
      <Link
          to="/"
          className=" text-xl font-Open Sans border border-rounded border-blue-900 fill-blue-100 text-blue-600"
        >
       zurück
        </Link>
      <div  className="p-4">
        <br />
        <p>
          Pflegebedürftigkeit zu erkennen, kann eine Herausforderung sein, da
          der Übergang oft schleichend verläuft. Viele Menschen zögern, Hilfe in
          Anspruch zu nehmen, obwohl der Bedarf steigt. Die rechtzeitige
          Erkennung von Pflegebedürftigkeit ermöglicht es, frühzeitig
          Unterstützung zu organisieren und so die Lebensqualität der
          betroffenen Person zu erhalten.
        </p>
      </div>
      <div className="border border-blue-900 rounded bg-blue-100 p-4">
      <p>Symptome und Anzeichen
Die Erkennung von Pflegebedürftigkeit beginnt oft mit dem Beobachten von Veränderungen im Alltag. Diese können körperlicher oder geistiger Natur sein und einen Hinweis auf den Unterstützungsbedarf der betroffenen Person geben. Zu den häufigsten Symptomen gehören Schwierigkeiten bei alltäglichen Aktivitäten wie der Körperpflege, der Mobilität oder der Nahrungsaufnahme.
</p>
<br />
<p>Liste der wichtigsten AufgabenBeobachtungen dokumentieren: Halten Sie Veränderungen im Verhalten    oder in der Selbstständigkeit fest.
Gesundheitszustand prüfen: Achten Sie auf körperliche und geistige Symptome wie Verwirrtheit oder Unsauberkeit.
Ärztliche Einschätzung einholen: Suchen Sie einen Arzt auf, um eine umfassende Untersuchung durchzuführen.
Gespräch mit der betroffenen Person: Führen Sie ein offenes Gespräch über die Veränderungen und den möglichen Unterstützungsbedarf.</p>

      </div>
    </div>

  );
}

export default NewPage;
